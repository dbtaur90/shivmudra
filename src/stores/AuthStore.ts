import { LoggedUser } from "@/interfaces/LoggedUser";
import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        authToken: '',
        loggedUser: {} as LoggedUser,
        isSet: false
    }),
    persist: true,
    actions: {
        logout() {
            // Perform logout logic and update state accordingly
            this.authToken = ''
           this.loggedUser = {}
           this.isSet = false;
        },
    },
})