<template>
  <section class="registration">
    <div class="container">
      <datalist id="BusinessEducation">
        <option value="PHD"></option>
        <option value="Post Graduate">पदव्युत्तर</option>
        <option value="Graduate">पदवीधर</option>
        <option value="Diploma">पदविका</option>
        <option value="ITI"></option>
        <option value="higher secondary">उच्च माध्यमीक(11वी/12वी)</option>
        <option value="Secondary">माध्यमीक(8वी ते 10वी)</option>
        <option value="Lower Secondary">पुर्व माध्यमीक(5वी ते 7वी)</option>
        <option value="Primary">प्राथमिक(1ली ते 4थी)</option>
        <option value="Lower Primary">पुर्व प्राथमिक</option>
      </datalist>
      <datalist id="businessList">
        <option value="वैद्यकीय"></option>
        <option value="अभियांत्रिकी"></option>
        <option value="व्यवस्थापन"></option>
        <option value="शैक्षणिक क्षेत्र"></option>
        <option value="कायदेविषयक"></option>
        <option value="चित्रपट"></option>
        <option value="संगणकीय सेवा"></option>
        <option value="ग्राफिक्स डिझाईन">फोटोशूट</option>
        <option value="प्रवासी वाहतुक क्षेत्र"></option>
        <option value="मालवाहतूक"></option>
        <option value="कुरियर"></option>
        <option value="किराणा"></option>
        <option value="हॉटेल"></option>
        <option value="मांसविक्री"></option>
        <option value="वितरण">Distributorship</option>
        <option value="इतर शॉप">कपडा/मोबाईल इत्यादी</option>
        <option value="इतर व्यवसाय">उदा. फळ विक्री</option>
        <option value="इतर सेवा">वेल्डिंग/ पंचर दुरुस्ती इत्यादी</option>
      </datalist>
      <datalist id="education">
        <option value="PHD"></option>
        <option value="Post Graduate">पदव्युत्तर</option>
        <option value="Graduate">पदवीधर</option>
        <option value="Diploma">पदविका</option>
        <option value="ITI"></option>
        <option value="higher secondary">उच्च माध्यमीक(11वी/12वी)</option>
        <option value="Secondary">माध्यमीक(8वी ते 10वी)</option>
        <option value="Lower Secondary">पुर्व माध्यमीक(5वी ते 7वी)</option>
        <option value="Primary">प्राथमिक(1ली ते 4थी)</option>
        <option value="Lower Primary">पुर्व प्राथमिक</option>
      </datalist>

      <datalist id="employementList">
        <option value="वैद्यकीय"></option>
        <option value="अभियांत्रिकी"></option>
        <option value="व्यवस्थापन"></option>
        <option value="शैक्षणिक क्षेत्र"></option>
        <option value="कायदेविषयक"></option>
        <option value="प्रशासकीय अधिकारी"></option>
        <option value="लोकप्रतिनिधी"></option>
        <option value="बँक"></option>
        <option value="चित्रपट"></option>
        <option value="संगणकीय सेवा"></option>
        <option value="ग्राफिक्स डिझाईन"></option>
        <option value="मालवाहतूक"></option>
        <option value="वाहतुक क्षेत्र"></option>
        <option value="कुरियर"></option>
        <option value="किराणा"></option>
        <option value="कृषी"></option>
        <option value="पोलीस"></option>
        <option value="हॉटेल"></option>
        <option value="मांस"></option>
        <option value="वितरण">Distributorship</option>
        <option value="इतर"></option>
      </datalist>
      <div ref="tabParent" class="row g-1">
        <div ref="allSteps" class="all-steps" id="all-steps">
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
          <span class="step"></span>
        </div>
        <div class="tab info-tag">
          <p style="text-align: center">जय शिवराय</p>
          <p style="text-align: center">
            मराठा शिवमुद्रा प्रतिष्ठान मध्ये आपले स्वागत आहे.
          </p>
          <ul>
            <li>
              सभासद नोंदनी साठी तुम्हाला काही प्रश्न विचारले जातील. कृपया त्याची
              योग्य उत्तरे मराठी भा़षेत द्या.
            </li>
            <li>
              नोंदणी सुरू करण्यापुर्वी तुम्हाला पुढील कागदपत्रे जवळ ठेवणे किंवा
              त्यांचे फोटो काढून ठेवणे गरजेचे आहे.
              <ul>
                <li>आधार कार्ड</li>
                <li>
                  आपला किंवा परिवारातील सदस्यांचा शाळा सोडल्याचा दाखला किंवा जात
                  प्रमाणपत्र
                </li>
                <li>तुमचा फोटो</li>
                <li>कोऱ्या कागदावर सही.</li>
              </ul>
            </li>
            <li>
              नोंदणी सुरू करण्यापुर्वी तुम्हाला प्रतिष्ठान ची ध्येय व उद्दिष्टे
              माहिती असणे आवश्यक आहे.
            </li>
            <li>
              नोंदणी सुरू करण्यापुर्वी तुम्हाला प्रतिष्ठान च्या माहिती विषयक
              <a href="https://merchant.razorpay.com/policy/KiPTgIiGcc17KN/privacy" target="_blank">
                गोपनीयता आणि धोरण
              </a>
              तसेच
              <a href="https://merchant.razorpay.com/policy/KiPTgIiGcc17KN/terms" target="_blank">
                अटी आणि शर्ती
              </a>
              मान्य असने आवश्यक आहे.
            </li>
          </ul>
        </div>
        <div class="tab">
          <form ref="basicForm1">
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.reference" class="form-control" id="reference" placeholder="reference" />
                <label for="reference">आपल्याला शिवमुद्रा मध्ये कोणी जोडले?</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <label class="form-label" style="text-align: left">आपले संपूर्ण नाव:
              </label>
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.firstName" class="form-control" id="firstName" placeholder="Password" />
                <label for="firstName">तुमचे नाव</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.middleName" class="form-control" id="middleName" placeholder="Password" />
                <label for="middleName">वडिलांचे/पतीचे नाव</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.lastName" class="form-control" id="lastName" placeholder="Password" />
                <label for="lastName">आडनाव</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select :disabled="isReadOnly" required class="form-select" v-model="sabhasadDetail.bloodGroup"
                  @change="checkValidataty($event.target)" id="bloodGroup" aria-label="Floating label select example">
                  <option value="">select</option>
                  <option value="A+">A +</option>
                  <option value="A-">A -</option>
                  <option value="B+">B +</option>
                  <option value="B-">B -</option>
                  <option value="AB+">AB +</option>
                  <option value="AB-">AB -</option>
                  <option value="O+">O +</option>
                  <option value="O-">O -</option>
                </select>
                <label for="bloodGroup">रक्त गट</label>
              </div>
            </div>
            <div class="row g-1 mb-3 border-gray">
              <div class="col-4">
                <label>लिंग:</label>
              </div>
              <div class="col-8">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.gender" type="radio"
                    name="gender"
                    @change="
                      maleFemaleLabel = 'शकतो';
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    id="inlineCheckboxgender1" value="male" required />
                  <label class="form-check-label" for="inlineCheckboxgender1">पुरुष</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.gender" name="gender"
                    type="radio"
                    @change="
                      maleFemaleLabel = 'शकते';
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    id="inlineCheckboxgender2" value="female" required />
                  <label class="form-check-label" for="inlineCheckboxgender2">महिला</label>
                </div>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="date" @change="checkValidataty($event.target)"
                  max="2005-01-01" v-model="sabhasadDetail.dob" class="form-control" id="dob" />
                <label for="dob">जन्म तारीख</label>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div class="col-4">
                <label>वैवाहिक स्थिती</label>
              </div>
              <div class="col-8">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input" v-model="sabhasadDetail.married"
                    type="radio" @change="checkValidataty($event.target)" name="married" id="inlineCheckbox1"
                    v-bind:value="true" />
                  <label class="form-check-label" for="inlineCheckbox1">विवाहित</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.married" type="radio"
                    @change="checkValidataty($event.target)" name="married" id="inlineCheckbox2" v-bind:value="false" />
                  <label class="form-check-label" for="inlineCheckbox2">अविवाहित</label>
                </div>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="tel" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.whatsappNumber" class="form-control" id="wnumber" pattern="(6|7|8|9)\d{9}"
                  placeholder="Password" />
                <label for="wnumber">व्हाट्सअँप नंबर</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" type="tel" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.mobileNumber" class="form-control" id="inputPassword4" pattern="(6|7|8|9)\d{9}"
                  placeholder="Password" />
                <label for="inputPassword4" class="form-label">Alternative Mobile Number(असल्यास)</label>
              </div>
            </div>

            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="email" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.email" class="form-control" id="email" placeholder="email" />
                <label for="email">ई-मेल</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="tel" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.aadhar" class="form-control" id="aadhar" pattern="\d{12}"
                  placeholder="Password" />
                <label for="aadhar" class="form-label">आधार नंबर</label>
              </div>
            </div>
          </form>
        </div>

        <div class="tab">
          <form ref="basicForm2">
            <div class="permenant-address-area">
              <div class="row g-1 mb-3">
                <div class="form-floating">
                  <textarea :readonly="isReadOnly" :value="
                    sabhasadDetail.permanentSubAddress
                      ? sabhasadDetail.permanentSubAddress
                      : ''
                  " @change="
  onInput($event, true);
