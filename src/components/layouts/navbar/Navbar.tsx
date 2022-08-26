
import { Fragment, useState } from "react";
import Header from "./Header";

const Navbar = (props: any) => {

    return (
        <Fragment>
            <Header />
            {props.Outlet}
        </Fragment>
    )
}

export default Navbar;