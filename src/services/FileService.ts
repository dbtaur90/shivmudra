import { DocumentData } from "@/interfaces/DocumentData";
import { SabhasadDetails } from "@/interfaces/SabhasadDetails";
import axios from "axios";

export class FileService {
    constructor(){
        axios.defaults.headers.common['token'] = '2e912f0031fa463c90426b49164e4291';
    }
    private apiUrl = 'https://marathashivmudra.co.in/api/sabhasad/';
    public async getFile(apiUrl: string): Promise<File> {
        apiUrl += `?v=${new Date().getTime()}`;
        const response = await axios.get(apiUrl, { responseType: "blob", headers: { 'cache-control': 'no-cache' } });
        const blob = response.data;
        const temp = apiUrl.split('/').pop();
        const type = await this.detectFileType(blob);
        return new File([blob], temp ? temp : 'temp.jpeg', { type: type });
    }

    public async uploadDocuments(formDataObject: any): Promise<any> {

        const response = await axios.post<any>(`${this.apiUrl}submitDocument`, formDataObject.formdata,
            {
                headers: { 'Content-Type': 'multipart/form-data' },
                onUploadProgress: (progressEvent) => {
                    if (progressEvent.total)
                        formDataObject.uploadProgress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
                }
            }
        );
        return response.data
    }

    public async loadDocuments(sabhadadID: number): Promise<DocumentData | null> {
        const response = await axios.get<SabhasadDetails>(`${this.apiUrl}sabhasadDetails/${sabhadadID}`);
        if (response.data)
            return response.data.document_data;
        return null
    }

    detectFileType(blob: Blob): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                const arr = new Uint8Array(reader.result as ArrayBuffer).subarray(0, 4);
                let header = '';
                for (let i = 0; i < arr.length; i++) {
                    header += arr[i].toString(16);
                }
                let type = '';
                switch (header) {
                    case '89504e47':
                        type = 'image/png';
                        break;
                    case '47494638':
                        type = 'image/gif';
                        break;
                    case 'ffd8ffe0':
                    case 'ffd8ffe1':
                    case 'ffd8ffe2':
                        type = 'image/jpeg';
                        break;
                    case '25504446':
                        type = 'application/pdf';
                        break;
                    default:
                        type = 'application/octet-stream';
                        break;
                }
                resolve(type);
            };
            reader.onerror = reject;
            reader.readAsArrayBuffer(blob);
        });
    }
}