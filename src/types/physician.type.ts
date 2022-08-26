

export interface IPhysician {
    userId? : number,
    physicianName?: string,
    email?: string,
    password: string,
    showPassword?: boolean
    confirmPassword? : string
}

export interface IPhysicianInfo
{
    physicianId : number,
    physicianEmail : string,
    physicianName : string,
    physicianDid : string
}