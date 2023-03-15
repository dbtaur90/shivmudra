import { Address } from "./Address";
import { DocumentData } from "./DocumentData";
import { EducationData } from "./EducationData";
import { EmployeeData } from "./EmployeeData";

export interface SabhasadDetails {
    sabhasadID?: number | null,
    reference?: string | null,
    lastName?: string | null,
    firstName?: string | null,
    middleName?: string | null,
    dob?: Date | null,
    gender?: string | null,
    bloodGroup?: string | null,
    married?: Date | null,
    whatsappNumber?: number | null,
    mobileNumber?: number | null,
    email?: string | null,
    aadhar?: number | null,
    permanentSubAddress?: string | null,
    permanentVillage?: number | null,
    isSameAddress?: boolean | null,
    currentSubAddress?: string | null,
    currentVillage?: number | null,
    competitiveCandidate?: boolean | null,
    competitiveExamName?: string | null,
    isPoliticalBackground?: boolean | null,
    politcalPartyName?: string | null,
    politcalPartyPost?: string | null,
    isSocialBackground?: boolean | null,
    socialFoundationName?: string | null,
    socialFoundationPost?: string | null,
    helpForOrg?: string | null,
    education_data: EducationData,
    employee_data: EmployeeData,
    document_data: DocumentData | null,
    current_address: Address | null,
    permanent_address: Address,
    created_at?: Date | null,
    updated_at?: Date | null,
    deleted_at?: Date | null
}