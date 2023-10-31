import { PostIncomingRequest } from "@/interfaces/PostIncomingRequest";
import router from "@/router";
import { useAuthStore } from "@/stores/AuthStore";
import axios, { AxiosError } from "axios";

export class ExecutiveService {
    private apiUrl = 'https://marathashivmudra.co.in/api/posting/';
    private authStore = useAuthStore();

    public async getOpArea(payload: any) {
        const headers = this.getHeaders();
        try {
            const response = await axios.get<any[]>(`${this.apiUrl}operationalArea`, { params: payload, headers: headers });
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            return [];
        }
        catch (e: any) {
            const err: AxiosError = e;
            if (err.response && !(err.response.status >= 500 && err.response.status < 600)) {
                this.authStore.logout();
                router.replace({ name: 'login' })
            }
            else {
                console.log(err);
                alert(err);
            }
            return [];
        }

    }

    public async submitPostingRequest(payload: any) {
        const headers = this.getHeaders();
        const response = await axios.post<number>(`${this.apiUrl}request`, payload, { headers: headers });
        return response.data;
    }

    public async getPostRequestList() {
        const headers = this.getHeaders();
        try {
            const response = await axios.get<PostIncomingRequest[]>(`${this.apiUrl}in-request-list`, { headers: headers });
            if (response.status >= 200 && response.status < 300) {
                return response.data;
            }
            return [];
        } catch (e: any) {
            const err: AxiosError = e;
            if (err.status && !(err.status >= 500 && err.status < 600)) {
                this.authStore.logout();
                router.replace({ name: 'login' })
            }
            else {
                console.log(err);
                alert(err);
            }
            return [];
        }

    }

    public async changePostingRequestStatus(executiveID: number, status = 1) {
        const headers = this.getHeaders();
        const response = await axios.post<any>(`${this.apiUrl}approve-posting`, { executiveID: executiveID, status: status }, { headers: headers });
        return response.data
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

