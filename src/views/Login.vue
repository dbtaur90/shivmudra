<template>
    <div class="custom-margin">
        <span>{{ token }}</span>
        <!-- <form id="formWrapper" class="form-wrapper" ref="basicForm6">
            <div class="form-group text-start focused mt-4">
                <label class="form-label" for="aadhar"> सभासद नंबर</label>
                <input required @change="checkValidataty($event.target)" type="tel" pattern='^\d{12}$' minlength="12"
                    maxlength="12" v-model="basicData.aadhar" class="form-input" id="aadhar" />
            </div>
            <div class="row mt-4">

                <div class="col pr-0">
                    <div class="form-group text-start focused">
                        <label class="form-label" for="firstName">नाव </label>
                        <input @change="checkValidataty($event.target)" required type="text" v-model="basicData.firstName"
                            class="form-input" id="firstName" />
                    </div>
                </div>
                <div class="col px-0">
                    <div class="form-group text-start focused">
                        <label class="form-label" for="middleName">वडीलांचे नाव </label>
                        <input required type="text" v-model="basicData.middleName" class="form-input" id="middleName" />
                    </div>
                </div>
                <div class="col pl-0">
                    <div class="form-group text-start focused">
                        <label class="form-label" for="lastName">आडनाव </label>
                        <input @change="checkValidataty($event.target)" required type="text" v-model="basicData.lastName"
                            class="form-input" id="lastName" />
                    </div>
                </div>
            </div>

            <div class="form-group text-start focused mt-4">
                <label class="form-label" for="dob">जन्म दिनांक </label>
                <input @change="checkValidataty($event.target)" :max="maxDate" required type="date" v-model="basicData.dob"
                    class="form-input" id="dob" />
            </div>

            <div v-if="isVerification" class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn blue-color"></div>
                    <button :disabled="buttonDisabled" @click="submitDocument(1)" class="login100-form-btn" type="button">
                        सत्यापित करा </button>
                </div>
                <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn red-color"></div>
                    <button :disabled="buttonDisabled" @click="submitDocument(0)" class="login100-form-btn" type="button">
                        नाकारा </button>
                </div>
            </div>
            <div v-else class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn blue-color"></div>
                    <button :disabled="buttonDisabled" @click="submitDocument(-1)" class="login100-form-btn" type="button">
                        Upload </button>
                </div>
            </div>
        </form> -->
    </div>
</template>
<script lang="ts">
import router from '@/router';
import { Vue } from 'vue-class-component';
import { SabhasadService } from '@/services/SabhasadService'
import { useAuthStore } from '@/stores/AuthStore';
declare global {
    interface Window {
        otpless: any;
    }
}
export default class SabhasadList extends Vue {
    private service!: SabhasadService;
    private verifyStore = useAuthStore();
    token = ''
    mounted(): void {
        this.service = new SabhasadService();
        const isLocalhost = window.location.host.includes('localhost') || window.location.host.includes('192.');
        if (isLocalhost) {
            this.service.login('b7b00eecd9134de4aeba4845d41c5cfd').then(data => {
                if (data && data.level && data.level > 0)
                    this.verifyStore.$state.authToken = 'b7b00eecd9134de4aeba4845d41c5cfd';
                this.verifyStore.$state.isSet = true;
                this.verifyStore.$state.loggedUser = data
                router.replace({ name: 'home' })
            }).catch((e) => {
                alert(e);
            })
        }
        else {
            const script = document.createElement('script')
            script.src = 'https://otpless.com/auth.js';
            document.body.appendChild(script);
            window.otpless = (otplessUser: any) => {
              //  this.verifyStore.$state.authToken =  otplessUser.token;
                this.service.login(otplessUser.token).then(data => {
                    if (data && data.level && data.level > 0)
                        this.verifyStore.$state.authToken = otplessUser.token;
                    this.verifyStore.$state.isSet = true;
                    this.verifyStore.$state.loggedUser = data
                    router.replace({ name: 'home' })
                }).catch((e) => {
                    alert(e);
                })
                // Retrieve the user's details after successful login
                const waName = otplessUser.waName;
                const waNumber = otplessUser.waNumber;
                this.token = otplessUser.token
                alert(waName + ' ' + waNumber);
                // Handle the signup/signin process
                // ...


            }
        }
    }
}
</script>

<style lang="css" scoped>
textarea {
    resize: none;
}

.loading {
    text-align: center;
    width: 100%;
    max-width: 500px;
    margin: 35px auto;
}

.form-wrapper {
    width: 100%;
    max-width: 500px;
    min-width: 300px;
    padding: 50px 30px 50px 30px;
    margin: 50px auto;
    background-color: #ffffff;
    border-radius: 5px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
}

.form-group {
    position: relative;
}

.form-group+.form-group {
    margin-top: 30px;
}

.form-label {
    position: absolute;
    left: 0;
    top: 10px;
    color: #999;
    background-color: #fff;
    z-index: 10;
    transition: transform 150ms ease-out, font-size 150ms ease-out;
}

.focused .form-label {
    transform: translateY(-125%);
    font-size: .75em;
}

.form-input {
    position: relative;
    padding: 12px 0px 5px 0;
    width: 100%;
    outline: 0;
    border: 0;
    box-shadow: 0 1px 0 0 #e5e5e5;
    transition: box-shadow 150ms ease-out;
}

.form-input:focus {
    box-shadow: 0 2px 0 0 blue;
}

.form-input.filled {
    box-shadow: 0 2px 0 0 lightgreen;
}


/* For Submit Button Only */
.container-login100-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 13px;
}

.wrap-login100-form-btn {
    width: 19vh;
    display: block;
    position: relative;
    z-index: 1;
    border-radius: 25px;
    overflow: hidden;
    margin: 0 auto;
}

.login100-form-bgbtn {
    position: absolute;
    z-index: -1;
    width: 300%;
    height: 100%;
    top: 0;
    left: -100%;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}

.red-color {
    background: #DC1C13;
    background: -webkit-linear-gradient(right, #DC1C13, #EA4C46, #F07470, #F1959B);
}

.blue-color {
    background: #a64bf4;
    background: -webkit-linear-gradient(right, #21d4fd, #b721ff, #21d4fd, #b721ff);
}

.login100-form-btn {
    font-family: Poppins-Medium;
    font-size: 15px;
    color: #fff;
    line-height: 1.2;
    text-transform: uppercase;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
}

.login100-form-btn:disabled {
    background-color: gray;
}

button {
    outline: none !important;
    border: none;
    background: transparent;
}

.invalid {
    border: 1px solid red !important;
}
.custom-margin{
    margin-top: 100px;
    margin-left: 50px;
}
</style>