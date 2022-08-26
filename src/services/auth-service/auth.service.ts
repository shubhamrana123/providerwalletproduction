
import {http} from "../../api//http.common";
import { IPhysician } from "../../types/physician.type";

const onLogin = async(userInfo : IPhysician)=>
{
    return await http.http_MdVerse.post<IPhysician>("provider/onLogin",userInfo);
}

const authService = {
    onLogin
};

export default authService;