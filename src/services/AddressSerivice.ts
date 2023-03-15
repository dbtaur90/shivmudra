import { Districts } from "@/interfaces/Districts";
import { SubDistrict } from "@/interfaces/SubDistrict";
import { Village } from "@/interfaces/Village";
import axios from "axios";

export class AddressService {
    private apiUrl = 'https://marathashivmudra.co.in/api/addressDirectory/';

    public async getAllDistricts(): Promise<Districts[]> {
        const response = await axios.get<Districts[]>(this.apiUrl + 'districts');
        return response.data;
    }

    public async getSubDistricts(district:string): Promise<SubDistrict[]> {
        const response = await axios.get<SubDistrict[]>(this.apiUrl + 'talukas/' + district);
        return response.data;
    }

    public async getVillages(district:string, taluka:string): Promise<Village[]>{
        const response = await axios.get<Village[]>(this.apiUrl + 'villages?district='+ district + '&taluka=' + taluka);
        return response.data;
    }
}