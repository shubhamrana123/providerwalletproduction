import { useContext, useState } from "react";
import { AuthContextType, UserContextType } from "../../types/context.type";
import { IPhysician, IPhysicianInfo } from "../../types/physician.type";
import { useNavigate } from 'react-router-dom';
import { userContext } from "../state/user-context";


export const UserContextProvdier = (props: any) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string>('');

    const [userInfo, setUserInfo] = useState<IPhysicianInfo>({
        physicianDid: '',
        physicianEmail: '',
        physicianId: 0,
        physicianName: ''
    });
    const isLoggendIn = !!token;

    const logoutHandler = () => {
        setToken("");

        localStorage.setItem("isLoggedIn", false.toString());
        localStorage.removeItem("userInfo");
        localStorage.removeItem("accessToken");
        setUserInfo({
            physicianDid: '',
            physicianEmail: '',
            physicianId: 0,
            physicianName: ''
        })
        navigate("../");
    }
    
    const refreshTokenhandler = () => {
        return {}
    }

    const updateUserInfoHandler = (userInfo: IPhysicianInfo) => {
        localStorage.removeItem("userInfo");
        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        setUserInfo(userInfo);
    }

    const onRefreshHandler = () => {
        if (userInfo == null) {
            const user = JSON.parse(localStorage.getItem('userInfo') || '{}');
            setUserInfo(user);
        }
    }
    const contextValue: UserContextType = {
        token: token,
        isLoggendIn: isLoggendIn,
        logout: logoutHandler,
        userInfo: userInfo,
        onRefresh: onRefreshHandler,
        updateUserInfo: updateUserInfoHandler
    }
    return <userContext.Provider value={contextValue}>{props.children}</userContext.Provider>
}