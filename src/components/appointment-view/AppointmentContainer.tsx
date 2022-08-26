import { Fragment } from "react";
import {Appointments} from "@devexpress/dx-react-scheduler-material-ui";

const AppointmentContainer = ({ children, style, ...restProps } : any)=>
{
    return (
        <Appointments.Appointment
          {...restProps}
          style={{
            ...style,
            backgroundColor: " #99ccff",
          }}
        >
          {children}
        </Appointments.Appointment>
      );
}
export default AppointmentContainer;