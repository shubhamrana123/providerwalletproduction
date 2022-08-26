import { useState,Fragment } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
  Appointments,
  TodayButton,
  ViewSwitcher,
} from "@devexpress/dx-react-scheduler-material-ui";

import { appointmentsData } from "../../DummyData/dummyData";
import AppointmentContainer from "./AppointmentContainer";
import AppointmentContainerDataView from "./AppointmentContainerDataView";

const AppointmentView = () => {
  const [currentViewName, setCurrentViewName] = useState("work-day");

  const currentViewNameChange = (currentViewName) => {
    setCurrentViewName(currentViewName);
  };

  const showMonthContainerData = (
    <Fragment>
        <p></p>
    </Fragment>
  )
  return (
    <Paper>
      <Scheduler data={appointmentsData} height={500}>
        <ViewState
          defaultCurrentDate="2022-07-27"
          currentViewName={currentViewName}
          onCurrentViewNameChange={currentViewNameChange}
        />
        <DayView
          startDayHour={9}
          endDayHour={18}
          name="work-day"
          displayName="Day"
        />
        <WeekView
          startDayHour={10}
          endDayHour={19}
          name="work-week"
          displayName="Week"
        />
        <MonthView name="work-month" displayName="Month" />
        <Toolbar />
        <ViewSwitcher />
        <DateNavigator />
        <TodayButton />
        <Appointments
          appointmentComponent={AppointmentContainer}
          appointmentContentComponent={AppointmentContainerDataView}
        />
      </Scheduler>
    </Paper>
  );
};

export default AppointmentView;
