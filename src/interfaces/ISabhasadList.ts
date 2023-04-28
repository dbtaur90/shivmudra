import { Verification } from "./Verification";

export interface ISabhasadList{
    sabhasadID?: number,
    name?: string,
    isDocumentUploaded?: boolean,
    verification?: Verification
}