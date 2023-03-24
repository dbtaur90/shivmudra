import { SabhasadDetails } from "@/interfaces/SabhasadDetails";
import { defineStore } from "pinia";

export const useSabhasadStore = defineStore('sabhasadStore',{
    state: () => ({
        sabhasad: {
            document_data : {},
            education_data: {},
            employee_data: {
                employmentType: []
            },
            permanent_address: {}
        } as SabhasadDetails,
        isConnected: false
    })
})