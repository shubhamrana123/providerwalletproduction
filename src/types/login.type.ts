import { IPhysician } from "./physician.type";

export interface ILoginProps
{
    onLoginHandler : (physicianInfo:IPhysician)=>void
    errors : any
    register : any
    getValues : any
    handleSubmit : any
}