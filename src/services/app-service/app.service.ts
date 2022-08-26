


import {http} from "../../api//http.common";
import { IPhysician } from "../../types/physician.type";

const onResetPassword = async(userInfo : IPhysician)=>
{
    return await http.http_MdVerse.post<IPhysician>("provider/resetPassword",userInfo);
}

const appService = {
    onResetPassword
};

export default appService;