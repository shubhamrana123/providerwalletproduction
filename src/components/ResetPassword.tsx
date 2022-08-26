import { Fragment, useContext, useState, useEffect } from "react"
import { userContext } from '../context/state/user-context';
import { useForm } from 'react-hook-form';
import { usePasswordValidation } from '../hooks/usePasswordValidation';
import Images from '../constant/images';
import { SnackbarAlert } from '../components/layouts/alert/Snackbar';
import Input from "../components/form-items/Input";
import { IResetDetails } from "../types/ResetPassword";
// import { useResetPasswordLazyQuery } from "../graphql/hooks/resetPassword.generated";
import { Navigate ,useNavigate} from "react-router-dom";

import { useMedproResetpasswordLazyQuery } from "../graphql/hooks/medproResetPassword.generated";

const ResetPassword = () => {
    const [onReset, {data,error,loading}] = useMedproResetpasswordLazyQuery();
    const userCtx = useContext(userContext);
    const navigate = useNavigate();
    const [open, setOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [showErrors, setShowErrors] = useState<boolean>(false);
    const [noErrors, setNoErrors] = useState<boolean>(false);
    const [passwordValue, setPasswordValue] = useState<string>("");
    const [userPasswordInfo, seUserPasswordInfo] = useState({
        username: "",
        password: "",
        userType: ""
    })
    //const [resetPasswordHandler , {data,error,loading}] = useResetPasswordLazyQuery();
    const { register, formState: { errors }, handleSubmit, getValues, setError, watch } = useForm();
    const watchShowAge = watch("password", false);

    const [
        validLength,
        hasNumber,
        upperCase,
        lowerCase,
    ] = usePasswordValidation(passwordValue);

    const onResetPasswordHandler = async() => {

        let userInfo: IResetDetails = {
            password: getValues('password'),
            confirmPassword: getValues('confirmPassword')
        }
        if(userInfo.password !==  userInfo.confirmPassword)
        {
            setAlertMessage("Password and confirm password doesn't match");
            setOpen(true);
            setIsError(true);
            return;
        }
        if (showErrors) {
            setAlertMessage("Password must contain requried details");
            setOpen(true);
            setIsError(true);
        }
        const res = await onReset({
            variables : {
                username : "jamesbrown",
                password : 'jamesbrown',
                userType : "medicalpro"
            }
        })
        if(res?.data?.resetPassword)
        {
            
        }
        else
        {
            alert("please check password or emailhh");
        }

        navigate('../home');
        // else {
        //     const res = await resetPasswordHandler({
        //         variables : {
        //             username : userCtx.userInfo.userName,
        //             password : userInfo.password
        //         }
        //     })
            
        //     if(res?.data?.resetPassword)
        //     {
        //         setAlertMessage("password updated successfully");
        //         setOpen(true);
        //         setIsError(false);
        //         navigate("../practices");
        //         localStorage.setItem("isFirstLogin", "false");

        //     }
        //     else{
        //         setAlertMessage("Please check if username or password is valid");
        //         setOpen(true);
        //         setIsError(true);
               
        //     }
        // }
    }

    useEffect(() => {
        
        if (passwordValue == "")
            setShowErrors(false);
        else {
            if (validLength.isValid && hasNumber.isValid && upperCase.isValid && lowerCase.isValid)
                setShowErrors(false);
            else
                setShowErrors(true)
        }

    }, [passwordValue])

    useEffect(() => {
        const subscription = watch((value, { name, type }) => setPasswordValue(value.password));
        return () => subscription.unsubscribe();
        //    setError('password', { type: 'demo', message: 'run' });
    }, [validLength, hasNumber, upperCase, lowerCase, watch])

    

    return (
        <Fragment>
            <div className="login-body">
                <div className="login-body-inner">
                    <div className="login-logo"><img src={Images.logoIcon} /></div>
                    <div className="login-title">Reset your Password</div>
                    <form onSubmit={handleSubmit(onResetPasswordHandler)}>
                        <div className="login-form-control">
                            <label>New Password</label>

                            <Input register={register} errors={errors} fields={
                                {
                                    controller: 'password',
                                    isRequired: true,
                                    minLength: 1,
                                    maxLength: 200,
                                    disabled: false,
                                    type: "password",
                                    label: "password",
                                    placeholder: "Create new Password",
                                }}
                            />

                        </div>
                        <div className="login-form-control">
                            <label>Confirm Password</label>
                            <Input register={register} errors={errors} fields={
                                {
                                    controller: 'confirmPassword',
                                    isRequired: false,
                                    minLength: 1,
                                    maxLength: 200,
                                    disabled: false,
                                    type: "password",
                                    label: "ConfirmPassword",
                                    placeholder: "Confirm password"
                                }}
                            />
                        </div>
                        <div className="login-form-btn">
                            <button className="btn-default" type="submit">Reset Password</button>
                        </div>
                    </form>
                </div>
                {
                    showErrors &&
                    <>
                        <div className="login-hints-wrapper">
                            <div className="login-hints red">
                                {
                                    validLength.isValid ?
                                        <span className="login-hints green"><span className="login-hints-icons"><i className='bx bx-check'></i></span></span>
                                        :
                                        <span className="login-hints-icons"><i className='bx bx-x'></i></span>
                                }
                                <span className={!validLength.isValid ? `login-hints-text` : ` login-hints-text text-success`}>{validLength.message}</span>

                            </div>
                            <div className="login-hints">
                                <span className="login-hints-icons"></span>
                                <span className="login-hints-text">Should contain:</span>
                            </div>
                            <div className="login-hints red">
                                {
                                    lowerCase.isValid ?
                                        <span className="login-hints green"><span className="login-hints-icons"><i className='bx bx-check'></i></span></span>
                                        :
                                        <span className="login-hints-icons"><i className='bx bx-x'></i></span>
                                }
                                <span className={!lowerCase.isValid ? `login-hints-text` : ` login-hints-text text-success`}>{lowerCase.message}</span>
                                <br />
                            </div>
                            <div className="login-hints red">
                                {
                                    upperCase.isValid ?
                                        <span className="login-hints green"><span className="login-hints-icons"><i className='bx bx-check'></i></span></span>
                                        :
                                        <span className="login-hints-icons"><i className='bx bx-x'></i></span>
                                }
                                <span className={!upperCase.isValid ? `login-hints-text` : ` login-hints-text text-success`}>{upperCase.message}</span>
                                <br />
                            </div>
                            <div className="login-hints red">
                                {
                                    hasNumber.isValid ?
                                        <span className="login-hints green"><span className="login-hints-icons"><i className='bx bx-check'></i></span></span>
                                        :
                                        <span className="login-hints-icons"><i className='bx bx-x'></i></span>
                                }
                                <span className={!hasNumber.isValid ? `login-hints-text` : ` login-hints-text text-success`}>{hasNumber.message}</span>
                                <br />
                            </div>
                        </div>
                    </>
                }
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
export default ResetPassword