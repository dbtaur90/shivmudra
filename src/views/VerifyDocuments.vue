<template>
    <div>
        <div v-if="isDocs && !isLoaded" class="loading">
            कागदपत्रे लोड होत आहेत. कृपया प्रतीक्षा करा.
            <div class="d-flex justify-content-center mt-5">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
        <form id="formWrapper" class="form-wrapper" :class="{ 'd-none': isDocs && !isLoaded }" ref="basicForm6">
            <div class="alert">{{ basicData.firstName }} {{ basicData.middleName }} {{ basicData.lastName }} </div>
            <div class="form-group text-start focused">
                <div v-if="documentFiles.aadharImage && documentFiles.aadharImageUrl">
                    <div v-if="isImage(documentFiles.aadharImage)">
                        <img style="max-width: 300px; max-height: 300px;" @load="isLoaded = true"
                            :src="documentFiles.aadharImageUrl" />
                    </div>
                    <div v-else-if="isPdf(documentFiles.aadharImage)">
                        <PDFViewer :source="documentFiles.aadharImageUrl"
                            style="height: 100vh; width: 50vw; max-width: 300px;" />
                    </div>
                </div>

                <label class="form-label" for="aadharImage">कृपया आपले आधार कार्ड अपलोड करा.</label>
                <input :disabled="isReadOnly" type="file" class="form-input" id="aadharImage" ref="aadharFileInput"
                    @change="onAadharFileSelected" accept="image/*, application/pdf" />
            </div>

            <div v-if="isVerification">
                <div class="form-group text-start focused mt-4">
                    <label class="form-label" for="aadhar"> आधार क्रमांक</label>
                    <input required @change="checkValidataty($event.target)" type="tel" pattern='^\d{12}$' minlength="12"
                        maxlength="12" v-model="basicData.aadhar" class="form-input" id="aadhar" />
                </div>
                <div class="row mt-4">

                    <div class="col pr-0">
                        <div class="form-group text-start focused">
                            <label class="form-label" for="firstName">नाव </label>
                            <input @change="checkValidataty($event.target)" required type="text"
                                v-model="basicData.firstName" class="form-input" id="firstName" />
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
                            <input @change="checkValidataty($event.target)" required type="text"
                                v-model="basicData.lastName" class="form-input" id="lastName" />
                        </div>
                    </div>
                </div>

                <div class="form-group text-start focused mt-4">
                    <label class="form-label" for="dob">जन्म दिनांक </label>
                    <input @change="checkValidataty($event.target)" :max="maxDate" required type="date"
                        v-model="basicData.dob" class="form-input" id="dob" />
                </div>
            </div>

            <div class="form-group text-start focused mt-4">
                <div v-if="documentFiles.tcImage && documentFiles.tcImageUrl">
                    <div v-if="isImage(documentFiles.tcImage)">
                        <img @load="isLoaded = true" style="max-width: 300px; max-height: 300px;"
                            :src="documentFiles.tcImageUrl" />
                    </div>
                    <div v-else-if="isPdf(documentFiles.tcImage)">
                        <PDFViewer :source="documentFiles.tcImageUrl"
                            style="height: 100vh; width: 50vw; max-width: 300px;" />
                    </div>
                </div>

                <label class="form-label" for="tcImage">कृपया शाळा सोडल्याचा दाखला अपलोड करा.</label>
                <input :disabled="isReadOnly" type="file" class="form-input" id="tcImage" placeholder="reference"
                    ref="tcFileInput" @change="onTcFileSelected" accept="image/*, application/pdf" />
                <small>आपण या ठिकाणी आपला किंवा परिवारातील इतर सदस्यांचा शाळा सोडल्याचा दाखला किंवा जात प्रमाणपत्र अपलोड
                    करू शकता.</small>
            </div>

            <div class="form-group text-start focused mt-4">
                <div v-if="documentFiles.photoImage && documentFiles.photoImageUrl">
                    <div v-if="isImage(documentFiles.photoImage)">
                        <img style="max-width: 300px; max-height: 300px;" :src="documentFiles.photoImageUrl" />
                    </div>
                </div>

                <label class="form-label" for="photoImage">कृपया फोटो अपलोड करा.</label>
                <input @load="isLoaded = true" :disabled="isReadOnly" type="file" class="form-input" id="photoImage"
                    placeholder="reference" ref="photoFileInput" @change="onPhotoFileSelected" accept="image/*" />
                <small>हा फोटो आपल्या आयडी कार्डवर तसेच आपल्या जन्मदिवसाच्या शुभेच्छा बॅनर साठी वापरला जाणार
                    आहे.</small>
            </div>

            <div class="form-group text-start focused mt-4">
                <div v-if="documentFiles.signImage && documentFiles.signImageUrl">
                    <div v-if="isImage(documentFiles.signImage)">
                        <img style="max-width: 300px; max-height: 300px;" :src="documentFiles.signImageUrl" />
                    </div>
                </div>
                <label class="form-label" for="politcalPartyName">कृपया स्वाक्षरी अपलोड करा.</label>
                <input :disabled="isReadOnly" type="file" class="form-input" id="signImage" placeholder="reference"
                    ref="signFileInput" @change="onSignFileSelected" accept="image/*" />
            </div>
            <div v-if="isVerification">
                <div class="form-group text-start focused mt-4">
                    <label class="form-label" for="aadhar"> टिपणी</label>
                    <textarea minlength="5" maxlength="255" required @change="checkValidataty($event.target)"
                        v-model="verificationRemark" class="form-input" id="verificationRemark"> </textarea>
                </div>
            </div>
            <progress v-if="formDataObject.uploadProgress" max="100" :value="formDataObject.uploadProgress">
            </progress>
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
        </form>
    </div>
