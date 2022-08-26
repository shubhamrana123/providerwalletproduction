import { Fragment, useContext, useState } from 'react';
import ResetPassword from '../components/ResetPassword';


const ResetPasswordView = () => {

    return (
        <Fragment>
            <div className="login-page">
                <ResetPassword/>
            </div>
        </Fragment>
    )
}
export default ResetPasswordView;