checkValidataty($event.target);
                                                                                      " class="form-control"
                    id="permanentAddress" style="height: 60px"></textarea>
                  <label for="permanentAddress">कायमचा पत्ता</label>
                </div>
              </div>
              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <select :disabled="isReadOnly" required class="form-select"
                    v-model="sabhasadDetail.permanent_address.District"
                    @change="
                      loadTalukas(true, $event.target);
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    id="pdistrict" aria-label="Floating label select example">
                    <option value="">select</option>
                    <option v-for="district in districts" :key="district.District" :value="district.District">
                      {{ district.DistrictMr }}
                    </option>
                  </select>
                  <label for="pdistrict">जिल्हा</label>
                </div>
              </div>
              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <select :disabled="isReadOnly" required class="form-select"
                    v-model="sabhasadDetail.permanent_address.SubDistrict"
                    @change="
                      loadVillages(true, $event.target);
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    id="psubDistrict" aria-label="Floating label select example">
                    <option value="">select</option>
                    <option v-for="taluka in permanentTalukasList" :key="taluka.SubDistrict" :value="taluka.SubDistrict">
                      {{ taluka.SubDistrictMr }}
                    </option>
                  </select>
                  <label for="psubDistrict">तालुका</label>
                </div>
              </div>
              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <select :disabled="isReadOnly" required class="form-select" v-model="sabhasadDetail.permanentVillage"
                    @change="checkValidataty($event.target)" id="pvillage" aria-label="Floating label select example">
                    <option value="">select</option>
                    <option v-for="village in permentVillageList" :key="village.AddressDirectoryID"
                      :value="village.AddressDirectoryID">
                      {{ village.VillageMr }}
                    </option>
                  </select>
                  <label for="pvillage">गाव</label>
                </div>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <label class="form-check-label"> सध्याचा पत्ता </label>

              <div class="form-check form-check-inline col">
                <input :disabled="isReadOnly" required class="form-check-input" type="radio" name="isSameAddress"
                  v-model="sabhasadDetail.isSameAddress"
                  @change="
                    currentAddressAvailablity();
                  checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                  id="isAddressSame1" v-bind:value="true" />
                <label class="form-check-label" for="isAddressSame1">
                  वरील प्रमाणे
                </label>
              </div>
              <div class="form-check form-check-inline col">
                <input :disabled="isReadOnly" required class="form-check-input" type="radio"
                  v-model="sabhasadDetail.isSameAddress"
                  @change="
                    currentAddressAvailablity();
                  checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
                  name="isSameAddress" id="isAddressSame2" v-bind:value="false" />
                <label class="form-check-label" for="isAddressSame2">
                  वेगळा
                </label>
              </div>
            </div>

            <div v-if="sabhasadDetail.current_address">
              <div class="row g-1 mb-3">
                <div class="form-floating">
                  <textarea :readonly="isReadOnly" :value="
                    sabhasadDetail.currentSubAddress
                      ? sabhasadDetail.currentSubAddress
                      : ''
                  " @change="
  onInput($event, false);
checkValidataty($event.target);
                                                                                      " class="form-control"
                    placeholder="सध्याचा पत्ता" id="currentAddress" style="height: 60px"></textarea>
                  <label for="currentAddress">सध्याचा पत्ता</label>
                </div>
              </div>
              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <select :disabled="isReadOnly" required class="form-select"
                    v-model="sabhasadDetail.current_address.District"
                    @change="
                      loadTalukas(false, $event.target);
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    id="cdistrict" aria-label="Floating label select example">
                    <option value="">select</option>
                    <option v-for="district in districts" :key="district.District" :value="district.District">
                      {{ district.DistrictMr }}
                    </option>
                  </select>
                  <label for="cdistrict">जिल्हा</label>
                </div>
              </div>
              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <select :disabled="isReadOnly" required class="form-select"
                    v-model="sabhasadDetail.current_address.SubDistrict"
                    @change="
                      loadVillages(false, $event.target);
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    id="csubDistrict" aria-label="Floating label select example">
                    <option value="">select</option>
                    <option v-for="taluka in currentTalukasList" :key="taluka.SubDistrict" :value="taluka.SubDistrict">
                      {{ taluka.SubDistrictMr }}
                    </option>
                  </select>
                  <label for="csubDistrict">तालुका</label>
                </div>
              </div>
              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <select :disabled="isReadOnly" required class="form-select" name="cvillage"
                    v-model="sabhasadDetail.currentVillage" @change="checkValidataty($event.target)" id="cvillage"
                    aria-label="Floating label select example">
                    <option value="">select</option>
                    <option v-for="village in currentVillageList" :key="village.AddressDirectoryID"
                      :value="village.AddressDirectoryID">
                      {{ village.VillageMr }}
                    </option>
                  </select>
                  <label for="cvillage">गाव</label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="tab">
          <form ref="basicForm3">
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" v-model="sabhasadDetail.education_data.educationClass"
                  @change="
                    clearEducationData();
                  checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
                  class="form-control" id="educationClass" placeholder="Password" list="education" />
                <label for="educationClass">शिक्षण</label>
              </div>
            </div>
            <div v-if="sabhasadDetail.education_data.educationClass">
              <div class="row g-1 mb-3" v-if="sabhasadDetail.education_data.educationClass == 'ITI'">
                <div class="form-floating col">
                  <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                    v-model="sabhasadDetail.education_data.educationITIBranch" class="form-control"
                    id="educationITIBranch" placeholder="Password" />
                  <label for="educationITIBranch">ITI शाखा</label>
                </div>
              </div>

              <div v-if="sabhasadDetail.education_data.educationClass == 'PHD'">
                <div class="row g-1 mb-3">
                  <div class="form-floating col">
                    <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                      v-model="sabhasadDetail.education_data.phdArea" class="form-control" id="phdArea"
                      placeholder="Password" />
                    <label for="phdArea">PHD क्षेत्र (जसे कि कला, वाणिज्य, वैद्यकिय...)</label>
                  </div>
                </div>

                <div class="row g-1 mb-3">
                  <div class="form-floating col">
                    <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                      v-model="sabhasadDetail.education_data.phdMainSubject" class="form-control" id="phdMainSubject"
                      placeholder="Password" />
                    <label for="phdMainSubject">PHD मुख्य विषय</label>
                  </div>
                </div>

                <div class="row g-1 mb-3">
                  <div class="form-floating col">
                    <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                      v-model="sabhasadDetail.education_data.phdResearchDetail" class="form-control"
                      id="phdResearchDetail" placeholder="Password" />
                    <label for="phdResearchDetail">संशोधनाविषयी थोडक्यात माहिती</label>
                  </div>
                </div>
              </div>

              <div v-if="
                ['Post Graduate', 'Graduate', 'Diploma'].includes(
                  sabhasadDetail.education_data.educationClass
                )
              ">
                <div class="row g-1 mb-3">
                  <label>
                    {{ sabhasadDetail.education_data.educationClass }}
                    प्रकार</label>
                </div>
                <div class="row g-1 mb-3">
                  <div class="form-check form-check-inline">
                    <input :disabled="isReadOnly" required type="radio"
                      @change="
                        clearEducationDegreeType();
                      checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "
                      v-model="
                        sabhasadDetail.education_data.educationDegreeType
                      " class="form-check-input" name="educationDegreeType" id="educationDegreeType1"
                      value="professional" />
                    <label for="educationDegreeType1">व्यवसायिक(अभियांत्रिकी, वैद्यकिय, कृषी इत्यादी)</label>
                  </div>
                </div>
                <div class="row g-1 mb-3">
                  <div class="form-check form-check-inline">
                    <input required type="radio"
                      @change="
                        clearEducationDegreeType();
                      checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "
                      :disabled="isReadOnly ||
                        sabhasadDetail.education_data.educationClass ==
                        'Diploma'
                      " v-model="
  sabhasadDetail.education_data.educationDegreeType
