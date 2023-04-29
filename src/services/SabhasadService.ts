import axios from 'axios';
import { SabhasadDetails } from '../interfaces/SabhasadDetails';
import { ISabhasadList } from '@/interfaces/ISabhasadList';
import { useAuthStore } from '@/stores/AuthStore';
import router from '@/router';
import { LoggedUser } from '@/interfaces/LoggedUser';

export class SabhasadService {
  private baseApiUrl = 'https://marathashivmudra.co.in/api/';
  private apiUrl = 'https://marathashivmudra.co.in/api/sabhasad/';
  private authStore = useAuthStore();
  private token = '';
  constructor() {
    this.token = this.authStore.authToken
    if (this.token.trim().length > 5)
      axios.defaults.headers.common['token'] = this.token;
  }

  public async getUsers(sabhadadID: number): Promise<SabhasadDetails> {
    const response = await axios.get<SabhasadDetails>(`${this.apiUrl}sabhasadDetails/${sabhadadID}`);
    // localStorage.setItem('freshSabhasadDetail', JSON.stringify(response.data));
    return response.data;
  }

  public async getSabhasadList(): Promise<ISabhasadList[]> {
    const response = await axios.get<ISabhasadList[]>(`${this.apiUrl}sabhasad-list`);
    return response.data;
  }

  public async generateSabhasadNumber(vid: number): Promise<any> {
    const response = await axios.post<any>(`${this.apiUrl}generate-sabhasad-number`, { verificationID: vid });
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
    const response = await axios.get<any>(`${this.apiUrl}sabhasad-name-address/${sabhasadNumber}`);
    return response.data;
  }

  public async updateSabhasadVerificationStatus(payload: any): Promise<any> {
    const response = await axios.post<any>(`${this.apiUrl}update-verification-status`, payload);
    return response.data;
  }

  public async login(token?: string | null): Promise<LoggedUser> {
    if (!token) {
      router.push({ path: '/login' })
    }
    const response = await axios.post<LoggedUser>(`${this.baseApiUrl}login`);
    return response.data;
  }
}