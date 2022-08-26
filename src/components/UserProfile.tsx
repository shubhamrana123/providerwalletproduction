import { Fragment, useState } from "react";
import AvatarIcon from "./layouts/avatar/AvatarIcon";
import Images from "../constant/images";
import ResetPassword from "./ResetPassword";
import { IPhysician } from "../types/physician.type";
import { useForm } from "react-hook-form";
import { SnackbarAlert } from "./layouts/alert/Snackbar";
import Input from "./form-items/Input";

const UserProfile = () => {

    const { register, formState: { errors }, handleSubmit, getValues, setError } = useForm();
    const [open, setOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);

    const onResetPasswordHandler = async () => {

        if (getValues("password") !== getValues("confirmPassword")) {

            setAlertMessage("password and confirm password doesn't match");
            setOpen(true);
            setIsError(true);
            return;
        }
        setAlertMessage("password update successfully");
        setOpen(true);
        setIsError(false);

        return;
    }
    return (
        <Fragment>
            <div className="right-sidebar-wrapper common-right-sidebar">
                <div className="right-sidebar-profile">
                    <div className="right-sidebar-profile-pic">
                        <div className="right-sidebar-profile-pic-inner">
                            <span className="right-sidebar-profile-char">
                                <AvatarIcon alt="profile-pic" src="images" height={140} width={140} />
                            </span>
                            <button className="right-sidebar-profile-pic-edit"><i className='bx bx-pencil'></i></button>
                        </div>
                    </div>
                    <div className="right-sidebar-profile-name">
                        Stephen Dickens
                    </div>
                    <div className="right-sidebar-profile-info-wrapper">
                        <div className="right-sidebar-profile-info">
                            <label>Email</label>
                            <p>steve.dickens@gmail.com</p>
                        </div>
                        <div className="right-sidebar-profile-info">
                            <div className="right-sidebar-profile-info-action">
                                <div><button><i className='bx bx-copy' style={{ top: "1px" }}></i> Copy DID</button></div>
                                <div><button><i className='bx bx-pencil' style={{ top: "1px" }}></i> Change DID</button></div>
                            </div>
                            <label>DID</label>
                            <p>ethr:rinkeby:0x03104051f495a8df5825b15de19f95fe42f112bfd09cca24b8a7cf7b3dc6846c6a</p>
                        </div>
                    </div>
                </div>

                {/* <div className="profile-info">
                    <div className="info-heading mt-0 mb-3">Sidebar Title Here</div>
                </div> */}

                <div className="login-title">Reset your Password</div>
                <form onSubmit={handleSubmit(onResetPasswordHandler)}>
                    <div className="login-form-control">
                        <label>New Password</label>

                        <Input register={register} errors={errors} fields={
                            {
                                controller: 'password',
                                isRequired: true,
                                minLength: 1,
                                maxLength: 1000,
                                disabled: false,
                                type: "password",
                                label: "password",
                                placeholder: "Create new Password",
                            }}
                        />
                        {errors?.password && <p className="text-danger">error</p>}
                    </div>

                    {/* Section for Reset Password Form */}

                    <div className="login-form-control">
                        <label>Confirm Password</label>
                        <Input register={register} errors={errors} fields={
                            {
                                controller: 'confirmPassword',
                                isRequired: false,
                                minLength: 1,
                                maxLength: 1000,
                                disabled: false,
                                type: "password",
                                label: "ConfirmPassword",
                                placeholder: "Confirm password"
                            }}
                        />
                        {errors?.confirmPassword && <p className="text-danger">error</p>}
                    </div>
                    <div className="login-form-btn">
                        <button className="btn-default" type="submit">Reset Password</button>
                    </div>
                </form>
                <SnackbarAlert
                    open={open}
                    setOpen={setOpen}
                    isError={isError}
                    alertMessage={alertMessage}
                />
            </div>

        </Fragment>
    )
}
export default UserProfile;