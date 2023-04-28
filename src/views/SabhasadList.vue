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
                <tr v-for="(reference, index) in sabhasadList" :key="reference.sabhasadID"  :class="{'text-danger': !reference.isDocumentUploaded}">
                    <td scope="row">{{ index + 1 }}</td>
                    <td>{{ reference.verification?.sabhasadNumber }}</td>
                    <td>{{ reference.name }}</td>
                    <td>
                        <span v-if="reference.verification && reference.verification.documentVerification">
                            {{ reference.verification.documentVerification }}
                        </span>
                        <button v-else @click="navigateRoute(reference, 'verifyDocuments')" class="btn btn-link"
                            type="button">पडताळा</button>

                    </td>
                    <td>{{ reference.verification?.basicVerification }}</td>
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
}
</script>
<style scoped>
.bg-invalid{
    background-color: lightsalmon;
}
</style>