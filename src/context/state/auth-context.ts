import React from "react";
import { IPhysicianInfo,IPhysician } from "../../types/physician.type";
import { AuthContextType } from "../../types/context.type";

export const authContext = React.createContext<AuthContextType>({
    login: (data: IPhysicianInfo) => {},
    refreshToken: (data: IPhysician) => {
        return {}
    },
});