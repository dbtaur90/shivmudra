import { SabhasadDetails } from "@/interfaces/SabhasadDetails";

export class ClearFormValues {

    clearEducationData = (sabhasadDetail: SabhasadDetails) => {
        const id = sabhasadDetail.education_data.id;
        const createdAt = sabhasadDetail.education_data.created_at;
        const classData = sabhasadDetail.education_data.educationClass;
        const isEducationCompleted =
            sabhasadDetail.education_data.isEducationCompleted;
        sabhasadDetail.education_data = {
            id: id,
            educationClass: classData,
            isEducationCompleted: isEducationCompleted,
            created_at: createdAt,
        };
    }

    clearEducationDegreeType = (sabhasadDetail: SabhasadDetails) => {
        const id = sabhasadDetail.education_data.id;
        const createdAt = sabhasadDetail.education_data.created_at;
        const classData = sabhasadDetail.education_data.educationClass;
        const isEducationCompleted = sabhasadDetail.education_data.isEducationCompleted;
        const educationDegreeType =
            sabhasadDetail.education_data.educationDegreeType;
        sabhasadDetail.education_data = {
            id: id,
            educationClass: classData,
            isEducationCompleted: isEducationCompleted,
            educationDegreeType: educationDegreeType,
            created_at: createdAt,
        };
    }

    clearEducationEngBranch = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.education_data.educationDegreeAreaOther = null;
        sabhasadDetail.education_data.educationBranchEngineering = null;
        sabhasadDetail.education_data.educationDegreeNonEngineering = null;
    }

    clearEmployeeBusiness = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.employee_data.businessArea = null;
        this.clearEmployeeBusinessArea(sabhasadDetail);
    }

    clearEmployeeBusinessArea = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.employee_data.businessDoctorSpecilization = null;
        sabhasadDetail.employee_data.businessEducationPost = null;
        sabhasadDetail.employee_data.businessEngineeringBranch = null;
        sabhasadDetail.employee_data.businessPlace = null;
        sabhasadDetail.employee_data.businessmedicalSubArea = null;
        this.clearEmployeeBusinessTeacher(sabhasadDetail);
    }

    clearEmployeeBusinessTeacher = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.employee_data.businessEducationTeacherArea = null;
        sabhasadDetail.employee_data.businessEducationTeacherMainSubject = null;
    }

    clearEmployeeEmployee = (sabhasadDetail: SabhasadDetails) => {
        this.clearEmployeeEmployeeArea(sabhasadDetail);
        sabhasadDetail.employee_data.employementArea = null;
    }

    clearEmployeeEmployeeArea = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.employee_data.employeeEducationPost = null;
        sabhasadDetail.employee_data.employeeEngineeringBranch = null;
        sabhasadDetail.employee_data.employeeMedicalSubArea = null;
        sabhasadDetail.employee_data.employeePost = null;
        this.clearEmployeeEmployeeDoctor(sabhasadDetail);
        this.clearEmployeeEmployeeTeacher(sabhasadDetail);
    }

    clearEmployeeEmployeeDoctor = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.employee_data.employeeDoctorSpecilization = null;
        sabhasadDetail.employee_data.employeeMedicalHospitalPost = null;
    }

    clearEmployeeEmployeeTeacher = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.employee_data.employeeEducationTeacherArea = null;
        sabhasadDetail.employee_data.employeeEducationTeacherMainSubject =
            null;
    }

    clearEmployeeAgri = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.employee_data.agricultureCumBusinessName = null;
        sabhasadDetail.employee_data.agricultureMainCrops = null;
        sabhasadDetail.employee_data.isAgricultureCumBusiness = null;
    }

    clearSocialFoundationDetail = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.socialFoundationName = null;
        sabhasadDetail.socialFoundationPost = null;
    }
    clearPolyticalPartyDetail = (sabhasadDetail: SabhasadDetails) => {
        sabhasadDetail.politcalPartyName = null;
        sabhasadDetail.politcalPartyPost = null;
    }
}