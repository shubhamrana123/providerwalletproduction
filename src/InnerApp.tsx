import { Fragment, useState, useContext } from "react"
import Navbar from "./components/layouts/navbar/Navbar"
import { userContext } from "./context/state/user-context";
import { http } from "./api/http.common";
import localStorageService from "./services/localStorage.service";
import { Routes, Route, Outlet, Navigate, Router, useNavigate } from 'react-router-dom';
import { routes } from "./routes/app.routes";
import Login from "./components/Login";
import { AnyAaaaRecord } from "dns";
import ResetPassword from "./components/ResetPassword";
import LoginView from "./screens/LoginView";
import ResetPasswordView from "./screens/ResetPasswordView";


const AppLayout = () => (
    <>
        <Navbar Outlet={<Outlet />} />
    </>
);


const InnerApp = () => {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const userCtx = useContext(userContext);

    /* interceptor for http_MdVerse http request */
    http.http_MdVerse.interceptors.request.use(
        (req: any) => {
            if (isLoggedIn) {
                const token = localStorageService.getAccessToken();
                if (token) {
                    req.headers['Authorization'] = 'Bearer ' + token
                }
            }

            setIsLoading(true);
            return req;
        },
        (err: any) => {
            return Promise.reject(err);
        }
    );

    /* interceptor for http_MdVerse http response */
    http.http_MdVerse.interceptors.response.use((response: any) => {
        setIsLoading(false);
        return response
    },
        (error: any) => {
            if (error?.response.status === 401) {

            }
            setIsLoading(false);
            return Promise.reject(error.message);
        });
    return (
        <Fragment>
            <Routes>
                <Route path="login" element={<LoginView />} />
                <Route path="resetPassword" element={<ResetPasswordView />} />
                <Route path="/" element={<AppLayout />} >
                    {routes.map((route) => (
                        <Route
                            key={route.key}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                </Route>

            </Routes>


        </Fragment>
    )
}
export default InnerApp