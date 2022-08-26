import React from "react";
import { IPhysicianInfo,IPhysician } from "../../types/physician.type";
import { UserContextType } from "../../types/context.type";

export const userContext = React.createContext<UserContextType>({
    token: '',
    isLoggendIn: false,
    userInfo : {
        physicianEmail : '',
        physicianDid : "",
        physicianId : 0,
        physicianName : ''
    },
    logout: ()=> {},
    onRefresh : ()=> {},
    updateUserInfo : (userInfo : IPhysicianInfo)=> {}

});