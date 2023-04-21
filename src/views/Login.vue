<script lang="ts">
import router from '@/router';
import { Vue } from 'vue-class-component';

declare global {
    interface Window {
        otpless: any;
    }
}
export default class SabhasadList extends Vue {
    mounted(): void {
        const script = document.createElement('script')
        script.src = 'https://otpless.com/auth.js';
        document.body.appendChild(script);
        window.otpless = (otplessUser: any) => {
            console.log(otplessUser);
            // Retrieve the user's details after successful login
            const waName = otplessUser.waName;
            const waNumber = otplessUser.waNumber;
            alert(waName + ' ' + waNumber);
            // Handle the signup/signin process
            // ...
            if(waNumber == '9028744682')
            router.push({path:'/sabhasad-list'})
        }
    }
}
</script>