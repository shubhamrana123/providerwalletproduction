
import { IPhysician,IPhysicianInfo } from "./physician.type"

export interface IAuthContextProps
{
    children : any
}

export interface IUserContextProps
{
    
}

export type AuthContextType = {
    login: (data: IPhysicianInfo) => void,
    refreshToken: (data: IPhysician) => {},
}

export type UserContextType ={
    token: string,
    isLoggendIn?: boolean,
    userInfo : IPhysicianInfo
    logout: ()=> void,
    onRefresh : ()=> void,
    updateUserInfo : (userInfo : IPhysicianInfo)=> void
}
