<template>
    <div class="table-responsive" style="max-width: 600px;">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sabhasad Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Document</th>
                    <th scope="col">Basic </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(reference, index) in sabhasadList" :key="reference.sabhasadID"
                    :class="{ 'text-danger': !reference.isDocumentUploaded }">
                    <td scope="row">{{ index + 1 }}</td>

                    <td>
                        <div v-if="reference.verification && (reference.verification.status == 1 || reference.verification.status == 2)">
                            <button v-if="!!!reference.verification.sabhasadNumber" type="button" class="btn btn-link"
                                @click="generateSabhasadNumber(reference.verification.id)">
                                सभासद क्रमांक अपडेट करा </button>
                            <span v-else>
                                {{ reference.verification?.sabhasadNumber }}
                            </span>
                        </div>

                    </td>
                    <td>{{ reference.name }}</td>
                    <td colspan="2" v-if="!reference.isDocumentUploaded">
                        <button type="button" class="btn btn-link"
                            @click="sendToWhatsapp(reference.sabhasadID, reference.whatsappNumber)">
                            कागदपत्रे मागवा </button>
                    </td>
                    <td v-if="reference.isDocumentUploaded">
                        <span class="bg-success text-white"
                            v-if="reference.verification && reference.verification.documentVerification">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-check" viewBox="0 0 16 16">
                                <path
                                    d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                            </svg>
                        </span>
                        <button v-else @click="navigateRoute(reference, 'verifyDocuments')" class="btn btn-link"
                            type="button">पडताळा</button>

                    </td>
                    <td v-if="reference.isDocumentUploaded">
                        <div v-if="reference.verification">
                            <span class="bg-success text-white" v-if="reference.verification.basicVerification">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-check" viewBox="0 0 16 16">
                                    <path
                                        d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
                                </svg>
                            </span>
                            <button v-else-if="reference.verification.documentVerification"
                                @click="navigateRoute(reference, 'registration')" class="btn btn-link"
                                type="button">पडताळा</button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import { SabhasadService } from "@/services/SabhasadService";
import { ISabhasadList } from '@/interfaces/ISabhasadList';
import { useVerifyDocumentStore } from '@/stores/VerifyDocumentStore';
import router from '@/router';
declare global {
    interface Window {
        otpless: any;
    }
}

export default class SabhasadList extends Vue {

    sabhasadList: ISabhasadList[] = [];
    private verifyStore = useVerifyDocumentStore();
    private service!: SabhasadService;
    async mounted(): Promise<void> {
        // Define the 'otpless' function
        this.service = new SabhasadService();
        document.title = "सभासद यादी| मराठा शिवमुद्रा प्रतिष्ठान"
        this.sabhasadList = await this.service.getSabhasadList();
    }

    navigateRoute(reference: ISabhasadList, nextRoute: string) {
        if (reference.sabhasadID)
            this.verifyStore.setValues(reference.sabhasadID, reference.verification?.id, true, reference.isDocumentUploaded);
        router.push({ name: nextRoute });
    }

    sendToWhatsapp(sabhasadID?: number, phoneNumber?: string) {
        let sid = `${sabhasadID}`;
        const link = `https://marathashivmudra.co.in/verify-documents?sid=${this.urlSafeBase64Encode(sid)}`;
        const message = `जय शिवराय, आपण मराठा शिवमुद्रा प्रतिष्ठान चा सभासद अर्ज भरलेला आहे . मात्र आपले कागदपत्रे आपण अपलोड केलेली नाहीत. कृपया आपले कागदपत्र खालील लिंक वर जाऊन अपलोड करा. काही अडचण येत असल्यास मला मेसेज किंवा कॉल करा.\n\n ${link}`;
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `whatsapp://send?phone=91${phoneNumber}&text=${encodedMessage}`;
        location.href = whatsappLink;
    }

    async generateSabhasadNumber(verificationID?: number) {
        if (verificationID){
            const result = await this.service.generateSabhasadNumber(verificationID);
            if(result.mailSent){
                alert(`${result.name} यांचा सभासद क्रमांक ${result.sabhasadNumber} यशस्वीरित्या तयार झाला आहे. `);
            }
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