" class="form-check-input" name="educationDegreeType" id="educationDegreeType2" value="nonProfessional" />
                    <label for="educationDegreeType2">अव्यवसायिक(कला, वाणिज्य, विज्ञान इत्यादी)</label>
                  </div>
                </div>

                <div v-if="
                  sabhasadDetail.education_data.educationDegreeType ==
                  'nonProfessional'
                ">
                  <div class="row g-1 mb-3 border-gray">
                    <div class="col-12">
                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required class="form-check-input" v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        " type="radio" @change="checkValidataty($event.target)" name="educationDegreeBranch"
                          id="educationDegreeBranch1" value="Art" />
                        <label for="educationDegreeBranch1" class="form-check-label">कला</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required class="form-check-input" v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        " type="radio" @change="checkValidataty($event.target)" name="educationDegreeBranch"
                          id="educationDegreeBranch2" value="Commerce" />
                        <label class="form-check-label" for="educationDegreeBranch2">वाणिज्य</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required class="form-check-input" v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        " type="radio" @change="checkValidataty($event.target)" name="educationDegreeBranch"
                          id="educationDegreeBranch3" value="Science" />
                        <label for="educationDegreeBranch3" class="form-check-label">विज्ञान</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required class="form-check-input" v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        " type="radio" @change="checkValidataty($event.target)" name="educationDegreeBranch"
                          id="educationDegreeBranch4" value="Other" />
                        <label class="form-check-label" for="educationDegreeBranch4">इतर</label>
                      </div>
                      <div class="form-floating" v-if="
                        sabhasadDetail.education_data.educationDegreeBranch ==
                        'Other'
                      ">
                        <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                          v-model="
                            sabhasadDetail.education_data
                              .educationDegreeBranchOther
                          " class="form-control" id="educationDegreeBranchOther" />
                        <label for="educationDegreeBranchOther" class="form-check-label">इतर शाखेचे नाव(उदा. MCVC)</label>
                      </div>
                    </div>
                  </div>
                </div>

                <div v-if="
                  sabhasadDetail.education_data.educationDegreeType ==
                  'professional'
                ">
                  <div class="row g-1 mb-3 border-gray">
                    <div class="col-12">
                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required type="radio"
                          @change="
                            clearEducationEngBranch();
                          checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
                          v-model="
                            sabhasadDetail.education_data.educationDegreeArea
                          " class="form-check-input" name="educationDegreeArea" id="educationDegreeArea"
                          value="engineering" />
                        <label for="educationDegreeArea" class="form-check-label">अभियांत्रिकी</label>
                      </div>
                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required type="radio"
                          @change="
                            clearEducationEngBranch();
                          checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
                          v-model="
                            sabhasadDetail.education_data.educationDegreeArea
                          " class="form-check-input" id="educationDegreeArea2" name="educationDegreeArea"
                          value="medical" />
                        <label for="educationDegreeArea2" class="form-check-label">वैद्यकिय</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required type="radio"
                          @change="
                            clearEducationEngBranch();
                          checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
                          v-model="
                            sabhasadDetail.education_data.educationDegreeArea
                          " class="form-check-input" name="educationDegreeArea" id="educationDegreeArea3"
                          value="management" />
                        <label for="educationDegreeArea3" class="form-check-label">व्यवस्थापण</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required type="radio"
                          @change="
                            clearEducationEngBranch();
                          checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
                          v-model="
                            sabhasadDetail.education_data.educationDegreeArea
                          " class="form-check-input" name="educationDegreeArea" id="educationDegreeArea4"
                          value="agri" />
                        <label for="educationDegreeArea4" class="form-check-label">कृषी</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required type="radio"
                          @change="
                            clearEducationEngBranch();
                          checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
                          v-model="
                            sabhasadDetail.education_data.educationDegreeArea
                          " class="form-check-input" name="educationDegreeArea" id="educationDegreeArea5"
                          value="low" />
                        <label for="educationDegreeArea5" class="form-check-label">कायदेविषयक</label>
                      </div>

                      <div class="form-check form-check-inline">
                        <input :disabled="isReadOnly" required type="radio"
                          @change="
                            clearEducationEngBranch();
                          checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              "
                          v-model="
                            sabhasadDetail.education_data.educationDegreeArea
                          " class="form-check-input" name="educationDegreeArea" id="educationDegreeArea6"
                          value="Other" />
                        <label for="educationDegreeArea6" class="form-check-label">इतर</label>
                      </div>

                      <div class="form-floating" v-if="
                        sabhasadDetail.education_data.educationDegreeArea ==
                        'Other'
                      ">
                        <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                          v-model="
                            sabhasadDetail.education_data
                              .educationDegreeAreaOther
                          " class="form-control" id="educationDegreeAreaOther" />
                        <label for="educationDegreeAreaOther">इतर कोणते</label>
                      </div>
                      <div class="form-floating" v-if="
                        sabhasadDetail.education_data.educationDegreeArea ==
                        'engineering'
                      ">
                        <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                          v-model="
                            sabhasadDetail.education_data
                              .educationBranchEngineering
                          " class="form-control" id="educationBranchEngineering" />
                        <label for="educationBranchEngineering">अभियांत्रिकी शाखा?(उदा. विद्युत, स्थापत्य, संगणक,
                          इत्यादी)</label>
                      </div>
                      <div class="form-floating" v-else>
                        <input :disabled="isReadOnly" required @change="checkValidataty($event.target)" type="text"
                          v-model="
                            sabhasadDetail.education_data
                              .educationDegreeNonEngineering
                          " class="form-control" id="educationDegreeNonEngineering" />
                        <label for="educationDegreeNonEngineering">Degree?(उदा. B.H.M.S., M.B.A., इत्यादी)</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row g-1 mb-3 border-gray">
              <div class="col-12">
                <label>शिक्षण पुर्ण झाले कि चालू आहे?</label>
              </div>
              <div class="col-12">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    v-model="sabhasadDetail.education_data.isEducationCompleted" type="radio"
                    @change="checkValidataty($event.target)" name="isEducationCompleted" id="isEducationCompleted"
                    v-bind:value="true" />
                  <label class="form-check-label" for="isEducationCompleted">पुर्ण झाले.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    v-model="sabhasadDetail.education_data.isEducationCompleted" type="radio"
                    @change="checkValidataty($event.target)" name="isEducationCompleted" id="isEducationCompleted1"
                    v-bind:value="false" />
                  <label class="form-check-label" for="isEducationCompleted1">चालू आहे.</label>
                </div>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div class="col-12">
                <label>तुम्ही स्पर्धा परिक्षाची तयारी करत आहात का?</label>
              </div>
              <div class="col-12">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    v-model="sabhasadDetail.competitiveCandidate" type="radio" @change="checkValidataty($event.target)"
                    name="competitiveCandidate" id="competitiveCandidate" v-bind:value="true" />
                  <label class="form-check-label" for="competitiveCandidate">होय</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    @change="
                      sabhasadDetail.competitiveExamName = null;
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                "
                    v-model="sabhasadDetail.competitiveCandidate" type="radio" name="competitiveCandidate"
                    id="competitiveCandidate1" v-bind:value="false" />
                  <label class="form-check-label" for="competitiveCandidate1">नाही.</label>
                </div>
                <div class="form-floating" v-if="sabhasadDetail.competitiveCandidate">
                  <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                    v-model="sabhasadDetail.competitiveExamName" class="form-control" id="competitiveExamName" />
                  <label for="competitiveExamName" class="form-check-label">स्पर्धा परिक्षेचे नाव?(उदा. UPSC, MPSC, पोलिस
                    भरती,
                    इत्यादी)</label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="tab">
          <form ref="basicForm4">
            <div class="row g-1 mb-3 border-gray">
              <div class="col-12">
                <label>व्यवसाय:</label>
              </div>
              <fieldset class="col-12" required>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input"
                    v-model="sabhasadDetail.employee_data.employmentType"
                    @change="
                      clearEmployeeBusiness();
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    type="checkbox" id="employmentType" value="Self Business" />
                  <label class="form-check-label" for="employmentType">स्वतः चा व्यवसाय</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input"
                    v-model="sabhasadDetail.employee_data.employmentType"
                    @change="
                      sabhasadDetail.employee_data.traderArea = null;
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    type="checkbox" id="employmentType1" value="Trader" />
                  <label class="form-check-label" for="employmentType1">व्यापारी</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input"
                    v-model="sabhasadDetail.employee_data.employmentType"
                    @change="
                      clearEmployeeEmployee();
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    type="checkbox" id="employmentType2" value="Employee" />
                  <label class="form-check-label" for="employmentType2">नौकरी</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input"
                    v-model="sabhasadDetail.employee_data.employmentType"
                    @change="
                      clearEmployeeAgri();
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                    type="checkbox" id="employmentType3" value="Agriculture" />
                  <label class="form-check-label" for="employmentType3">शेती</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input"
                    v-model="sabhasadDetail.employee_data.employmentType" type="checkbox"
                    @change="checkValidataty($event.target)" id="employmentType4" value="UnEmployment" />
                  <label class="form-check-label" for="employmentType4">काहिही नाही</label>
                </div>
              </fieldset>
            </div>
            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.employmentType.includes(
                'Self Business'
              )
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" v-model="sabhasadDetail.employee_data.businessArea"
                  @change="
                    clearEmployeeBusinessArea();
                  checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
                  class="form-control" id="businessArea" placeholder="email" list="businessList" />
                <label for="businessArea">व्यवसायिक क्षेत्र?</label>
              </div>
            </div>
            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.businessArea == 'वैद्यकीय'">
              <div class="form-floating col">
                <select :disabled="isReadOnly" required class="form-select"
                  v-model="sabhasadDetail.employee_data.businessmedicalSubArea"
                  @change="
                    sabhasadDetail.employee_data.businessDoctorSpecilization =
                    null;
                  checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      "
                  id="businessmedicalSubArea" aria-label="Floating label select example">
                  <option value="">select</option>
                  <option value="Hospital">दवाखाना</option>
                  <option value="Medical">मेडिकल</option>
                  <option value="Lab">लॅब</option>
                  <option value="Other">इतर</option>
                </select>
                <label for="businessmedicalSubArea">वैद्यकीय उपक्षेत्र</label>
              </div>
            </div>
            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.businessmedicalSubArea ==
              'Hospital'
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data.businessDoctorSpecilization
                " class="form-control" id="businessDoctorSpecilization" placeholder="email" />
                <label for="businessDoctorSpecilization">आपण कोणत्या क्षेत्रात विशेषज्ञ आहात?(जसे बालरोग तज्ञ, ENT,
                  प्राणीरोग तज्ञ)</label>
              </div>
            </div>
            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.businessArea == 'अभियांत्रिकी'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data.businessEngineeringBranch
                " class="form-control" id="businessEngineeringBranch" placeholder="email" />
                <label for="businessEngineeringBranch">अभियांत्रिकी शाखा?(उदा. स्थापत्य, संगणक, विद्युत,
                  इत्यादी)</label>
              </div>
            </div>
            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.businessArea == 'शैक्षणिक क्षेत्र'
            ">
              <div class="form-floating col">
                <select :disabled="isReadOnly" required class="form-select"
                  v-model="sabhasadDetail.employee_data.businessEducationPost"
                  @change="
                    clearEmployeeBusinessTeacher();
                  checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  "
                  id="businessEducationPost" aria-label="Floating label select example">
                  <option value="">select</option>
                  <option value="Director">संस्थाचालक</option>
                  <option value="PrincipleOrHOD">
                    मुख्याध्यापक/प्राचार्य/विभाग प्रमुख
                  </option>
                  <option value="teacher">प्राध्यापक/ शिक्षक</option>
                </select>
                <label for="businessEducationPost">पद?</label>
              </div>
            </div>
            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.businessEducationPost == 'teacher'
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data.businessEducationTeacherArea
                " class="form-control" list="education" id="businessEducationTeacherArea" placeholder="reference" />
                <label for="businessEducationTeacherArea">आपण कोणत्या क्षेत्रात शिकवतात?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.businessEducationPost == 'teacher'
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data
                    .businessEducationTeacherMainSubject
                " class="form-control" id="businessEducationTeacherMainSubject" placeholder="reference" />
                <label for="businessEducationTeacherMainSubject">आपल्या शिकवणीतील मुख्य विषय?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.businessArea == 'इतर शॉप'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.otherShopName" class="form-control" id="otherShopName"
                  placeholder="reference" />
                <label for="otherShopName">शॉपीचे नाव?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.businessArea == 'इतर शॉप'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.otherShopType" class="form-control" id="otherShopType"
                  placeholder="reference" />
                <label for="otherShopType">कशाची शॉप आहे? (उदा, हार्डवेअर, कपडा दुकान इत्यादी)</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.businessArea == 'इतर व्यवसाय'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.otherBusinessName" class="form-control" id="otherBusinessName"
                  placeholder="reference" />
                <label for="otherBusinessName">कोणता व्यवसाय आहे?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.businessArea == 'इतर सेवा'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.otherServiceName" class="form-control" id="otherServiceName"
                  placeholder="reference" />
                <label for="otherServiceName">कोणता व्यवसाय आहे?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.employmentType.includes(
                'Self Business'
              )
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.businessPlace" class="form-control" id="businessPlace"
                  placeholder="reference" />
                <label for="businessPlace">व्यवसायाचे ठिकाण?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.employmentType.includes('Employee')
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" list="employementList"
                  v-model="sabhasadDetail.employee_data.employementArea"
                  @change="clearEmployeeEmployeeArea(); checkValidataty($event.target);" class="form-control"
                  id="employementArea" placeholder="reference" />
                <label for="employementArea">नौकरीचे क्षेत्र?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.employementArea == 'वैद्यकीय'">
              <div class="form-floating col">
                <select :disabled="isReadOnly" required class="form-select"
                  v-model="sabhasadDetail.employee_data.employeeMedicalSubArea" @change="
                    clearEmployeeEmployeeDoctor(); checkValidataty($event.target);" id="employeeMedicalSubArea"
                  aria-label="Floating label select example">
                  <option value="">select</option>
                  <option value="Hospital">दवाखाना</option>
                  <option value="Medical">मेडिकल</option>
                  <option value="Lab">लॅब</option>
                  <option value="Other">इतर</option>
                </select>
                <label for="employeeMedicalSubArea">उपक्षेत्र?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.employeeMedicalSubArea ==
              'Hospital'
            ">
              <div class="form-floating col">
                <select :disabled="isReadOnly" required class="form-select" v-model="
                  sabhasadDetail.employee_data.employeeMedicalHospitalPost
                "
                  @change="sabhasadDetail.employee_data.employeeDoctorSpecilization = null; checkValidataty($event.target);                                                                         "
                  id="employeeMedicalHospitalPost" aria-label="Floating label select example">
                  <option value="">select</option>
                  <option value="Doctor">डॉक्टर</option>
                  <option value="Warder">परिचारक/परीचारिका</option>
                  <option value="Other">इतर</option>
                </select>
                <label for="employeeMedicalHospitalPost">पद?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.employeeMedicalHospitalPost ==
              'Doctor'
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data.employeeDoctorSpecilization
                " class="form-control" id="employeeDoctorSpecilization" placeholder="reference" />
                <label for="employeeDoctorSpecilization">आपण कोणत्या क्षेत्रात तज्ञ आहात?(जसे बालरोग तज्ञ, ENT,
                  प्राणीरोग तज्ञ)</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.employementArea == 'अभियांत्रिकी'
            ">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data.employeeEngineeringBranch
                " class="form-control" id="employeeEngineeringBranch" placeholder="reference" />
                <label for="employeeEngineeringBranch">अभियांत्रिकी शाखा?(उदा. स्थापत्य, संगणक, विद्युत,
                  इत्यादी)</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="
              sabhasadDetail.employee_data.employementArea ==
              'शैक्षणिक क्षेत्र'
            ">
              <div class="form-floating col">
                <select :disabled="isReadOnly" required @change="checkValidataty($event.target)" class="form-select"
                  v-model="sabhasadDetail.employee_data.employeeEducationPost" id="employeeEducationPost"
                  aria-label="Floating label select example">
                  <option value="">select</option>
                  <option value="Director">व्यवस्थापक</option>
                  <option value="PrincipleOrHOD">
                    मुख्याध्यापक/प्राचार्य/विभाग प्रमुख
                  </option>
                  <option value="teacher">प्राध्यापक/ शिक्षक</option>
                  <option value="nonTeachingStaff">शिक्षकेतर कर्मचारी</option>
                </select>
                <label for="employeeEducationPost">पद?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.employeeEducationPost == 'teacher'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  list="education" v-model="
                    sabhasadDetail.employee_data.employeeEducationTeacherArea
                  " class="form-control" id="employeeEducationTeacherArea" placeholder="reference" />
                <label for="employeeEducationTeacherArea">आपण कोणत्या क्षेत्रात शिकवतात?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.employeeEducationPost == 'teacher'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data
                    .employeeEducationTeacherMainSubject
                " class="form-control" id="employeeEducationTeacherMainSubject" placeholder="reference" />
                <label for="employeeEducationTeacherMainSubject">आपल्या शिकवणीतील मुख्य विषय?</label>
              </div>
            </div>

            <div v-if="sabhasadDetail.employee_data.employementArea">
              <div class="row g-1 mb-3"
                v-if="['कायदेविषयक', 'प्रशासकीय अधिकारी', 'लोकप्रतिनिधी', 'पोलिस', 'बँक', 'चित्रपट', 'संगणकीय सेवा', 'ग्राफिक्स डिझाईन', 'कृषी', 'हॉटेल', 'मांस',].includes(sabhasadDetail.employee_data.employementArea)">
                <div class="form-floating col">
                  <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                    v-model="sabhasadDetail.employee_data.employeePost" class="form-control" id="employeePost"
                    placeholder="reference" />
                  <label for="employeePost">पद आणि कार्यक्षेत्र?</label>
                </div>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.employementArea == 'इतर'">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.employeeOtherPost" class="form-control" id="employeeOtherPost"
                  placeholder="reference" />
                <label for="employeeOtherPost">इतर कोणती नौकरी??</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.employmentType.includes('Trader')">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.traderArea" class="form-control" id="traderArea"
                  placeholder="reference" />
                <label for="traderArea">व्यापार क्षेत्र?(उदा शेतीचा माल, औद्योगिक)</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.employmentType.includes('Agriculture')">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.employee_data.agricultureMainCrops" class="form-control"
                  id="agricultureMainCrops" placeholder="reference" />
                <label for="agricultureMainCrops">आपण शेतात कोणती मुख्य पिके पिके घेतात?</label>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray" v-if="
              sabhasadDetail.employee_data.employmentType.includes(
                'Agriculture'
              )
            ">
              <div class="col-4">
                <label>आपण शेती पुरक जोडव्यवसाय करत आहात का?</label>
              </div>
              <div class="col-8">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input" v-model="
                    sabhasadDetail.employee_data.isAgricultureCumBusiness" type="radio"
                    @change="checkValidataty($event.target)" id="isAgricultureCumBusiness" name="isAgricultureCumBusiness"
                    v-bind:value="true" />
                  <label class="form-check-label" for="isAgricultureCumBusiness">हो</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input" v-model="
                    sabhasadDetail.employee_data.isAgricultureCumBusiness
                  " type="radio"
                    @change="sabhasadDetail.employee_data.agricultureCumBusinessName == null; checkValidataty($event.target);"
                    name="isAgricultureCumBusiness" id="isAgricultureCumBusiness1" v-bind:value="false" />
                  <label class="form-check-label" for="isAgricultureCumBusiness1">नाही</label>
                </div>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.employee_data.isAgricultureCumBusiness">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)" v-model="
                  sabhasadDetail.employee_data.agricultureCumBusinessName
                " class="form-control" id="agricultureCumBusinessName" placeholder="reference" />
                <label for="agricultureCumBusinessName">व्यापार क्षेत्र?(उदा शेतीचा माल, औद्योगिक)</label>
              </div>
            </div>
          </form>
        </div>

        <div class="tab">
          <form ref="basicForm5">
            <div class="row g-1 mb-3 border-gray">
              <div class="col-xs-12 col-md-6">
                <label>आपण कोणत्या राजकीय पक्षात काम करता का?</label>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    v-model="sabhasadDetail.isPoliticalBackground" type="radio" @change="checkValidataty($event.target)"
                    name="isPoliticalBackground" id="isPoliticalBackground" v-bind:value="true" />
                  <label class="form-check-label" for="isPoliticalBackground">हो</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    v-model="sabhasadDetail.isPoliticalBackground" type="radio"
                    @change="
                      clearPolyticalPartyDetail();
                    checkValidataty($event.target);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          "
                    name="isPoliticalBackground" id="isPoliticalBackground1" v-bind:value="false" />
                  <label class="form-check-label" for="isPoliticalBackground1">नाही</label>
                </div>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.isPoliticalBackground">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.politcalPartyName" class="form-control" id="politcalPartyName"
                  placeholder="reference" />
                <label for="politcalPartyName">कोणत्या पक्षात कार्य करता?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.isPoliticalBackground">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.politcalPartyPost" class="form-control" id="politcalPartyPost"
                  placeholder="reference" />
                <label for="politcalPartyPost">पद आणि कार्यक्षेत्र?</label>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div class="col-xs-12 col-md-6">
                <label>शिवमुद्रा सोडुन इतर कोणत्या संघटनेत कार्य करता का?</label>
              </div>
              <div class="col-xs-12 col-md-6">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    v-model="sabhasadDetail.isSocialBackground" type="radio" @change="checkValidataty($event.target)"
                    name="isSocialBackground" id="isSocialBackground" v-bind:value="true" />
                  <label class="form-check-label" for="isSocialBackground">हो</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" required class="form-check-input"
                    v-model="sabhasadDetail.isSocialBackground" type="radio" name="isSocialBackground"
                    @change="clearSocialFoundationDetail(); checkValidataty($event.target);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    "
                    id="isSocialBackground1" v-bind:value="false" />
                  <label class="form-check-label" for="isSocialBackground1">नाही</label>
                </div>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.isSocialBackground">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.socialFoundationName" class="form-control" id="socialFoundationName"
                  placeholder="reference" />
                <label for="socialFoundationName">कोणत्या संघटनेत कार्य करता?</label>
              </div>
            </div>

            <div class="row g-1 mb-3" v-if="sabhasadDetail.isSocialBackground">
              <div class="form-floating col">
                <input :disabled="isReadOnly" required type="text" @change="checkValidataty($event.target)"
                  v-model="sabhasadDetail.socialFoundationPost" class="form-control" id="socialFoundationPost"
                  placeholder="reference" />
                <label for="socialFoundationPost">पद आणि कार्यक्षेत्र?</label>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div class="col-12">
                <label>तुम्ही खालीलपैकी कोणत्या क्षेत्रात मराठा शिवमुद्रा
                  प्रतिष्ठानला मदत करू शकता?</label>
              </div>
              <div class="col-12" style="text-align: left">
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.helpForOrg"
                    type="checkbox" @change="checkValidataty($event.target)" id="helpForOrg" value="Editor" />
                  <label class="form-check-label" for="helpForOrg">मि एडिटींग करू {{ maleFemaleLabel }}.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.helpForOrg"
                    type="checkbox" @change="checkValidataty($event.target)" id="helpForOrg1" value="Speaker" />
                  <label class="form-check-label" for="helpForOrg1">मि वक्ता/किर्तनकार आहे. मि शिवमुद्रामार्फत भाषण/किर्तन
                    करू
                    {{ maleFemaleLabel }}.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.helpForOrg"
                    type="checkbox" @change="checkValidataty($event.target)" id="helpForOrg2" value="Writer" />
                  <label class="form-check-label" for="helpForOrg2">मला छान लेख लिहिता येतात. ते मि शिवमुद्रासाठी लिहू
                    {{ maleFemaleLabel }}.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.helpForOrg"
                    type="checkbox" @change="checkValidataty($event.target)" id="helpForOrg3" value="Campaigner" />
                  <label class="form-check-label" for="helpForOrg3">मी मोहिमेला तसेच कार्यक्रमाला येऊ
                    {{ maleFemaleLabel }}.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.helpForOrg"
                    type="checkbox" @change="checkValidataty($event.target)" id="helpForOrg4" value="Movementer" />
                  <label class="form-check-label" for="helpForOrg4">मि शिवमुद्रामार्फत माझ्या क्षेत्रात आंदोलनात सहभागी
                    होऊ
                    {{ maleFemaleLabel }}.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.helpForOrg"
                    type="checkbox" @change="checkValidataty($event.target)" id="helpForOrg5" value="VoiceMagician" />
                  <label class="form-check-label" for="helpForOrg5">माझा आवाज चांगला आहे. मि दिनविशेष किंवा इतर व्हिडीओला
                    आवाज
                    देऊ {{ maleFemaleLabel }}.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input :disabled="isReadOnly" class="form-check-input" v-model="sabhasadDetail.helpForOrg"
                    type="checkbox" @change="checkValidataty($event.target)" id="helpForOrg6"
                    value="FinancialSupporter" />
                  <label class="form-check-label" for="helpForOrg6">मि शिवमुद्राला आर्थिक मदत करू {{ maleFemaleLabel
                  }}.</label>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="tab">
          <form ref="basicForm6">
            <div class="row g-1 mb-3 border-gray">
              <div v-if="documentFiles.aadharImage && documentFiles.aadharImageUrl">
                <div v-if="isImage(documentFiles.aadharImage)">
                  <img style="max-width: 300px; max-height: 300px;" :src="documentFiles.aadharImageUrl" />
                </div>
                <div v-else-if="isPdf(documentFiles.aadharImage)">
                  <PDFViewer :source="documentFiles.aadharImageUrl"
                    style="height: 100vh; width: 50vw; max-width: 300px;" />
                </div>
              </div>

              <div class="form-floating col">
                <input :disabled="isReadOnly" :required="isRequired" type="file" class="form-control" id="aadharImage"
                  placeholder="reference" ref="aadharFileInput" @change="onAadharFileSelected"
                  accept="image/*, application/pdf" />
                <label for="aadharImage">कृपया आपले आधार कार्ड अपलोड करा.</label>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div v-if="documentFiles.tcImage && documentFiles.tcImageUrl">
                <div v-if="isImage(documentFiles.tcImage)">
                  <img style="max-width: 300px; max-height: 300px;" :src="documentFiles.tcImageUrl" />
                </div>
                <div v-else-if="isPdf(documentFiles.tcImage)">
                  <PDFViewer :source="documentFiles.tcImageUrl" style="height: 100vh; width: 50vw; max-width: 300px;" />
                </div>
              </div>

              <div class="form-floating col">
                <input :disabled="isReadOnly" type="file" class="form-control" id="tcImage" placeholder="reference"
                  ref="tcFileInput" @change="onTcFileSelected" accept="image/*, application/pdf" />
                <label for="tcImage">कृपया शाळा सोडल्याचा दाखला अपलोड करा.</label>
                <small>आपण या ठिकाणी आपला किंवा परिवारातील इतर सदस्यांचा शाळा सोडल्याचा दाखला किंवा जात प्रमाणपत्र अपलोड
                  करू शकता.</small>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div v-if="documentFiles.photoImage && documentFiles.photoImageUrl">
                <div v-if="isImage(documentFiles.photoImage)">
                  <img style="max-width: 300px; max-height: 300px;" :src="documentFiles.photoImageUrl" />
                </div>
              </div>

              <div class="form-floating col">
                <input :disabled="isReadOnly" :required="isRequired" type="file" class="form-control" id="photoImage"
                  placeholder="reference" ref="photoFileInput" @change="onPhotoFileSelected" accept="image/*" />
                <label for="photoImage">कृपया फोटो अपलोड करा.</label>
                <small>हा फोटो आपल्या आयडी कार्डवर तसेच आपल्या जन्मदिवसाच्या शुभेच्छा बॅनर साठी वापरला जाणार आहे.</small>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div v-if="documentFiles.signImage && documentFiles.signImageUrl">
                <div v-if="isImage(documentFiles.signImage)">
                  <img style="max-width: 300px; max-height: 300px;" :src="documentFiles.signImageUrl" />
                </div>
              </div>

              <div class="form-floating col">
                <input :disabled="isReadOnly" :required="isRequired" type="file" class="form-control" id="signImage"
                  placeholder="reference" ref="signFileInput" @change="onSignFileSelected" accept="image/*" />
                <label for="politcalPartyName">कृपया स्वाक्षरी अपलोड करा.</label>
              </div>
            </div>

          </form>
          <progress max="100" :value="formDataObject.uploadProgress">
          </progress>
        </div>
        <div class="tab">
          <section class="carosal-area1">
            <div class="main-contener">
              <h1>धन्यवाद!!!</h1>
              <h2> आपली माहिती यशस्वीरित्या जतन झाली आहे!!!! </h2>
              <h2>
                आपली सभासद फीस ₹१०१ खालील UPI ID वर भरावी.
              </h2>
              <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-8 col-xl-8">
                  <input type="text" id="upiID" class="form-control" readonly
                    value="marathashivmudraprat.62641520@hdfcbank" />
                </div>
                <!-- <div class="col-xs-12 col-sm-12 col-md-4 col-xl-4">
                  <button type="button" class="btn btn-primary" @click="document." data-bs-toggle="popover" data-bs-title="कॉपी केले गेले."
                    data-bs-content="कृपया फोन पे किंवा जी-पे द्वारे ह्या UPI ID ला पेमेंट करा."> कॉपी
                    करा.</button>
                </div> -->
              </div>
              <ul id="paymentSteps" class="payment-steps hide">
                <li> सर्व प्रथम आपले फोन पे किंवा जी-पे एप खोलावे. </li>
                <li>फोन पे मध्ये <b>To Mobile Number</b> हा पर्याय निवडावा. जी-पे वापरत असाल तर <b>Pay UPI ID or
                    Number</b> हा पर्याय निवडावा.</li>
                <li> वरील कॉपी कलेला UPI ID तेथे पेस्ट करावा. </li>
                <li>आणि पुढील प्रक्रिया पुर्ण करावी.</li>
              </ul>
              <!-- <button class="btn btn-link" id="paymentToggleButton">पेमेंट कसे करावे, ते
                दाखवा.</button> -->
              <p> पेमेंट चा स्क्रीनशॉट मराठा शिवमुद्रा प्रतिष्ठान च्या अधिकृत संपर्क क्रमांक <a target="_blank"
                  href="https://wa.me/918233729696">८२३३७२९६९६</a> या व्हाट्सप
                नंबरला पाठवावा. </p>
              <p> मा. पदाधिकारी माहितीची पडताळणी करतील. व त्यानंतर आपल्याला सभासद क्रमांक आपल्या ई-मेल वर पाठवला जाईल.
                धन्यवाद.
              </p>
              <div class="social-links">

                <div class="row">
                  <div class="col-2">
                    युट्युब
                  </div>
                  <div class="col-10">
                    <div class="g-ytsubscribe" data-channelid="UCU9XzjJkTmCOHzFDnaMQKKA" data-layout="full"
                      data-count="default"> </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-2">
                    इंस्टाग्राम
                  </div>
                  <div class="col-10">
                    <a target="_blank" href="https://instagram.com/maratha_shivmudra">
                      <img style="widows: 50px; height: 50px;" src="/img/Instagram_icon.png" />
                    </a>
                  </div>
                </div>

                <div class="row">
                  <div class="col-2">
                    फेसबूक
                  </div>
                  <div class="col-10">
                    <iframe
                      src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmaratha.shivmudra96k&tabs&width=300&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                      width="300" height="70" style="border:none;overflow:hidden" scrolling="no" frameborder="0"
                      allowfullscreen="true"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                    </iframe>
                  </div>
                </div>

              </div>

            </div>

          </section>
        </div>

        <div style="overflow: auto" :class="{ 'd-none': hidePreNextDiv }" id="nextprevious">
          <div style="float: right">
            <button type="button" class="wizard-button" id="prevBtn" :class="{ 'd-none': hidePreviousButton }"
              @click="nextPrev(-1)" :v-html="previousButtonText">
              {{ previousButtonText }}
            </button>
            <button class="wizard-button" :class="{ 'd-none': hideNextButton }" type="button" id="nextBtn"
              @click="nextPrev(1)" :v-html="nextButtonText">
              {{ nextButtonText }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { SabhasadDetails } from "@/interfaces/SabhasadDetails";
import { SabhasadService } from "@/services/SabhasadService";
import { Ref } from "vue-property-decorator";
import { Options, Vue } from "vue-class-component";
import { AddressService } from "@/services/AddressSerivice";
import { Districts } from "@/interfaces/Districts";
import { SubDistrict } from "@/interfaces/SubDistrict";
import { Village } from "@/interfaces/Village";
import { reactive } from "vue";
import PDFViewer from 'pdf-viewer-vue'
import { FileService } from "@/services/FileService";
import { DocumentFiles } from "@/interfaces/DocumentFiles";
@Options({
  components: {
    PDFViewer,
  },
})
export default class RegisterSabhasad extends Vue {
  @Ref("allSteps") readonly myTitle!: HTMLElement | null;
  @Ref("tabParent") readonly tabParent!: HTMLElement | null;
  isVerification = false;
  hidePreviousButton = false;
  isRequired = true;
  hideNextButton = false;
  hidePreNextDiv = false;
  nextButtonText = "पुढे";
  previousButtonText = "मागे";
  currentTab = 0;
  districts: Districts[] = [];
  permanentTalukasList: SubDistrict[] = [];
  currentTalukasList: SubDistrict[] = [];
  permentVillageList: Village[] = [];
  currentVillageList: Village[] = [];
  maleFemaleLabel = "शकतो";
  isSave = false;
  sabhasadDetail: SabhasadDetails = {
    document_data: {},
    education_data: {},
    employee_data: {
      employmentType: [],
    },
    permanent_address: {},
    helpForOrg: []
  };
  documentFiles: DocumentFiles = {}
  isReadOnly = false;
  formDataObject: {
    formdata: FormData,
    uploadProgress: number
  } = {
      formdata: new FormData,
      uploadProgress: 0
    };
  async mounted(): Promise<void> {
    //npm installthis.$tore.dispatch('getUser');
    document.title = "सभासद नोंदणी| मराठा शिवमुद्रा प्रतिष्ठान"
    this.loadDistricts();
    const currentTab = localStorage.getItem("currentTab");
    this.currentTab = currentTab ? +currentTab : 0
    this.showTab(this.currentTab);
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    document.head.appendChild(script);
    /*  const channelId = "UCU9XzjJkTmCOHzFDnaMQKKA";
     const options = {
       layout: 'default',
       theme: 'default'
     };
     script.onload = () => {
       (window as any).YT.ready(() => {
         const channel = (window as any).YT.ChannelId.getOrCreate(channelId);
         const subscribeButton = (window as any).YT.subscribeButton.createSubscribeButton(
           channel,
           options
         );
         subscribeButton.render('subscribe-button-container');
       });
     }; */
  }

  created() {
    this.$watch(
      () => this.sabhasadDetail,
      () => {
        localStorage.setItem("sabhasadDetails", JSON.stringify(this.sabhasadDetail));
      },
      { deep: true }
    );
  }

  async loadSabhasadDetails() {
    const service = new SabhasadService();
    const fileService = new FileService();
    // this.sabhasadDetail = reactive<SabhasadDetails>(await service.getUsers(33));
    this.sabhasadDetail = reactive<SabhasadDetails>(await service.getUsers(1));
    let permanentDistrict = this.sabhasadDetail.permanent_address.District;
    let currentDistrict = this.sabhasadDetail.current_address?.District;
    if (permanentDistrict) this.loadTalukas(true, permanentDistrict);
    if (currentDistrict) this.loadTalukas(false, currentDistrict);
    let permanentTaluka = this.sabhasadDetail.permanent_address.SubDistrict;
    let currentTaluka = this.sabhasadDetail.current_address?.SubDistrict;
    if (permanentTaluka) this.loadVillages(true, permanentTaluka);
    if (currentTaluka) this.loadVillages(false, currentTaluka);
    if (this.sabhasadDetail.document_data?.aadharImage) {
      this.documentFiles.aadharImageUrl = this.sabhasadDetail.document_data.aadharImage;
      this.documentFiles.aadharImage = await fileService.getFile(this.documentFiles.aadharImageUrl);
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


  async submitDocument() {
    if (this.sabhasadDetail.sabhasadID && this.documentFiles.aadharImage && this.documentFiles.photoImage && this.documentFiles.signImage) {
      const fileService = new FileService();
      this.formDataObject.formdata.append("sabhasadID", this.sabhasadDetail.sabhasadID.toString());
      this.formDataObject.formdata.append("aadharImage", this.documentFiles.aadharImage);
      this.formDataObject.formdata.append("photoImage", this.documentFiles.photoImage);
      this.formDataObject.formdata.append("signImage", this.documentFiles.signImage);
      if (this.documentFiles.tcImage)
        this.formDataObject.formdata.append("tcImage", this.documentFiles.tcImage);
      await fileService.uploadDocuments(this.formDataObject);
      localStorage.removeItem("sabhasadDetails");
      localStorage.removeItem("currentTab");
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

  async loadDistricts() {
    const service = new AddressService();
    this.districts = await service.getAllDistricts();
    this.loadSabhasadDetails();
  }

  async loadTalukas(isPermanrnt: boolean, event: EventTarget | string | null) {
    if (event) {
      let value = "";
      if (typeof event == "string") value = event;
      else {
        let newEvent = event as HTMLSelectElement;
        value = newEvent.value;
      }
      const service = new AddressService();
      if (isPermanrnt)
        this.permanentTalukasList = await service.getSubDistricts(value);
      else this.currentTalukasList = await service.getSubDistricts(value);
    }
  }

  async loadVillages(isPermanrnt: boolean, event: EventTarget | string | null) {
    if (event) {
      let value = "";
      if (typeof event == "string") value = event;
      else {
        let newEvent = event as HTMLSelectElement;
        value = newEvent.value;
      }
      const service = new AddressService();
      let permanentDistrict = this.sabhasadDetail.permanent_address.District;
      let currentDistrict = this.sabhasadDetail.current_address?.District;
      if (isPermanrnt && permanentDistrict)
        this.permentVillageList = await service.getVillages(
          permanentDistrict,
          value
        );
      else if (!isPermanrnt && currentDistrict)
        this.currentVillageList = await service.getVillages(
          currentDistrict,
          value
        );
    }
  }

  currentAddressAvailablity() {
    console.log(this.sabhasadDetail.isSameAddress);
    if (this.sabhasadDetail.isSameAddress == true)
      this.sabhasadDetail.current_address = null;
    else this.sabhasadDetail.current_address = {};
  }

  fixStepIndicator(n: number) {
    if (this.myTitle) {
      let i: number;
      let x = this.myTitle.getElementsByClassName("step");
      for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
      x[n].classList.add("active");
    }
  }

  clearEducationData() {
    let id = this.sabhasadDetail.education_data.id;
    let createdAt = this.sabhasadDetail.education_data.created_at;
    let classData = this.sabhasadDetail.education_data.educationClass;
    let isEducationCompleted =
      this.sabhasadDetail.education_data.isEducationCompleted;
    this.sabhasadDetail.education_data = {
      id: id,
      educationClass: classData,
      isEducationCompleted: isEducationCompleted,
      created_at: createdAt,
    };
  }

  clearEducationDegreeType() {
    let id = this.sabhasadDetail.education_data.id;
    let createdAt = this.sabhasadDetail.education_data.created_at;
    let classData = this.sabhasadDetail.education_data.educationClass;
    let isEducationCompleted =
      this.sabhasadDetail.education_data.isEducationCompleted;
    let educationDegreeType =
      this.sabhasadDetail.education_data.educationDegreeType;
    this.sabhasadDetail.education_data = {
      id: id,
      educationClass: classData,
      isEducationCompleted: isEducationCompleted,
      educationDegreeType: educationDegreeType,
      created_at: createdAt,
    };
  }

  clearEducationEngBranch() {
    this.sabhasadDetail.education_data.educationDegreeAreaOther = null;
    this.sabhasadDetail.education_data.educationBranchEngineering = null;
    this.sabhasadDetail.education_data.educationDegreeNonEngineering = null;
  }

  clearEmployeeBusiness() {
    this.sabhasadDetail.employee_data.businessArea = null;
    this.clearEmployeeBusinessArea();
  }

  clearEmployeeBusinessArea() {
    this.sabhasadDetail.employee_data.businessDoctorSpecilization = null;
    this.sabhasadDetail.employee_data.businessEducationPost = null;
    this.sabhasadDetail.employee_data.businessEngineeringBranch = null;
    this.sabhasadDetail.employee_data.businessPlace = null;
    this.sabhasadDetail.employee_data.businessmedicalSubArea = null;
    this.clearEmployeeBusinessTeacher();
  }

  clearEmployeeBusinessTeacher() {
    this.sabhasadDetail.employee_data.businessEducationTeacherArea = null;
    this.sabhasadDetail.employee_data.businessEducationTeacherMainSubject =
      null;
  }

  clearEmployeeEmployee() {
    this.clearEmployeeEmployeeArea();
    this.sabhasadDetail.employee_data.employementArea = null;
  }

  clearEmployeeEmployeeArea() {
    this.sabhasadDetail.employee_data.employeeEducationPost = null;
    this.sabhasadDetail.employee_data.employeeEngineeringBranch = null;
    this.sabhasadDetail.employee_data.employeeMedicalSubArea = null;
    this.sabhasadDetail.employee_data.employeePost = null;
    this.clearEmployeeEmployeeDoctor();
    this.clearEmployeeEmployeeTeacher();
  }

  clearEmployeeEmployeeDoctor() {
    this.sabhasadDetail.employee_data.employeeDoctorSpecilization = null;
    this.sabhasadDetail.employee_data.employeeMedicalHospitalPost = null;
  }

  clearEmployeeEmployeeTeacher() {
    this.sabhasadDetail.employee_data.employeeEducationTeacherArea = null;
    this.sabhasadDetail.employee_data.employeeEducationTeacherMainSubject =
      null;
  }

  clearEmployeeAgri() {
    this.sabhasadDetail.employee_data.agricultureCumBusinessName = null;
    this.sabhasadDetail.employee_data.agricultureMainCrops = null;
    this.sabhasadDetail.employee_data.isAgricultureCumBusiness = null;
  }

  clearSocialFoundationDetail() {
    this.sabhasadDetail.socialFoundationName = null;
    this.sabhasadDetail.socialFoundationPost = null;
  }
  clearPolyticalPartyDetail() {
    this.sabhasadDetail.politcalPartyName = null;
    this.sabhasadDetail.politcalPartyPost = null;
  }

  showTab(n: number) {
    if (this.tabParent) {
      let x = this.tabParent.getElementsByClassName(
        "tab"
        // eslint-disable-next-line no-undef
      ) as HTMLCollectionOf<HTMLElement>;
      x[n].style.display = "block";
      this.hidePreviousButton = [0, 6].includes(n)
      switch (n) {
        case 0:
          this.nextButtonText = "मला मान्य आहे";
          break;
        case 5:
          this.nextButtonText = "Save";
          break;
        case 6:
          this.nextButtonText = "Upload";
          break;
        default:
          this.nextButtonText = "पुढे";
      }
      this.fixStepIndicator(n);
    } else {
      setTimeout(() => {
        //this.showTab(n);
      }, 1000);
    }
  }

  async nextPrev(n: number) {
    if (this.tabParent) {
      // eslint-disable-next-line no-undef
      var x = this.tabParent.getElementsByClassName(
        "tab"
        // eslint-disable-next-line no-undef
      ) as HTMLCollectionOf<HTMLElement>;
      if (n == 1 && this.currentTab == 7)
        this.hidePreNextDiv = true;
      /* if (n == 1 && !validateForm()) return false; */
      if (n == 1 && this.currentTab > 0) {
        let form = this.$refs["basicForm" + this.currentTab] as HTMLFormElement;
        const invalidControls = Array.from(form.elements).filter((control) => {
          let newControl: HTMLFormElement = control as HTMLFormElement;
          !newControl.checkValidity();
        });
        invalidControls.forEach((element) => this.checkValidataty(element));
        if (!form.reportValidity()) return;
      }
      if (n == 1 && this.currentTab == 5 && this.isSave) {
        this.hideNextButton = true;
        this.hidePreviousButton = true
        let service = new SabhasadService();
        this.sabhasadDetail.sabhasadID = await service.updateUser(this.sabhasadDetail);
        this.hideNextButton = false
      }
      if (n == 1 && this.currentTab == 6) {
        await this.submitDocument();
      }

      x[this.currentTab].style.display = "none";
      this.currentTab = this.currentTab + n;
      localStorage.setItem("currentTab", this.currentTab.toString());
      this.showTab(this.currentTab);
    }
  }

  checkValidataty(targetTemp: HTMLInputElement | null | EventTarget) {
    if (targetTemp) {
      this.isSave = true;
      let target = targetTemp as HTMLInputElement;
      if (target.reportValidity()) target.classList.remove("invalid");
      else target.classList.add("invalid");
    }
  }

  onInput(event: Event, isPermanrnt: boolean) {
    const target = event.target as HTMLInputElement;
    if (isPermanrnt)
      this.sabhasadDetail.permanentSubAddress =
        target.value === "" ? null : target.value;
    else
      this.sabhasadDetail.currentSubAddress =
        target.value === "" ? null : target.value;
  }
}
</script>

<style>
.d-none {
  display: none;
}

.tab {
  max-width: 500px;
  border: 1px solid;
  margin: auto;
  padding: 10px;
  border-radius: 0.375rem;
}

.info-tag {
  text-align: left;
}

.v-hidden {
  visibility: hidden;
}

.border-gray {
  border: 1px solid #ced4da;
  border-radius: 0.375rem;
  padding: 10px;
}

.invalid {
  border: 1px solid red;
}

.carosal-area1 p,
.carosal-area1 table {
  border-collapse: collapse;
}

#___ytsubscribe_0 iframe,
iframe {
  height: 50px !important;
  max-width: 100% !important;
}
</style>