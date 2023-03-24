import axios from 'axios';
import { SabhasadDetails } from '../interfaces/SabhasadDetails';

export class SabhasadService {
  private apiUrl = 'https://marathashivmudra.co.in/api/sabhasad/sabhasadDetails/33';

  public async getUsers(): Promise<SabhasadDetails> {
    const response = await axios.get<SabhasadDetails>(this.apiUrl);
    return response.data;
    // const response:SabhasadDetails = await JSON.parse(localStorage.getItem('sabhasadDetails') || '{}');
    // return response
  }
}