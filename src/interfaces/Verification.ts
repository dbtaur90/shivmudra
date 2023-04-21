export interface Verification {
    id?: number;
    sabhasadID?: number;
    sabhasadNumber?: string;
    basicVerification?: boolean;
    basicVerificationRemark?: string;
    documentVerification?: boolean;
    documentVerificationRemark?: string;
    photoSignVerification?: boolean;
    photoSignVerificationRemark?: string;
    status?: number;
    verifiedBy?: number;
    created_at?: Date;
    updated_at?: Date
}