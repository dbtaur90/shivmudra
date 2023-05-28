import { Verification } from "./Verification";

export interface ISabhasadList {
    sabhasadID?: number,
    name?: string,
    whatsappNumber?: string
    isDocumentUploaded?: boolean,
    verification?: Verification,
    title?: string,
    exStatus?: number
}