import { Fragment, useContext, useState } from "react"
import Card from "../components/layouts/card/Card"
import Login from '../components/Login';
import { IPhysician, IPhysicianInfo } from "../types/physician.type";
import authService from "../services/auth-service/auth.service";
import { authContext } from "../context/state/auth-context";
import { useNavigate } from "react-router-dom";
import { SnackbarAlert } from "../components/layouts/alert/Snackbar";
import Images from '../constant/images';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';

const LoginView = () => {

    const navigate = useNavigate();
    const authCtx = useContext(authContext);
    const [open, setOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();

    const onLoginHandler = async (physicianInfo: IPhysician) => {
        
        navigate('../home');
        // const res: any = await authService.onLogin(physicianInfo);
        // if (res.data?.statusCode == 200) {
        //     if (res.data.result[0].id > 0) {
        //         const userDetails: IPhysicianInfo = {
        //             physicianName: `${res.data.result[0].fname} ${res.data.result[0].lname}`,
        //             physicianEmail: res.data.result[0].email,
        //             physicianId: res.data.result[0].id,
        //             physicianDid: res.data.result[0].did

        //         }
        //         authCtx.login(userDetails);
        //         if (localStorage.getItem('isFirstLogin') == "true")
        //             navigate('../home');
        //         else
        //             navigate('../resetPassword');

        //     }
        //     else {
        //         setAlertMessage(res.data.result[0].error);
        //         setIsError(true);
        //         setOpen(true);
        //     }
        // }
        // else {
        //     setAlertMessage("something went wrong..!");
        //     setIsError(true);
        //     setOpen(true);
        // }
    }

    return (
        <Fragment>
            <div className="login-page">
                <div className="login-body">
                    <div className="login-body-inner">
                        <div className="login-logo"><img src={Images.logoIcon} /></div>
                        <div className="login-title">Login to your account</div>
                        <Login
                            onLoginHandler={onLoginHandler}
                            register={register}
                            handleSubmit={handleSubmit}
                            getValues={getValues}
                            errors={errors}
                        />
                    </div>
                    {/* <div className="login-hints">
                            <span className="login-hints-icons"></span>
                            <span className="login-hints-text">Should contain:</span>
                        </div>
                        <div className="login-hints green">
                            <span className="login-hints-icons"></span>
                            <span className="login-hints-text">Lower case letters (a-z)</span>
                        </div>
                        <div className="login-hints red">
                            <span className="login-hints-icons">X</span>
                            <span className="login-hints-text">Upper case letters (A-Z)</span>
                        </div>
                        <div className="login-hints red">
                            <span className="login-hints-icons">X</span>
                            <span className="login-hints-text">Numbers (0-9)</span>
                        </div> */}
                </div>

                <SnackbarAlert
                    open={open}
                    alertMessage={alertMessage}
                    isError={isError}
                    setOpen={setOpen}
                />
            </div>

        </Fragment>
    )
}
export default LoginView