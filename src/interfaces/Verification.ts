export interface Verification {
    id?: number;
    sabhasadID?: number;
    sabhasadNumber?: string;
    basicVerification?: boolean;
    basicVerificationRemark?: string;
    documentVerification?: boolean;
    documentVerificationRemark?: string;
    status?: number;
    verifiedBy?: number;
    created_at?: Date;
    updated_at?: Date
}