

import React, {FC} from "react";
import Home from "../screens/Home";
import LoginScreeen from '../screens/LoginView'
import ResetPasswordView from "../screens/ResetPasswordView";

interface Route {
    key: string,
    title: string,
    path: string,
    // enabled: boolean,
    // exact: boolean | any,
    component: FC<{}>
}

export const routes: Array<Route> = [
    {
        key: 'app-home',
        title: 'homeScreen',
        path: 'home',
        // enabled: true,
        // exact: true,
        component:  Home
    },

    
    // {
    //     key: 'group-Hospital',
    //     title: 'HospitalGroupView',
    //     path: 'HospitalGroupView',
    //     // enabled: true,
    //     // exact: true,
    //     component:  HospitalGroup
    // },
    // {
    //     key: 'group-Practice',
    //     title: 'PracticeGroupView',
    //     path: 'PracticeGroupView',
    //     // enabled: true,
    //     // exact: true,
    //     component:  PracticeGroup
    // },
    // {
    //     key: 'group-Hospital-Detail',
    //     title: 'HospitalGroupDetailView',
    //     path: 'hospitalGroupeDetail',
    //     // enabled: true,
    //     // exact: true,
    //     component:  HospitalGroupDetail
    // },
    // {
    //     key: 'group-practice-Detail',
    //     title: 'PracticeGroupDetailView',
    //     path: 'practiceGroupeDetail',
    //     // enabled: true,
    //     // exact: true,
    //     component:  PracticeGroupDetail
    // },
    // {
    //     key: 'notFound',
    //     title: 'pageNotFound',
    //     path: '*',
    //     // enabled: true,
    //     // exact: true,
    //     component:  PageNotFound
    // },
   

    
]

// export const privateRoutes: Array<Route> = [
//     {
//         key: 'clients-route',
//         title: 'Clients',
//         path: '/clients',
//         // enabled: true,
//         component: ClientsScreen,
//         // exact: true
//     },
// ]