export interface DocumentData {
    id?: number,
    sabhasadID?: number | null,
    aadharImage?: string | null,
    tcImage?: string | null,
    photoImage?: string | null,
    signImage?: string | null,
    created_at?: Date | null,
    updated_at?: Date | null;
    [key: string]: unknown;
}