<template>
    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Sabhasad Number</th>
                    <th scope="col">Name</th>
                    <th scope="col">Basic </th>
                    <th scope="col">Document</th>
                    <th scope="col">Photo</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(reference, index) in sabhasadList" :key="reference.sabhasadID">
                    <td scope="row">{{ index + 1 }}</td>
                    <td>{{ reference.verification?.sabhasadNumber }}</td>
                    <td>{{ reference.name }}</td>
                    <td>{{ reference.verification?.basicVerification }}</td>
                    <td>{{ reference.verification?.documentVerification }}</td>
                    <td>{{ reference.verification?.photoSignVerification }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script lang="ts">
import { Vue } from 'vue-class-component';
import { SabhasadService } from "@/services/SabhasadService";
import { ISabhasadList } from '@/interfaces/ISabhasadList';
declare global {
    interface Window {
        otpless: any;
    }
}

export default class SabhasadList extends Vue {

    sabhasadList: ISabhasadList[] = [];
    private service!: SabhasadService;
    async mounted(): Promise<void> {
        // Define the 'otpless' function
        this.service = new SabhasadService();
        document.title = "सभासद यादी| मराठा शिवमुद्रा प्रतिष्ठान"
        this.sabhasadList = await this.service.getSabhasadList();
    }
}
</script>
<style scoped></style>