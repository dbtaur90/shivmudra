import axios, { AxiosError } from 'axios';
import { SabhasadDetails } from '../interfaces/SabhasadDetails';
import { ISabhasadList } from '@/interfaces/ISabhasadList';
import { useAuthStore } from '@/stores/AuthStore';
import router from '@/router';
import { LoggedUser } from '@/interfaces/LoggedUser';

export class SabhasadService {
  private baseApiUrl = 'https://marathashivmudra.co.in/api/';
  private apiUrl = 'https://marathashivmudra.co.in/api/sabhasad/';
  private authStore = useAuthStore();


  public async getUsers(sabhadadID: number): Promise<SabhasadDetails> {
    const response = await axios.get<SabhasadDetails>(`${this.apiUrl}sabhasadDetails/${sabhadadID}`);
    return response.data;
  }

  public async getSabhasadList(): Promise<ISabhasadList[]> {
    const headers = this.getHeaders();
    try {
      const response = await axios.get<ISabhasadList[]>(`${this.apiUrl}sabhasad-list`, { headers: headers });
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      }
      return [];
    }
    catch (e: any) {
      const err: AxiosError = e;
      if (err.response) {
        if (!(err.response.status >= 500 && err.response.status < 600)) {
          this.authStore.logout();
          router.replace({ name: 'login' })
        }
      } else {
        console.log(err);
        alert(err);
      }
      return [];
    }

  }

  public async generateSabhasadNumber(vid: number, sid: number): Promise<any> {
    const headers = this.getHeaders();
    const response = await axios.post<any>(`${this.apiUrl}generate-sabhasad-number`, { verificationID: vid, sabhasadID: sid }, { headers: headers });
    return response.data;
  }

  public async getUserFromLocal(): Promise<SabhasadDetails> {

    let response: SabhasadDetails = {
      document_data: {},
      education_data: {},
      employee_data: {
        employmentType: [],
      },
      permanent_address: {},
      helpForOrg: []
    };
    const sabhasadDetails = localStorage.getItem('sabhasadDetails');
    if (sabhasadDetails)
      response = await JSON.parse(sabhasadDetails);
    if (response.sabhasadID && !response.education_data.id) {
      response = await this.getUsers(response.sabhasadID);
    }
    return response;
  }

  public async updateUser(payload: SabhasadDetails): Promise<number> {
    const freshSabhasadDetailText = localStorage.getItem('freshSabhasadDetail');
    /* if (freshSabhasadDetailText) {
      const freshSabhasadDetail = JSON.parse(freshSabhasadDetailText);
      if (Object.is(freshSabhasadDetail, payload)) {
        return payload.sabhasadID ? payload.sabhasadID : -1;
      }
    } */
    const response = await axios.post<number>(`${this.apiUrl}register`, payload);
    return response.data;

  }

  public async getSabhasadNameAddress(sabhasadNumber: string): Promise<any> {
    const headers = this.getHeaders();
    const response = await axios.get<any>(`${this.apiUrl}sabhasad-name-address/${sabhasadNumber}`, { headers: headers });
    return response.data;
  }

  public async updateSabhasadVerificationStatus(payload: any): Promise<any> {
    const headers = this.getHeaders();
    const response = await axios.post<any>(`${this.apiUrl}update-verification-status`, payload, { headers: headers });
    return response.data;
  }
  public async login(token?: string | null): Promise<LoggedUser> {
    if (!token) {
      router.push({ path: '/login' })
    }
    const headers = this.getHeaders(token);

    const response = await axios.post<LoggedUser>(`${this.baseApiUrl}login`, null, { headers: headers });
    return response.data;
  }

  getHeaders(token?: string | null) {
    if (!token)
      token = this.authStore.$state.authToken
    if (token.trim().length > 5) {
      return {
        'token': token
      }
    }
  }
}