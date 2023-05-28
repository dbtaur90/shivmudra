<template>
    <div ref="formWrapper" id="formWrapper" class="form-wrapper">

        <form action="" class="form" ref="basicForm">
            <div class="form-group focused">
                <label class="form-label" for="sabhasadNumber">सभासद क्रमांक</label>
                <input title="कृपया वैध सभासद क्रमांक टाका." v-model="sabhasadNumber" id="sabhasadNumber"
                    @keyup="fetchNameAddress()" @change="checkValidataty($event.target)" required
                    pattern="^MS01[0-9]{2}[A-Z]{3}[0-9]{4}$" class="form-input" type="text" />
                <small v-if="invalidSN" class="text-danger">सभासद क्रमांक चुकीचा आहे किंवा सत्यापित झालेला नाहीय. कृपया
                    पुन्हा प्रयत्न करा.</small>
            </div>
            <div class="form-group focused">
                <label class="form-label" for="nameText">संपूर्ण नाव</label>
                <input required id="nameText" name="nameText" v-model="nameText" readonly class="form-input" type="text" />
            </div>
            <div class="form-group focused">
                <label class="form-label" for="addressText">संपूर्ण पत्ता</label>
                <textarea required :rows="addressTextRows" v-model="addressText" name="addressText" id="addressText"
                    class="form-input"></textarea>
            </div>

            <div class="row mt-4">
                <div class="col">
                    <div class="form-group focused">
                        <label class="form-label" for="level">स्तर</label>
                        <select required id="level" v-model="level" class="form-input text-center" name="level"
                            @change="fetchOpArea($event.target)">
                            <option value="">निवडा</option>
                            <option v-for="level in levelList" :value="level.value" :key="level.value">{{ level.label }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group focused">
                        <label class="form-label" for="executive">कार्यकरणी</label>
                        <select required v-model="executive" id="executive" class="form-input text-center" name="executive">
                            <option value="">निवडा</option>
                            <option v-for="level in opAreaList" :value="level.opArea" :key="level.opArea">{{ level.opName }}
                            </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-group focused mt-4">
                <label class="form-label" for="post">पद</label>
                <select required v-model="post" @change="fullPost()" id="post" class="form-input text-center" name="post">
                    <option value="">निवडा</option>
                    <option v-for="level in postList" :value="level" :key="level">{{ level }}
                    </option>
                </select>
            </div>

            <div style="height: 50px; width: 100%;" class="d-flex justify-content-center align-items-center mt-3 mb-2 border border-dark bg-light" >
                <span> {{ title }} </span>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <div class="form-group">
                        <label class="form-label" for="date">नियुक्ती पत्रावरील दिनांक</label>
                        <input required id="date" v-model="date" class="form-input" type="date" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label class="form-label" for="place">नियुक्ती पत्रावरील ठिकाण</label>
                        <input required id="place" v-model="place" name="place" class="form-input" type="text" />
                    </div>
                </div>
            </div>
            <div class="wrap-login100-form-btn mt-4">
                    <div class="login100-form-bgbtn blue-color"></div>
                    <button @click="submitRequest()" class="login100-form-btn" type="button">
                        Submit </button>
                </div>
        </form>
    </div>
</template>


<script lang="ts">
import { Ref } from "vue-property-decorator";
import { Vue } from 'vue-class-component';
import { SabhasadService } from "@/services/SabhasadService";
import { useAuthStore } from "@/stores/AuthStore";
import { useGlobalStore } from "@/stores/GlobalStore"
import { ExecutiveService } from "@/services/ExecutiveService";
import { useRoute } from "vue-router";
import router from "@/router";


export default class PostingRequest extends Vue {
    parentElement!: HTMLElement;
    @Ref("formWrapper") readonly formWrapper!: HTMLElement | null;
    isSave = false;
    sabhasadNumber = '';
    nameText = '';
    addressText = '';
    addressTextRows = 3;
    private service!: SabhasadService;
    private executiveService!: ExecutiveService;
    invalidSN = false;
    postList: string[] = [];
    title = '';
    level = Number();
    post = '';
    date =new Date().toLocaleDateString();
    place = '';
    executive = Number();
    sabhasadID = Number();
    levelList = [
        { value: 1, label: 'राज्य' },
        { value: 2, label: 'विभागीय' },
        { value: 3, label: 'जिल्हा' },
        { value: 4, label: 'तालुका' },
        { value: 6, label: "शाखा" }
    ];
    opAreaList: { opArea: number, opName: string }[] = [];
    verifyStore = useAuthStore();
    globalStore = useGlobalStore();
    mounted(): void {
        const route = useRoute()
        const addValue = Number(this.verifyStore.$state.loggedUser.level) == 3 ? 3 : 2;
        this.levelList = this.levelList.filter(level =>
            this.verifyStore.$state.loggedUser.level && level.value >= Number(this.verifyStore.$state.loggedUser.level) &&
            level.value <= Number(this.verifyStore.$state.loggedUser.level) + addValue
        );
        this.initalizeForm();
        this.service = new SabhasadService();
        this.executiveService = new ExecutiveService();
        if (route.query && route.query.sn) {
            this.sabhasadNumber = this.urlSafeBase64Decode(route.query.sn.toString());
            this.fetchNameAddress();
        }
        // Select all input elements and attach a 'focus' event listener to them
    }

    initalizeForm() {
        this.formWrapper?.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('focus', (event) => {
                const target = event.target as HTMLInputElement | HTMLTextAreaElement;
                // Add 'focused' class to the parent element with class 'form-group'
                target.parentElement?.classList.add('focused');
            });

            input.addEventListener('blur', (event) => {
                const target = event.target as HTMLInputElement | HTMLTextAreaElement;
                var inputValue = target.value;
                if (inputValue == '') {
                    // Remove 'filled' class from the input element and 'focused' class from its parent element
                    target.classList.remove('filled');
                    target.parentElement?.classList.remove('focused');
                } else {
                    // Add 'filled' class to the input element
                    target.classList.add('filled');
                }
            });
        });
    }

    checkValidataty(targetTemp: HTMLInputElement | null | EventTarget) {
        if (targetTemp) {
            this.isSave = false;
            let target = targetTemp as HTMLInputElement;
            if (target.reportValidity()) target.classList.remove("invalid");
            else {
                target.classList.add("invalid");
                this.isSave = true;
            }
        }
    }

    async fetchNameAddress() {
        this.invalidSN = false;
        if (!/^MS01[0-9]{2}[A-Z]{3}[0-9]{4}$/.test(this.sabhasadNumber)) {
            this.nameText = '';
            this.addressText = '';
            return
        }
        const sabhasadDetail = await this.service.getSabhasadNameAddress(this.sabhasadNumber);
        if (sabhasadDetail[0].addressText) {
            this.nameText = sabhasadDetail[0].nameText;
            this.addressText = (sabhasadDetail[0].addressText as string).replaceAll('^', '\n');
            this.sabhasadID = sabhasadDetail[0].sid;
        }
        else {
            this.invalidSN = true;
            this.nameText = '';
            this.addressText = '';
        }

    }

    async fetchOpArea(level: any) {
        this.postList = Array.from(level.value == 1 ? this.globalStore.$state.STATE_POSTS : this.globalStore.$state.POSTS);
        const payload = {
            level: level.value,
            ftrLevel: this.verifyStore.$state.loggedUser.level,
            ftrValue: this.verifyStore.$state.loggedUser.operationalArea
        }
        if (payload.ftrLevel == level.value) {
            this.postList.splice(0, 3);
        }
        this.opAreaList = await this.executiveService.getOpArea(payload);
    }
    fullPost() {
        this.title = `${this.opAreaList.filter(op => op.opArea == this.executive)[0].opName}
        ${this.levelList.filter(lev => lev.value == this.level)[0].label} ${this.post}`
    }

    async submitRequest(){
        let form = this.$refs["basicForm"] as HTMLFormElement;
        const invalidControls = Array.from(form.elements).filter((control) => {
            let newControl: HTMLFormElement = control as HTMLFormElement;
            !newControl.checkValidity();
        });
        invalidControls.forEach((element) => this.checkValidataty(element));
        if (!form.reportValidity()) return;
        let payload: any = {
            executiveData: {
                sabhasadID: this.sabhasadID,
                post: this.post,
                level: this.level,
                operationalArea: this.executive,
                status: 2,
                joiningDate: this.date,
                place: this.place
            },
            addressText: this.addressText
        };
        await this.executiveService.submitPostingRequest(payload);
        router.replace({ path: '/sabhasad-list' })
    }

    urlSafeBase64Decode(str: string) {
        const padding = '='.repeat((4 - str.length % 4) % 4);
        const encodedString = str.replace(/-/g, '+').replace(/_/g, '/') + padding;
        const decodedString = atob(encodedString);
        return decodedString;
    }


}

</script>

<style lang="css" scoped>
textarea {
    resize: none;
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

/* Submit Button */

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
