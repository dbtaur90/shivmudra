<template>
    <div class="table-responsive" style="max-width: 600px;">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">नाव</th>
                    <th scope="col">पद</th>
                    <th scope="col">संपर्क </th>
                    <th scope="col"> नियुक्ती प्रदाता संपर्क</th>
                    <th scope="col">Action </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(reference, index) in requestList" :key="reference.sabhasadID"
                    :class="{ 'text-success': reference.exStatus == 3, 'text-warning': reference.exStatus == 1 }">
                    <td scope="row">{{ index + 1 }}</td>

                    <td>
                        <button type="button" @click="navigateRoute(reference.sabhasadID, 'registration', false)"
                            class="btn btn-link"> {{
                                reference.name }}
                        </button>
                    </td>
                    <td>{{ reference.title }}</td>
                    <td>
                        <button type="button" class="btn btn-link" @click="sendToWhatsapp(reference.whatsappNumber)">
                            {{ reference.whatsappNumber }}
                        </button>
                    </td>
                    <td>
                        <button type="button" class="btn btn-link" @click="sendToWhatsapp(reference.requestedBy)">
                            {{ reference.requestedBy }}
                        </button>
                    </td>
                    <td>
                        <span class="bg-success text-white" v-if="reference.exStatus == 1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-check" viewBox="0 0 16 16">
                                <path
                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </span>
                        <button v-else @click="changeRequestStatus(reference)" class="btn btn-link" type="button">
                            Approve
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import { ExecutiveService } from "@/services/ExecutiveService";
import { PostIncomingRequest } from '@/interfaces/PostIncomingRequest';
import { useVerifyDocumentStore } from '@/stores/VerifyDocumentStore';
import router from '@/router';
import { useAuthStore } from '@/stores/AuthStore';
declare global {
    interface Window {
        otpless: any;
    }
}

export default class PostingRequestList extends Vue {
    requestList: PostIncomingRequest[] = [];
    private verifyStore = useVerifyDocumentStore();
    private authStore = useAuthStore();
    private service!: ExecutiveService;
    async mounted(): Promise<void> {
        // Define the 'otpless' function
        this.service = new ExecutiveService();
        document.title = "नियुक्ती विनंती यादी| मराठा शिवमुद्रा प्रतिष्ठान"
        this.requestList = await this.service.getPostRequestList();
        if (this.authStore.$state.loggedUser.post == 'प्रदेशाध्यक्ष')
            this.requestList = this.requestList.filter(request => request.level != 1);
    }



    navigateRoute(reference: number | undefined, nextRoute: string, isVerification = true) {
        if (reference)
            this.verifyStore.setValues(reference, 0, isVerification, false);
        router.push({ name: nextRoute });
    }

    sendToWhatsapp(phoneNumber?: number, message = "जय शिवराय") {
        const whatsappLink = `whatsapp://send?phone=91${phoneNumber}&text=${encodeURIComponent(message)}`;
        location.href = whatsappLink;
    }

    async changeRequestStatus(reference: PostIncomingRequest) {
        if (reference.executiveID && confirm(`आपण ${reference.name} यांच्या ${reference.title} या पदाला मान्यता देऊ इच्छुता?`)) {
            const letterNo = await this.service.changePostingRequestStatus(reference.executiveID);
            const link = `https://marathashivmudra.co.in/api/posting/letter/${letterNo}`;
            alert("यशस्वी");
            const message = `जय शिवराय, खालील लिंक वरती क्लिक करून आपण ${reference.name} यांच्या ${reference.title} या पदाचे नियुक्तीपत्र डाउनलोड करू शकता. धन्यवाद .\n\n ${link}`;
            reference.exStatus = 1;
            this.sendToWhatsapp(reference.requestedBy, message);
        }
    }

    urlSafeBase64Encode(str: string) {
        const encodedString = btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        return encodedString;
    }
}
</script>
<style scoped>
.bg-invalid {
    background-color: lightsalmon;
}
</style>