</template>


<script lang="ts">
import { Ref } from "vue-property-decorator";
import { Options, Vue } from 'vue-class-component';
import { FileService } from "@/services/FileService";
import { DocumentFiles } from "@/interfaces/DocumentFiles";
import { DocumentData } from "@/interfaces/DocumentData";
import PDFViewer from 'pdf-viewer-vue'
import { SabhasadService } from "@/services/SabhasadService";
import { Verification } from "@/interfaces/Verification";
import router from "@/router";
import { useRoute } from "vue-router";
import { useVerifyDocumentStore } from "@/stores/VerifyDocumentStore";

interface BasicData {
    aadhar?: number | null;
    firstName?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    dob?: Date | null;
    [key: string]: unknown;

}

@Options({
    components: {
        PDFViewer,
    },
})
export default class VerifyDocuments extends Vue {
    @Ref("formWrapper") readonly formWrapper!: HTMLElement | null;
    private verifyStore = useVerifyDocumentStore()
    sabhasadID = -1;
    verificationId = 0;
    isVerification = false;
    isSave = false;
    private service!: FileService;
    private sabhasadSerive!: SabhasadService;
    invalidSN = false;
    documentFiles: DocumentFiles = {}
    documentData: DocumentData | null = null
    isReadOnly = false;
    isRequired = true;
    maxDate = '2010-12-12'
    verificationRemark = ''
    buttonDisabled = false;
    basicData: BasicData = {}
    isLoaded = false
    isDocs = false
    formDataObject = {
        formdata: new FormData,
        uploadProgress: 0
    };
    mounted(): void {
        const route = useRoute()
        console.log(route.query)
        if (route.query && route.query.sid) {
            this.sabhasadID = Number(this.urlSafeBase64Decode(route.query.sid.toString()));
        }
        if (this.verifyStore.isSet) {
            this.sabhasadID = this.verifyStore.sabhasadID
            this.verificationId = this.verifyStore.verificationID
            this.isDocs = this.verifyStore.isDocumentsUploaded
            this.isVerification = this.verifyStore.isVerification
            this.verifyStore.clearValues();
        }
        if (!this.sabhasadID || this.sabhasadID <= 0)
            router.replace({ path: '/sabhasad-list' })
        this.maxDate = this.getMaxDate();
        this.sabhasadSerive = new SabhasadService();
        this.service = new FileService();
        this.loadSabhasadDetails();
        // Select all input elements and attach a 'focus' event listener to them
    }


    async loadSabhasadDetails() {
        const data = await this.sabhasadSerive.getUsers(this.sabhasadID);
        this.basicData = {
            aadhar: data.aadhar,
            dob: data.dob,
            firstName: data.firstName,
            lastName: data.lastName,
            middleName: data.middleName,
        }
        this.documentData = data.document_data;
        this.isDocs = !!this.documentData;
        if (this.documentData) {
            if (this.documentData.aadharImage) {
                this.documentFiles.aadharImageUrl = this.documentData.aadharImage;
                this.documentFiles.aadharImage = await this.service.getFile(this.documentFiles.aadharImageUrl);
            }
            if (this.documentData.tcImage) {
                this.documentFiles.tcImageUrl = this.documentData.tcImage;
                this.documentFiles.tcImage = await this.service.getFile(this.documentFiles.tcImageUrl);
            }
            if (this.documentData.photoImage) {
                this.documentFiles.photoImageUrl = this.documentData.photoImage;
                this.documentFiles.photoImage = await this.service.getFile(this.documentFiles.photoImageUrl);
            }
            if (this.documentData.signImage) {
                this.documentFiles.signImageUrl = this.documentData.signImage;
                this.documentFiles.signImage = await this.service.getFile(this.documentFiles.signImageUrl);
            }
        }
    }

