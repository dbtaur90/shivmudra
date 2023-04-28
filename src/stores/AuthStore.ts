import { defineStore } from "pinia";

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        sabhasadID: -1,
        verificationID: -1,
        isVerification: false,
        isSet: false,
        isDocumentsUploaded: false
    }),
    actions: {
        setValues(sabhasadID: number, verificationID = -1, isVerification = false, isDocumentsUploaded = false) {
            // Perform authentication logic and update state accordingly
            this.sabhasadID = sabhasadID;
            this.verificationID = verificationID;
            this.isVerification = isVerification;
            this.isDocumentsUploaded = isDocumentsUploaded;
            this.isSet = true;
        },
        clearValues() {
            // Perform logout logic and update state accordingly
            this.sabhasadID = -1;
            this.isDocumentsUploaded = false;
            this.verificationID = -1;
            this.isVerification = false;
            this.isSet = false;
        },
    },
})