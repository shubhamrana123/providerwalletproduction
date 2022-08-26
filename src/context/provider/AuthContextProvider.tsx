import { useContext,useState } from "react";
import { IAuthContextProps,AuthContextType  } from "../../types/context.type";
import { IPhysicianInfo,IPhysician } from "../../types/physician.type";
import {useNavigate} from 'react-router-dom';
import { authContext } from "../state/auth-context";
import { userContext } from "../state/user-context";

export const AuthContextProvdier = (props : IAuthContextProps )=>
{
    const navigate = useNavigate();
    const userCtx = useContext(userContext);
    const [token,setToken] = useState<string>('');  
    const [userInfo,setUserInfo] = useState<IPhysician>({
        email : '',
        password : ''
    }); 
    const isLoggendIn = !!token;
    
    const loginHandler = (userData : IPhysicianInfo)=>
    {
        localStorage.setItem("isLoggedIn",true.toString());
        if(localStorage.getItem("isFirstLogin") == null)
        {
            localStorage.setItem("isFirstLogin",true.toString());
        }
        userCtx.updateUserInfo(userData);
        navigate('app/dashboard');
       
    }
    const refreshTokenhandler = ()=>
    {
        return {}
    }
    const contextValue : AuthContextType = {
        login : loginHandler,
        refreshToken : refreshTokenhandler
    }
    return <authContext.Provider value={contextValue}>{props.children}</authContext.Provider>
}