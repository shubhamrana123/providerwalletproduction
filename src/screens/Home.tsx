import { Fragment, useEffect, useState } from "react";

import { SnackbarAlert } from "../components/layouts/alert/Snackbar";
import AppointmentView from "../components/appointment-view/Appointment";
import DrawerLayout from "../components/DrawerLayout";
import InitiateAppoitment from "../components/InitiateAppointment";


const Home = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>("");
    const [isError, setIsError] = useState<boolean>(false);
    const [initiateAppointments,setInitiateAppoitments] = useState<boolean>(false);

    

    const onInitiateAppointmentHandler = ()=>
    {
        setInitiateAppoitments(!initiateAppointments);
    }
    return (
        <Fragment>
            <br />
            <div className="panel-container with-sidebar">
                <Fragment>
                    <div className="calender-top-title-head">
                        <div className="calender-top-title-head-left">
                            <h3>Appointments</h3>
                        </div>
                        <div className="calender-top-title-head-right">
                            <button className="btn-default btn-md" onClick={onInitiateAppointmentHandler}>+ initiate</button>
                        </div>
                    </div>
                    <AppointmentView />
                </Fragment>

                <DrawerLayout
                    anchor="right"
                    width={400}
                    open={initiateAppointments}
                    onClose = {onInitiateAppointmentHandler}
                    component={<InitiateAppoitment/>}
                    />
                <SnackbarAlert
                    open={open}
                    alertMessage={alertMessage}
                    isError={isError}
                    setOpen={setOpen}
                />

                <div className="row">

                    <div className="col-md-8">
                            

                    </div>
                    <div className="col-md-4">
                        
                    </div>
                    
                </div>
            </div>


        </Fragment>
    )
}
export default Home;