<template>
    <div ref="formWrapper" id="formWrapper" class="form-wrapper">

        <form action="" class="form">
            <div class="form-group text-start">
                <label class="form-label" for="sabhasadNumber">सभासद क्रमांक</label>
                <input title="कृपया वैध सभासद क्रमांक टाका." v-model="sabhasadNumber" id="sabhasadNumber"
                    @keyup="fetchNameAddress()" @change="checkValidataty($event.target)" required
                    pattern="^MS01[0-9]{2}[A-Z]{3}[0-9]{4}$" class="form-input" type="text" />
                    <small v-if="invalidSN" class="text-danger">सभासद क्रमांक चुकीचा आहे किंवा सत्यापित झालेला नाहीय. कृपया पुन्हा प्रयत्न करा.</small>
            </div>
            <div class="form-group focused">
                <label class="form-label" for="nameText">संपूर्ण नाव</label>
                <input id="nameText" name="nameText" v-model="nameText" readonly class="form-input" type="text" />
            </div>
            <div class="form-group focused">
                <label class="form-label" for="addressText">संपूर्ण पत्ता</label>
                <textarea :rows="addressTextRows" v-model="addressText" name="addressText" readonly id="addressText" class="form-input"></textarea>
            </div>

            <div class="row mt-4">
                <div class="col">
                    <div class="form-group focused">
                        <label class="form-label" for="level">स्तर</label>
                        <select id="level" class="form-input text-center" name="level">
                            <option value="">निवडा</option>
                            <option value="1">राज्य</option>
                            <option value="2">विभागीय</option>
                            <option value="3">जिल्हा</option>
                            <option value="4">तालुका</option>
                            <option value="5">गण</option>
                            <option value="6 ">शाखा </option>
                        </select>
                    </div>
                </div>
                <div class="col">
                    <div class="form-group focused">
                        <label class="form-label" for="executive">कार्यकरणी</label>
                        <select id="executive" class="form-input text-center" name="executive">
                            <option value="">निवडा</option>
                            <option value="1">राज्य</option>
                            <option value="2">विभागीय</option>
                            <option value="3">जिल्हा</option>
                            <option value="4">तालुका</option>
                            <option value="5">गण</option>
                            <option value="6 ">शाखा </option>
                        </select>
                    </div>
                </div>
            </div>

            <div class="form-group focused mt-4">
                <label class="form-label" for="post">पद</label>
                <select id="post" class="form-input text-center" name="post">
                    <option value="">निवडा</option>
                    <option value="1">राज्य</option>
                    <option value="2">विभागीय</option>
                    <option value="3">जिल्हा</option>
                    <option value="4">तालुका</option>
                    <option value="5">गण</option>
                    <option value="6 ">शाखा </option>
                </select>
            </div>

            <div class="form-group">
                <label class="form-label" for="title">पूर्ण पद</label>
                <input readonly required name="title" id="title" class="form-input" type="text" />
            </div>
            <div class="row mt-4">
                <div class="col">
                    <div class="form-group">
                        <label class="form-label" for="date">नियुक्ती पत्रावरील दिनांक</label>
                        <input id="date" readonly class="form-input" type="date" />
                    </div>
                </div>
                <div class="col">
                    <div class="form-group">
                        <label class="form-label" for="place">नियुक्ती पत्रावरील ठिकाण</label>
                        <input id="place" name="place" readonly class="form-input" type="text" />
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>


<script lang="ts">
import { Ref } from "vue-property-decorator";
import { Vue } from 'vue-class-component';
import { SabhasadService } from "@/services/SabhasadService";


export default class PostingRequest extends Vue {
    parentElement!: HTMLElement;
    @Ref("formWrapper") readonly formWrapper!: HTMLElement | null;
    isSave = false;
    sabhasadNumber = '';
    nameText = '';
    addressText = '';
    addressTextRows = 3;
    private service!: SabhasadService;
    invalidSN = false;
    mounted(): void {
        this.initalizeForm();
        this.service = new SabhasadService();

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
            this.addressText = (sabhasadDetail[0].addressText as string).replaceAll('^','\n');
        }
        else {
            this.invalidSN = true;
            this.nameText = '';
            this.addressText = '';
        }

    }
}

</script>

<style lang="css" scoped>
textarea{
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
</style>
