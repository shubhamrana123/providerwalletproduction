import { Fragment,useContext,useState} from "react"
import Input from "./form-items/Input"
import { useForm } from 'react-hook-form';
import authService from "../services/auth-service/auth.service";
import { IPhysician,IPhysicianInfo } from "../types/physician.type";
import {useNavigate} from 'react-router-dom';
import { authContext } from "../context/state/auth-context";
import { SnackbarAlert } from "./layouts/alert/Snackbar";
import { ILoginProps } from "../types/login.type";
import { usePasswordValidation } from "../hooks/usePasswordValidation";
import { useMedproLoginLazyQuery } from "../graphql/hooks/medproLogin.generated";


const Login = (props:ILoginProps) => {

    // const { register, formState: { errors }, handleSubmit,getValues } = useForm();

    const [onLogin, {data,error,loading}] = useMedproLoginLazyQuery();
    const onLoginHandler = async()=>
    {
        const physicianDetails: IPhysician = {
            email: props.getValues('email'),
            password: props.getValues('password')
        }
        const res = await onLogin({
            variables : {
                username : props.getValues('email'),
                password : props.getValues('password'),
                userType : "medicalpro"
            }
        })
        if(res?.data?.login)
        {
            
        }
        else
        {
            alert("please check password or email");
        }

    //    props.onLoginHandler(physicianDetails);
    }   

    return (
        <Fragment>
            <form onSubmit={props.handleSubmit(onLoginHandler)}>
                <div className="login-form-control">
                    <label>Username</label>
                    <Input register={props.register} errors={props.errors} fields={
                        {
                            controller: 'email',
                            isRequired: true,
                            minLength: 1,
                            disabled: false,
                            type: "text",
                            label: "Email",
                            placeholder: "Email address"
                        }} 
                    />
                </div>
                <div className="login-form-control">
                    <label className="text-start">Password</label>
                    <Input register={props.register} errors={props.errors} fields={
                        {
                            controller: 'password',
                            isRequired: true,
                            minLength: 1,
                            disabled: false,
                            type: "password",
                            label: "Password",
                            placeholder: "Password"
                        }} />
                </div>
                <div className="login-form-btn">
                    <button type="submit">Login</button>
                </div>
               
            </form>
        </Fragment>
    )
}
export default Login