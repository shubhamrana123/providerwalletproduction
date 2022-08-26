import { IPhysician } from "./physician.type";


export interface IResetPasswordInfo
{
    username : String
    password : string
}

export interface IResetDetails
{
    password : string
    confirmPassword : string
}


export interface IResetPasswordProps
{
    onResetPassword : (userData : IResetDetails)=>Promise<void>
    errors? : any
    register? : any
    getValues? : any
    handleSubmit? : any
    setError? : any
    control? : any
}