    onAadharFileSelected(): void {
        const aadharFileInput = this.$refs.aadharFileInput as HTMLInputElement;
        if (aadharFileInput.files && aadharFileInput.files[0]) {
            this.documentFiles.aadharImage = aadharFileInput.files[0];
            this.documentFiles.aadharImageUrl = URL.createObjectURL(this.documentFiles.aadharImage);
        }
    }

    onTcFileSelected(): void {
        const tcFileInput = this.$refs.tcFileInput as HTMLInputElement;
        if (tcFileInput.files && tcFileInput.files[0]) {
            this.documentFiles.tcImage = tcFileInput.files[0];
            this.documentFiles.tcImageUrl = URL.createObjectURL(this.documentFiles.tcImage);
        }
    }

    onPhotoFileSelected(): void {
        const photoFileInput = this.$refs.photoFileInput as HTMLInputElement;
        if (photoFileInput.files && photoFileInput.files[0]) {
            this.documentFiles.photoImage = photoFileInput.files[0];
            this.documentFiles.photoImageUrl = URL.createObjectURL(this.documentFiles.photoImage);
        }
    }

    onSignFileSelected(): void {
        const signFileInput = this.$refs.signFileInput as HTMLInputElement;
        if (signFileInput.files && signFileInput.files[0]) {
            this.documentFiles.signImage = signFileInput.files[0];
            this.documentFiles.signImageUrl = URL.createObjectURL(this.documentFiles.signImage);
        }
    }

    isImage(file: File): boolean {
        if (file.type) {
            return file.type.startsWith('image/');
        }
        else {
            return false;
        }
    }

    isPdf(file: File): boolean {
        if (file.type)
            return file.type === 'application/pdf';
        else {
            return false;
        }
    }

    async submitDocument(verified: number) {
        let form = this.$refs["basicForm6"] as HTMLFormElement;
        const invalidControls = Array.from(form.elements).filter((control) => {
            let newControl: HTMLFormElement = control as HTMLFormElement;
            !newControl.checkValidity();
        });
        invalidControls.forEach((element) => this.checkValidataty(element));
        if (!form.reportValidity()) return;
        this.buttonDisabled = true
        if (this.sabhasadID && this.documentFiles.aadharImage && this.documentFiles.photoImage && this.documentFiles.signImage) {
            if (this.isVerification) {
                for (let key in this.basicData) {
                    this.formDataObject.formdata.append(key, (this.basicData[key] as string));
                }
            }
            if (this.documentData?.id && this.documentData.id.toString().trim() != '' && this.documentData.id > 0)
                this.formDataObject.formdata.append("id", this.documentData.id.toString());
            this.formDataObject.formdata.append("sabhasadID", this.sabhasadID.toString());
            this.formDataObject.formdata.append("aadharImage", this.documentFiles.aadharImage);
            this.formDataObject.formdata.append("photoImage", this.documentFiles.photoImage);
            this.formDataObject.formdata.append("signImage", this.documentFiles.signImage);
            if (this.documentFiles.tcImage)
                this.formDataObject.formdata.append("tcImage", this.documentFiles.tcImage);
            await this.service.uploadDocuments(this.formDataObject);
            localStorage.removeItem("sabhasadDetails");
            localStorage.removeItem("currentTab");
            if (this.isVerification) {
                const payload: Verification = {
                    id: this.verificationId,
                    sabhasadID: this.sabhasadID,
                    documentVerification: verified == 1,
                    documentVerificationRemark: this.verificationRemark
                }

                await this.sabhasadSerive.updateSabhasadVerificationStatus(payload);
                router.replace({ path: '/sabhasad-list' })

            }
            else
                router.replace({ path: '/thanks' });
        }
        else {
            alert('कृपया सर्व कागदपत्रे अपलोड करा.')
            this.buttonDisabled = false
        }

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

    getMaxDate() {
        const date = new Date();
        let year = date.getFullYear() - 18;
        let day = date.getDate();
        let month = date.getMonth() + 1;
        return `${year}-${month < 10 ? '0' : ''}${month}-${day}`;
    }

    urlSafeBase64Encode(str: string) {
        const encodedString = btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
        return encodedString;
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
</style>
