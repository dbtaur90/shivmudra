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
      <form ref="tabParent" class="row g-1">
        <div ref="allSteps" class="all-steps" id="all-steps">
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
              <a
                href="https://merchant.razorpay.com/policy/KiPTgIiGcc17KN/privacy"
                target="_blank"
              >
                गोपनीयता आणि धोरण
              </a>
              तसेच
              <a
                href="https://merchant.razorpay.com/policy/KiPTgIiGcc17KN/terms"
                target="_blank"
              >
                अटी आणि शर्ती
              </a>
              मान्य असने आवश्यक आहे.
            </li>
          </ul>
        </div>
        <div class="tab">
          <form @submit="return false;">
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  required
                  type="text"
                  v-model="sabhasadDetail.reference"
                  class="form-control"
                  id="reference"
                  placeholder="reference"
                />
                <label for="reference"
                  >आपल्याला शिवमुद्रा मध्ये कोणी जोडले?</label
                >
              </div>
            </div>
            <div class="row g-1 mb-3">
              <label class="form-label" style="text-align: left"
                >आपले संपूर्ण नाव:
              </label>
              <div class="form-floating col">
                <input
                  required
                  type="text"
                  v-model="sabhasadDetail.firstName"
                  class="form-control"
                  id="firstName"
                  placeholder="Password"
                />
                <label for="firstName">तुमचे नाव</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  required
                  type="text"
                  v-model="sabhasadDetail.middleName"
                  class="form-control"
                  id="middleName"
                  placeholder="Password"
                />
                <label for="middleName">वडिलांचे/पतीचे नाव</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  required
                  type="text"
                  v-model="sabhasadDetail.lastName"
                  class="form-control"
                  id="lastName"
                  placeholder="Password"
                />
                <label for="lastName">आडनाव</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select
                  class="form-select"
                  v-model="sabhasadDetail.bloodGroup"
                  id="bloodGroup"
                  aria-label="Floating label select example"
                >
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
                  <input
                    required
                    class="form-check-input"
                    v-model="sabhasadDetail.gender"
                    type="radio"
                    @change="maleFemaleLabel = 'शकतो'"
                    id="inlineCheckboxgender1"
                    value="male"
                  />
                  <label class="form-check-label" for="inlineCheckboxgender1"
                    >पुरुष</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    v-model="sabhasadDetail.gender"
                    type="radio"
                    @change="maleFemaleLabel = 'शकते'"
                    id="inlineCheckboxgender1"
                    value="female"
                  />
                  <label class="form-check-label" for="inlineCheckboxgender1"
                    >महिला</label
                  >
                </div>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  required
                  type="date"
                  min="2005-01-01"
                  v-model="sabhasadDetail.dob"
                  class="form-control"
                  id="dob"
                />
                <label for="dob">जन्म तारीख</label>
              </div>
            </div>

            <div class="row g-1 mb-3 border-gray">
              <div class="col-4">
                <label>वैवाहिक स्थिती</label>
              </div>
              <div class="col-8">
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    v-model="sabhasadDetail.married"
                    type="radio"
                    id="inlineCheckbox1"
                    v-bind:value="true"
                  />
                  <label class="form-check-label" for="inlineCheckbox1"
                    >विवाहित</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    required
                    class="form-check-input"
                    v-model="sabhasadDetail.married"
                    type="radio"
                    id="inlineCheckbox2"
                    v-bind:value="false"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >अविवाहित</label
                  >
                </div>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  required
                  type="tel"
                  v-model="sabhasadDetail.whatsappNumber"
                  class="form-control"
                  id="wnumber"
                  placeholder="Password"
                />
                <label for="wnumber">व्हाट्सअँप नंबर</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  type="tel"
                  v-model="sabhasadDetail.mobileNumber"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
                <label for="inputPassword4" class="form-label"
                  >Alternative Mobile Number(असल्यास)</label
                >
              </div>
            </div>

            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  required
                  type="email"
                  v-model="sabhasadDetail.email"
                  class="form-control"
                  id="email"
                  placeholder="email"
                />
                <label for="email">ई-मेल</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <input
                  required
                  type="tel"
                  v-model="sabhasadDetail.aadhar"
                  class="form-control"
                  id="aadhar"
                  placeholder="Password"
                />
                <label for="aadhar" class="form-label">आधार नंबर</label>
              </div>
            </div>
          </form>
        </div>

        <div class="tab">
          <div class="permenant-address-area">
            <div class="row g-1 mb-3">
              <div class="form-floating">
                <textarea
                  :value="
                    sabhasadDetail.permanentSubAddress
                      ? sabhasadDetail.permanentSubAddress
                      : ''
                  "
                  @change="onInput($event, true)"
                  class="form-control"
                  id="permanentAddress"
                  style="height: 60px"
                ></textarea>
                <label for="permanentAddress">कायमचा पत्ता</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select
                  class="form-select"
                  v-model="sabhasadDetail.permanent_address.District"
                  @change="loadTalukas(true, $event.target)"
                  id="pdistrict"
                  aria-label="Floating label select example"
                >
                  <option value="">select</option>
                  <option
                    v-for="district in districts"
                    :key="district.District"
                    :value="district.District"
                  >
                    {{ district.DistrictMr }}
                  </option>
                </select>
                <label for="pdistrict">जिल्हा</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select
                  class="form-select"
                  v-model="sabhasadDetail.permanent_address.SubDistrict"
                  id="psubDistrict"
                  aria-label="Floating label select example"
                >
                  <option value="">select</option>
                  <option
                    v-for="taluka in permanentTalukasList"
                    :key="taluka.SubDistrict"
                    :value="taluka.SubDistrict"
                  >
                    {{ taluka.SubDistrictMr }}
                  </option>
                </select>
                <label for="psubDistrict">तालुका</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select
                  class="form-select"
                  v-model="sabhasadDetail.permanentVillage"
                  id="pvillage"
                  aria-label="Floating label select example"
                >
                  <option value="">select</option>
                  <option
                    v-for="village in permentVillageList"
                    :key="village.AddressDirectoryID"
                    :value="village.AddressDirectoryID"
                  >
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
              <input
                required
                class="form-check-input"
                type="radio"
                v-model="sabhasadDetail.isSameAddress"
                @change="currentAddressAvailablity()"
                id="isAddressSame1"
                v-bind:value="true"
              />
              <label class="form-check-label" for="isAddressSame1">
                वरील प्रमाणे
              </label>
            </div>
            <div class="form-check form-check-inline col">
              <input
                required
                class="form-check-input"
                type="radio"
                v-model="sabhasadDetail.isSameAddress"
                @change="currentAddressAvailablity()"
                id="isAddressSame2"
                v-bind:value="false"
              />
              <label class="form-check-label" for="isAddressSame2">
                वेगळा
              </label>
            </div>
          </div>

          <div v-if="sabhasadDetail.current_address">
            <div class="row g-1 mb-3">
              <div class="form-floating">
                <textarea
                  :value="
                    sabhasadDetail.currentSubAddress
                      ? sabhasadDetail.currentSubAddress
                      : ''
                  "
                  @change="onInput($event, false)"
                  class="form-control"
                  placeholder="सध्याचा पत्ता"
                  id="currentAddress"
                  style="height: 60px"
                ></textarea>
                <label for="currentAddress">सध्याचा पत्ता</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select
                  class="form-select"
                  v-model="sabhasadDetail.current_address.District"
                  id="cdistrict"
                  aria-label="Floating label select example"
                >
                  <option value="">select</option>
                  <option
                    v-for="district in districts"
                    :key="district.District"
                    :value="district.District"
                  >
                    {{ district.DistrictMr }}
                  </option>
                </select>
                <label for="cdistrict">जिल्हा</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select
                  class="form-select"
                  v-model="sabhasadDetail.current_address.SubDistrict"
                  id="csubDistrict"
                  aria-label="Floating label select example"
                >
                  <option value="">select</option>
                  <option
                    v-for="taluka in currentTalukasList"
                    :key="taluka.SubDistrict"
                    :value="taluka.SubDistrict"
                  >
                    {{ taluka.SubDistrictMr }}
                  </option>
                </select>
                <label for="csubDistrict">तालुका</label>
              </div>
            </div>
            <div class="row g-1 mb-3">
              <div class="form-floating col">
                <select
                  class="form-select"
                  name="cvillage"
                  v-model="sabhasadDetail.currentVillage"
                  aria-label="Floating label select example"
                >
                  <option value="">select</option>
                  <option
                    v-for="village in currentVillageList"
                    :key="village.AddressDirectoryID"
                    :value="village.AddressDirectoryID"
                  >
                    {{ village.VillageMr }}
                  </option>
                </select>
                <label for="cvillage">गाव</label>
              </div>
            </div>
          </div>
        </div>

        <div class="tab">
          <div class="row g-1 mb-3">
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.education_data.educationClass"
                @change="clearEducationData()"
                class="form-control"
                id="educationClass"
                placeholder="Password"
                list="education"
              />
              <label for="educationClass">शिक्षण</label>
            </div>
          </div>
          <div v-if="sabhasadDetail.education_data.educationClass">
            <div
              class="row g-1 mb-3"
              v-if="sabhasadDetail.education_data.educationClass == 'ITI'"
            >
              <div class="form-floating col">
                <input
                  required
                  type="text"
                  v-model="sabhasadDetail.education_data.educationITIBranch"
                  class="form-control"
                  id="educationITIBranch"
                  placeholder="Password"
                />
                <label for="educationITIBranch">ITI शाखा</label>
              </div>
            </div>

            <div v-if="sabhasadDetail.education_data.educationClass == 'PHD'">
              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <input
                    required
                    type="text"
                    v-model="sabhasadDetail.education_data.phdArea"
                    class="form-control"
                    id="phdArea"
                    placeholder="Password"
                  />
                  <label for="phdArea"
                    >PHD क्षेत्र (जसे कि कला, वाणिज्य, वैद्यकिय...)</label
                  >
                </div>
              </div>

              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <input
                    required
                    type="text"
                    v-model="sabhasadDetail.education_data.phdMainSubject"
                    class="form-control"
                    id="phdMainSubject"
                    placeholder="Password"
                  />
                  <label for="phdMainSubject">PHD मुख्य विषय</label>
                </div>
              </div>

              <div class="row g-1 mb-3">
                <div class="form-floating col">
                  <input
                    required
                    type="text"
                    v-model="sabhasadDetail.education_data.phdResearchDetail"
                    class="form-control"
                    id="phdResearchDetail"
                    placeholder="Password"
                  />
                  <label for="phdResearchDetail"
                    >संशोधनाविषयी थोडक्यात माहिती</label
                  >
                </div>
              </div>
            </div>

            <div
              v-if="
                ['Post Graduate', 'Graduate', 'Diploma'].includes(
                  sabhasadDetail.education_data.educationClass
                )
              "
            >
              <div class="row g-1 mb-3">
                <label>
                  {{ sabhasadDetail.education_data.educationClass }}
                  प्रकार</label
                >
              </div>
              <div class="row g-1 mb-3">
                <div class="form-check form-check-inline">
                  <input
                    required
                    type="radio"
                    @change="clearEducationDegreeType()"
                    v-model="sabhasadDetail.education_data.educationDegreeType"
                    class="form-check-input"
                    id="educationDegreeType1"
                    value="professional"
                  />
                  <label for="educationDegreeType1"
                    >व्यवसायिक(अभियांत्रिकी, वैद्यकिय, कृषी इत्यादी)</label
                  >
                </div>
              </div>
              <div class="row g-1 mb-3">
                <div class="form-check form-check-inline">
                  <input
                    required
                    type="radio"
                    @change="clearEducationDegreeType()"
                    :disabled="
                      sabhasadDetail.education_data.educationClass == 'Diploma'
                    "
                    v-model="sabhasadDetail.education_data.educationDegreeType"
                    class="form-check-input"
                    id="educationDegreeType2"
                    value="nonProfessional"
                  />
                  <label for="educationDegreeType2"
                    >अव्यवसायिक(कला, वाणिज्य, विज्ञान इत्यादी)</label
                  >
                </div>
              </div>

              <div
                v-if="
                  sabhasadDetail.education_data.educationDegreeType ==
                  'nonProfessional'
                "
              >
                <div class="row g-1 mb-3 border-gray">
                  <div class="col-12">
                    <div class="form-check form-check-inline">
                      <input
                        required
                        class="form-check-input"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        "
                        type="radio"
                        id="educationDegreeBranch1"
                        value="Art"
                      />
                      <label
                        for="educationDegreeBranch1"
                        class="form-check-label"
                        >कला</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        required
                        class="form-check-input"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        "
                        type="radio"
                        id="educationDegreeBranch2"
                        value="Commerce"
                      />
                      <label
                        class="form-check-label"
                        for="educationDegreeBranch2"
                        >वाणिज्य</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        required
                        class="form-check-input"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        "
                        type="radio"
                        id="educationDegreeBranch3"
                        value="Science"
                      />
                      <label
                        for="educationDegreeBranch3"
                        class="form-check-label"
                        >विज्ञान</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        required
                        class="form-check-input"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeBranch
                        "
                        type="radio"
                        id="educationDegreeBranch4"
                        value="Other"
                      />
                      <label
                        class="form-check-label"
                        for="educationDegreeBranch4"
                        >इतर</label
                      >
                    </div>
                    <div
                      class="form-floating"
                      v-if="
                        sabhasadDetail.education_data.educationDegreeBranch ==
                        'Other'
                      "
                    >
                      <input
                        required
                        type="text"
                        v-model="
                          sabhasadDetail.education_data
                            .educationDegreeBranchOther
                        "
                        class="form-control"
                        id="educationDegreeBranchOther"
                      />
                      <label
                        for="educationDegreeBranchOther"
                        class="form-check-label"
                        >इतर शाखेचे नाव(उदा. MCVC)</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div
                v-if="
                  sabhasadDetail.education_data.educationDegreeType ==
                  'professional'
                "
              >
                <div class="row g-1 mb-3 border-gray">
                  <div class="col-12">
                    <div class="form-check form-check-inline">
                      <input
                        required
                        type="radio"
                        @change="clearEducationEngBranch()"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeArea
                        "
                        class="form-check-input"
                        id="educationDegreeArea"
                        value="engineering"
                      />
                      <label for="educationDegreeArea" class="form-check-label"
                        >अभियांत्रिकी</label
                      >
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        required
                        type="radio"
                        @change="clearEducationEngBranch()"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeArea
                        "
                        class="form-check-input"
                        id="educationDegreeArea2"
                        value="medical"
                      />
                      <label for="educationDegreeArea2" class="form-check-label"
                        >वैद्यकिय</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        required
                        type="radio"
                        @change="clearEducationEngBranch()"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeArea
                        "
                        class="form-check-input"
                        id="educationDegreeArea3"
                        value="management"
                      />
                      <label for="educationDegreeArea3" class="form-check-label"
                        >व्यवस्थापण</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        required
                        type="radio"
                        @change="clearEducationEngBranch()"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeArea
                        "
                        class="form-check-input"
                        id="educationDegreeArea4"
                        value="agri"
                      />
                      <label for="educationDegreeArea4" class="form-check-label"
                        >कृषी</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        required
                        type="radio"
                        @change="clearEducationEngBranch()"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeArea
                        "
                        class="form-check-input"
                        id="educationDegreeArea5"
                        value="low"
                      />
                      <label for="educationDegreeArea5" class="form-check-label"
                        >कायदेविषयक</label
                      >
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        required
                        type="radio"
                        @change="clearEducationEngBranch()"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeArea
                        "
                        class="form-check-input"
                        id="educationDegreeArea6"
                        value="Other"
                      />
                      <label for="educationDegreeArea6" class="form-check-label"
                        >इतर</label
                      >
                    </div>

                    <div
                      class="form-floating"
                      v-if="
                        sabhasadDetail.education_data.educationDegreeArea ==
                        'Other'
                      "
                    >
                      <input
                        required
                        type="text"
                        v-model="
                          sabhasadDetail.education_data.educationDegreeAreaOther
                        "
                        class="form-control"
                        id="educationDegreeAreaOther"
                      />
                      <label for="educationDegreeAreaOther">इतर कोणते</label>
                    </div>
                    <div
                      class="form-floating"
                      v-if="
                        sabhasadDetail.education_data.educationDegreeArea ==
                        'engineering'
                      "
                    >
                      <input
                        required
                        type="text"
                        v-model="
                          sabhasadDetail.education_data
                            .educationBranchEngineering
                        "
                        class="form-control"
                        id="educationBranchEngineering"
                      />
                      <label for="educationBranchEngineering"
                        >अभियांत्रिकी शाखा?(उदा. विद्युत, स्थापत्य, संगणक,
                        इत्यादी)</label
                      >
                    </div>
                    <div class="form-floating" v-else>
                      <input
                        required
                        type="text"
                        v-model="
                          sabhasadDetail.education_data
                            .educationDegreeNonEngineering
                        "
                        class="form-control"
                        id="educationDegreeNonEngineering"
                      />
                      <label for="educationDegreeNonEngineering"
                        >Degree?(उदा. B.H.M.S., M.B.A., इत्यादी)</label
                      >
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
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.education_data.isEducationCompleted"
                  type="radio"
                  id="isEducationCompleted"
                  v-bind:value="true"
                />
                <label class="form-check-label" for="isEducationCompleted"
                  >पुर्ण झाले.</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.education_data.isEducationCompleted"
                  type="radio"
                  id="isEducationCompleted1"
                  v-bind:value="false"
                />
                <label class="form-check-label" for="isEducationCompleted1"
                  >चालू आहे.</label
                >
              </div>
            </div>
          </div>

          <div class="row g-1 mb-3 border-gray">
            <div class="col-12">
              <label>तुम्ही स्पर्धा परिक्षाची तयारी करत आहात का?</label>
            </div>
            <div class="col-12">
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.competitiveCandidate"
                  type="radio"
                  id="competitiveCandidate"
                  v-bind:value="true"
                />
                <label class="form-check-label" for="competitiveCandidate"
                  >होय</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  @change="sabhasadDetail.competitiveExamName = null"
                  v-model="sabhasadDetail.competitiveCandidate"
                  type="radio"
                  id="competitiveCandidate1"
                  v-bind:value="false"
                />
                <label class="form-check-label" for="competitiveCandidate1"
                  >नाही.</label
                >
              </div>
              <div
                class="form-floating"
                v-if="sabhasadDetail.competitiveCandidate"
              >
                <input
                  required
                  type="text"
                  v-model="sabhasadDetail.competitiveExamName"
                  class="form-control"
                  id="competitiveExamName"
                />
                <label for="competitiveExamName" class="form-check-label"
                  >स्पर्धा परिक्षेचे नाव?(उदा. UPSC, MPSC, पोलिस भरती,
                  इत्यादी)</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="tab">
          <div class="row g-1 mb-3 border-gray">
            <div class="col-12">
              <label>व्यवसाय:</label>
            </div>
            <div class="col-12">
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.employee_data.employmentType"
                  @change="clearEmployeeBusiness()"
                  type="checkbox"
                  id="employmentType"
                  value="Self Business"
                />
                <label class="form-check-label" for="employmentType"
                  >स्वतः चा व्यवसाय</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.employee_data.employmentType"
                  @change="sabhasadDetail.employee_data.traderArea = null"
                  type="checkbox"
                  id="employmentType1"
                  value="Trader"
                />
                <label class="form-check-label" for="employmentType1"
                  >व्यापारी</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.employee_data.employmentType"
                  @change="clearEmployeeEmployee()"
                  type="checkbox"
                  id="employmentType2"
                  value="Employee"
                />
                <label class="form-check-label" for="employmentType2"
                  >नौकरी</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.employee_data.employmentType"
                  @change="clearEmployeeAgri()"
                  type="checkbox"
                  id="employmentType3"
                  value="Agriculture"
                />
                <label class="form-check-label" for="employmentType3"
                  >शेती</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.employee_data.employmentType"
                  type="checkbox"
                  id="employmentType4"
                  value="UnEmployment"
                />
                <label class="form-check-label" for="employmentType4"
                  >काहिही नाही</label
                >
              </div>
            </div>
          </div>
          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employmentType.includes(
                'Self Business'
              )
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.businessArea"
                @change="clearEmployeeBusinessArea()"
                class="form-control"
                id="businessArea"
                placeholder="email"
                list="businessList"
              />
              <label for="businessArea">व्यवसायिक क्षेत्र?</label>
            </div>
          </div>
          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.businessArea == 'वैद्यकीय'"
          >
            <div class="form-floating col">
              <select
                class="form-select"
                v-model="sabhasadDetail.employee_data.businessmedicalSubArea"
                @change="
                  sabhasadDetail.employee_data.businessDoctorSpecilization =
                    null
                "
                id="businessmedicalSubArea"
                aria-label="Floating label select example"
              >
                <option value="">select</option>
                <option value="Hospital">दवाखाना</option>
                <option value="Medical">मेडिकल</option>
                <option value="Lab">लॅब</option>
                <option value="Other">इतर</option>
              </select>
              <label for="businessmedicalSubArea">वैद्यकीय उपक्षेत्र</label>
            </div>
          </div>
          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.businessmedicalSubArea == 'Hospital'
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="
                  sabhasadDetail.employee_data.businessDoctorSpecilization
                "
                class="form-control"
                id="businessDoctorSpecilization"
                placeholder="email"
              />
              <label for="businessDoctorSpecilization"
                >आपण कोणत्या क्षेत्रात विशेषज्ञ आहात?(जसे बालरोग तज्ञ, ENT,
                प्राणीरोग तज्ञ)</label
              >
            </div>
          </div>
          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.businessArea == 'अभियांत्रिकी'"
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.businessEngineeringBranch"
                class="form-control"
                id="businessEngineeringBranch"
                placeholder="email"
              />
              <label for="businessEngineeringBranch"
                >अभियांत्रिकी शाखा?(उदा. स्थापत्य, संगणक, विद्युत,
                इत्यादी)</label
              >
            </div>
          </div>
          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.businessArea == 'शैक्षणिक क्षेत्र'
            "
          >
            <div class="form-floating col">
              <select
                class="form-select"
                v-model="sabhasadDetail.employee_data.businessEducationPost"
                @change="clearEmployeeBusinessTeacher()"
                id="businessEducationPost"
                aria-label="Floating label select example"
              >
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
          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.businessEducationPost == 'teacher'
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="
                  sabhasadDetail.employee_data.businessEducationTeacherArea
                "
                class="form-control"
                list="education"
                id="businessEducationTeacherArea"
                placeholder="reference"
              />
              <label for="businessEducationTeacherArea"
                >आपण कोणत्या क्षेत्रात शिकवतात?</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.businessEducationPost == 'teacher'
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="
                  sabhasadDetail.employee_data
                    .businessEducationTeacherMainSubject
                "
                class="form-control"
                id="businessEducationTeacherMainSubject"
                placeholder="reference"
              />
              <label for="businessEducationTeacherMainSubject"
                >आपल्या शिकवणीतील मुख्य विषय?</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.businessArea == 'इतर शॉप'"
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.otherShopName"
                class="form-control"
                id="otherShopName"
                placeholder="reference"
              />
              <label for="otherShopName">शॉपीचे नाव?</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.businessArea == 'इतर शॉप'"
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.otherShopType"
                class="form-control"
                id="otherShopType"
                placeholder="reference"
              />
              <label for="otherShopType"
                >कशाची शॉप आहे? (उदा, हार्डवेअर, कपडा दुकान इत्यादी)</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.businessArea == 'इतर व्यवसाय'"
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.otherBusinessName"
                class="form-control"
                id="otherBusinessName"
                placeholder="reference"
              />
              <label for="otherBusinessName">कोणता व्यवसाय आहे?</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.businessArea == 'इतर सेवा'"
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.otherServiceName"
                class="form-control"
                id="otherServiceName"
                placeholder="reference"
              />
              <label for="otherServiceName">कोणता व्यवसाय आहे?</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employmentType.includes(
                'Self Business'
              )
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.businessPlace"
                class="form-control"
                id="businessPlace"
                placeholder="reference"
              />
              <label for="businessPlace">व्यवसायाचे ठिकाण?</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employmentType.includes('Employee')
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                list="employementList"
                v-model="sabhasadDetail.employee_data.employementArea"
                @change="clearEmployeeEmployeeArea()"
                class="form-control"
                id="employementArea"
                placeholder="reference"
              />
              <label for="employementArea">नौकरीचे क्षेत्र?</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.employementArea == 'वैद्यकीय'"
          >
            <div class="form-floating col">
              <select
                class="form-select"
                v-model="sabhasadDetail.employee_data.employeeMedicalSubArea"
                @change="clearEmployeeEmployeeDoctor()"
                id="employeeMedicalSubArea"
                aria-label="Floating label select example"
              >
                <option value="">select</option>
                <option value="Hospital">दवाखाना</option>
                <option value="Medical">मेडिकल</option>
                <option value="Lab">लॅब</option>
                <option value="Other">इतर</option>
              </select>
              <label for="employeeMedicalSubArea">उपक्षेत्र?</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employeeMedicalSubArea == 'Hospital'
            "
          >
            <div class="form-floating col">
              <select
                class="form-select"
                v-model="
                  sabhasadDetail.employee_data.employeeMedicalHospitalPost
                "
                @change="
                  sabhasadDetail.employee_data.employeeDoctorSpecilization =
                    null
                "
                id="employeeMedicalHospitalPost"
                aria-label="Floating label select example"
              >
                <option value="">select</option>
                <option value="Doctor">डॉक्टर</option>
                <option value="Warder">परिचारक/परीचारिका</option>
                <option value="Other">इतर</option>
              </select>
              <label for="employeeMedicalHospitalPost">पद?</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employeeMedicalHospitalPost ==
              'Doctor'
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="
                  sabhasadDetail.employee_data.employeeDoctorSpecilization
                "
                class="form-control"
                id="employeeDoctorSpecilization"
                placeholder="reference"
              />
              <label for="employeeDoctorSpecilization"
                >आपण कोणत्या क्षेत्रात तज्ञ आहात?(जसे बालरोग तज्ञ, ENT,
                प्राणीरोग तज्ञ)</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employementArea == 'अभियांत्रिकी'
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.employeeEngineeringBranch"
                class="form-control"
                id="employeeEngineeringBranch"
                placeholder="reference"
              />
              <label for="employeeEngineeringBranch"
                >अभियांत्रिकी शाखा?(उदा. स्थापत्य, संगणक, विद्युत,
                इत्यादी)</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employementArea == 'शैक्षणिक क्षेत्र'
            "
          >
            <div class="form-floating col">
              <select
                class="form-select"
                v-model="sabhasadDetail.employee_data.employeeEducationPost"
                id="employeeEducationPost"
                aria-label="Floating label select example"
              >
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

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employeeEducationPost == 'teacher'
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                list="education"
                v-model="
                  sabhasadDetail.employee_data.employeeEducationTeacherArea
                "
                class="form-control"
                id="employeeEducationTeacherArea"
                placeholder="reference"
              />
              <label for="employeeEducationTeacherArea"
                >आपण कोणत्या क्षेत्रात शिकवतात?</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employeeEducationPost == 'teacher'
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="
                  sabhasadDetail.employee_data
                    .employeeEducationTeacherMainSubject
                "
                class="form-control"
                id="employeeEducationTeacherMainSubject"
                placeholder="reference"
              />
              <label for="employeeEducationTeacherMainSubject"
                >आपल्या शिकवणीतील मुख्य विषय?</label
              >
            </div>
          </div>

          <div v-if="sabhasadDetail.employee_data.employementArea">
            <div
              class="row g-1 mb-3"
              v-if="
                [
                  'कायदेविषयक',
                  'प्रशासकीय अधिकारी',
                  'लोकप्रतिनिधी',
                  'पोलिस',
                  'बँक',
                  'चित्रपट',
                  'संगणकीय सेवा',
                  'ग्राफिक्स डिझाईन',
                  'कृषी',
                  'हॉटेल',
                  'मांस',
                ].includes(sabhasadDetail.employee_data.employementArea)
              "
            >
              <div class="form-floating col">
                <input
                  required
                  type="text"
                  v-model="sabhasadDetail.employee_data.employeePost"
                  class="form-control"
                  id="employeePost"
                  placeholder="reference"
                />
                <label for="employeePost">पद आणि कार्यक्षेत्र?</label>
              </div>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.employementArea == 'इतर'"
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.employeeOtherPost"
                class="form-control"
                id="employeeOtherPost"
                placeholder="reference"
              />
              <label for="employeeOtherPost">इतर कोणती नौकरी??</label>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employmentType.includes('Trader')
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.traderArea"
                class="form-control"
                id="traderArea"
                placeholder="reference"
              />
              <label for="traderArea"
                >व्यापार क्षेत्र?(उदा शेतीचा माल, औद्योगिक)</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="
              sabhasadDetail.employee_data.employmentType.includes(
                'Agriculture'
              )
            "
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.employee_data.agricultureMainCrops"
                class="form-control"
                id="agricultureMainCrops"
                placeholder="reference"
              />
              <label for="agricultureMainCrops"
                >आपण शेतात कोणती मुख्य पिके पिके घेतात?</label
              >
            </div>
          </div>

          <div
            class="row g-1 mb-3 border-gray"
            v-if="
              sabhasadDetail.employee_data.employmentType.includes(
                'Agriculture'
              )
            "
          >
            <div class="col-4">
              <label>आपण शेती पुरक जोडव्यवसाय करत आहात का?</label>
            </div>
            <div class="col-8">
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="
                    sabhasadDetail.employee_data.isAgricultureCumBusiness
                  "
                  type="radio"
                  id="isAgricultureCumBusiness"
                  v-bind:value="true"
                />
                <label class="form-check-label" for="isAgricultureCumBusiness"
                  >हो</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.married"
                  type="radio"
                  @change="
                    sabhasadDetail.employee_data.agricultureCumBusinessName ==
                      null
                  "
                  id="isAgricultureCumBusiness1"
                  v-bind:value="false"
                />
                <label class="form-check-label" for="isAgricultureCumBusiness1"
                  >नाही</label
                >
              </div>
            </div>
          </div>

          <div
            class="row g-1 mb-3"
            v-if="sabhasadDetail.employee_data.isAgricultureCumBusiness"
          >
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="
                  sabhasadDetail.employee_data.agricultureCumBusinessName
                "
                class="form-control"
                id="agricultureCumBusinessName"
                placeholder="reference"
              />
              <label for="agricultureCumBusinessName"
                >व्यापार क्षेत्र?(उदा शेतीचा माल, औद्योगिक)</label
              >
            </div>
          </div>
        </div>

        <div class="tab">
          <div class="row g-1 mb-3 border-gray">
            <div class="col-xs-12 col-md-6">
              <label>आपण कोणत्या राजकीय पक्षात काम करता का?</label>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.isPoliticalBackground"
                  type="radio"
                  id="isPoliticalBackground"
                  v-bind:value="true"
                />
                <label class="form-check-label" for="isPoliticalBackground"
                  >हो</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.isPoliticalBackground"
                  type="radio"
                  @change="clearPolyticalPartyDetail()"
                  id="isPoliticalBackground1"
                  v-bind:value="false"
                />
                <label class="form-check-label" for="isPoliticalBackground1"
                  >नाही</label
                >
              </div>
            </div>
          </div>

          <div class="row g-1 mb-3" v-if="sabhasadDetail.isPoliticalBackground">
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.politcalPartyName"
                class="form-control"
                id="politcalPartyName"
                placeholder="reference"
              />
              <label for="politcalPartyName">कोणत्या पक्षात कार्य करता?</label>
            </div>
          </div>

          <div class="row g-1 mb-3" v-if="sabhasadDetail.isPoliticalBackground">
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.politcalPartyPost"
                class="form-control"
                id="politcalPartyPost"
                placeholder="reference"
              />
              <label for="politcalPartyPost">पद आणि कार्यक्षेत्र?</label>
            </div>
          </div>

          <div class="row g-1 mb-3 border-gray">
            <div class="col-xs-12 col-md-6">
              <label>शिवमुद्रा सोडुन इतर कोणत्या संघटनेत कार्य करता का?</label>
            </div>
            <div class="col-xs-12 col-md-6">
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.isSocialBackground"
                  type="radio"
                  id="isSocialBackground"
                  v-bind:value="true"
                />
                <label class="form-check-label" for="isSocialBackground"
                  >हो</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.isSocialBackground"
                  type="radio"
                  @change="clearSocialFoundationDetail()"
                  id="isSocialBackground1"
                  v-bind:value="false"
                />
                <label class="form-check-label" for="isSocialBackground1"
                  >नाही</label
                >
              </div>
            </div>
          </div>

          <div class="row g-1 mb-3" v-if="sabhasadDetail.isSocialBackground">
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.socialFoundationName"
                class="form-control"
                id="socialFoundationName"
                placeholder="reference"
              />
              <label for="socialFoundationName"
                >कोणत्या संघटनेत कार्य करता?</label
              >
            </div>
          </div>

          <div class="row g-1 mb-3" v-if="sabhasadDetail.isSocialBackground">
            <div class="form-floating col">
              <input
                required
                type="text"
                v-model="sabhasadDetail.socialFoundationPost"
                class="form-control"
                id="socialFoundationPost"
                placeholder="reference"
              />
              <label for="socialFoundationPost">पद आणि कार्यक्षेत्र?</label>
            </div>
          </div>

          <div class="row g-1 mb-3 border-gray">
            <div class="col-12">
              <label
                >तुम्ही खालीलपैकी कोणत्या क्षेत्रात मराठा शिवमुद्रा प्रतिष्ठानला
                मदत करू शकता?</label
              >
            </div>
            <div class="col-12" style="text-align: left">
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.helpForOrg"
                  type="checkbox"
                  id="helpForOrg"
                  value="Editor"
                />
                <label class="form-check-label" for="helpForOrg"
                  >मि एडिटींग करू {{ maleFemaleLabel }}.</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.helpForOrg"
                  type="checkbox"
                  id="helpForOrg1"
                  value="Speaker"
                />
                <label class="form-check-label" for="helpForOrg1"
                  >मि वक्ता/किर्तनकार आहे. मि शिवमुद्रामार्फत भाषण/किर्तन करू
                  {{ maleFemaleLabel }}.</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.helpForOrg"
                  type="checkbox"
                  id="helpForOrg2"
                  value="Writer"
                />
                <label class="form-check-label" for="helpForOrg2"
                  >मला छान लेख लिहिता येतात. ते मि शिवमुद्रासाठी लिहू
                  {{ maleFemaleLabel }}.</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.helpForOrg"
                  type="checkbox"
                  id="helpForOrg3"
                  value="Campaigner"
                />
                <label class="form-check-label" for="helpForOrg3"
                  >मी मोहिमेला तसेच कार्यक्रमाला येऊ
                  {{ maleFemaleLabel }}.</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.helpForOrg"
                  type="checkbox"
                  id="helpForOrg4"
                  value="Movementer"
                />
                <label class="form-check-label" for="helpForOrg4"
                  >मि शिवमुद्रामार्फत माझ्या क्षेत्रात आंदोलनात सहभागी होऊ
                  {{ maleFemaleLabel }}.</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.helpForOrg"
                  type="checkbox"
                  id="helpForOrg5"
                  value="VoiceMagician"
                />
                <label class="form-check-label" for="helpForOrg5"
                  >माझा आवाज चांगला आहे. मि दिनविशेष किंवा इतर व्हिडीओला आवाज
                  देऊ {{ maleFemaleLabel }}.</label
                >
              </div>
              <div class="form-check form-check-inline">
                <input
                  required
                  class="form-check-input"
                  v-model="sabhasadDetail.helpForOrg"
                  type="checkbox"
                  id="helpForOrg6"
                  value="FinancialSupporter"
                />
                <label class="form-check-label" for="helpForOrg6"
                  >मि शिवमुद्राला आर्थिक मदत करू {{ maleFemaleLabel }}.</label
                >
              </div>
            </div>
          </div>
        </div>

        <div class="thanks-message text-center" id="text-message">
          <img src="https://i.imgur.com/O18mJ1K.png" width="100" class="mb-4" />
          <h3>Thanks for your Donation!</h3>
          <span
            >Your donation has been entered! We will contact you shortly!</span
          >
        </div>
        <div
          style="overflow: auto"
          :class="{ 'd-none': hidePreNextDiv }"
          id="nextprevious"
        >
          <div style="float: right">
            <button
              type="button"
              class="wizard-button"
              id="prevBtn"
              :class="{ 'd-none': hidePreviousButton }"
              @click="nextPrev(-1)"
              :v-html="previousButtonText"
            >
              {{ previousButtonText }}
            </button>
            <button
              class="wizard-button"
              :class="{ 'd-none': hideNextButton }"
              type="button"
              id="nextBtn"
              @click="nextPrev(1)"
              :v-html="nextButtonText"
            >
              {{ nextButtonText }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import { SabhasadDetails } from "@/interfaces/SabhasadDetails";
import { SabhasadService } from "@/services/SabhasadService";
import { Ref } from "vue-property-decorator";
import { Vue } from "vue-class-component";
import { AddressService } from "@/services/AddressSerivice";
import { Districts } from "@/interfaces/Districts";
import { SubDistrict } from "@/interfaces/SubDistrict";
import { Village } from "@/interfaces/Village";

export default class RegisterSabhasad extends Vue {
  @Ref("allSteps") readonly myTitle!: HTMLElement | null;
  @Ref("tabParent") readonly tabParent!: HTMLElement | null;
  hidePreviousButton = false;
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
  sabhasadDetail: SabhasadDetails = {
    current_address: {},
    document_data: {},
    education_data: {},
    employee_data: {
      employmentType: [],
    },
    permanent_address: {},
  };

  async mounted(): Promise<void> {
    this.loadDistricts();
    this.showTab(this.currentTab);
  }

  async loadSabhasadDetails() {
    //this.$refs
    const service = new SabhasadService();
    this.sabhasadDetail = await service.getUsers();
    let permanentDistrict = this.sabhasadDetail.permanent_address.District;
    let currentDistrict = this.sabhasadDetail.current_address?.District;
    if (permanentDistrict) this.loadTalukas(true, permanentDistrict);
    if (currentDistrict) this.loadTalukas(false, currentDistrict);
    let permanentTaluka = this.sabhasadDetail.permanent_address.SubDistrict;
    let currentTaluka = this.sabhasadDetail.current_address?.SubDistrict;
    if (permanentTaluka) this.loadVillages(true, permanentTaluka);
    if (currentTaluka) this.loadVillages(false, currentTaluka);
  }

  alertMessage(msg: string) {
    alert(msg);
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

  handelFocus() {
    alert("handelFocus");
    console.log(this.tabParent);
    console.log(this.myTitle);
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
      this.hidePreviousButton = n == 0;
      switch (n) {
        case 0:
          this.nextButtonText = "मला मान्य आहे";
          break;
        case x.length - 1:
          this.nextButtonText = "Submit";
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

  nextPrev(n: number) {
    if (this.tabParent) {
      // eslint-disable-next-line no-undef
      var x = this.tabParent.getElementsByClassName(
        "tab"
        // eslint-disable-next-line no-undef
      ) as HTMLCollectionOf<HTMLElement>;
      /* if (n == 1 && !validateForm()) return false; */
      x[this.currentTab].style.display = "none";
      this.currentTab = this.currentTab + n;
      if (this.currentTab == x.length) {
        // document.getElementById("regForm").submit();
        // return false;
        //alert("sdf");
        //this.hidePreNextDiv = true;
        //this.myTitle?.classList.add('d-none');
      }
      this.showTab(this.currentTab);
    }
  }

  onInput(event: Event, isPermanrnt: boolean) {
    const target = event.target as HTMLInputElement;
    if (isPermanrnt)
      this.sabhasadDetail.permanentSubAddress =
        target.value === "" ? null : target.value;
    else
      this.sabhasadDetail.permanentSubAddress =
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
</style>