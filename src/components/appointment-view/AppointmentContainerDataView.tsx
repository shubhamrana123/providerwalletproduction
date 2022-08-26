import { Fragment } from 'react'

import AvatarIcon from "../layouts/avatar/AvatarIcon";
import AvatarGroup from "@mui/material/AvatarGroup";
import { Link } from 'react-router-dom'
const AppointmentContainerDataView = (props: any) => {

    const onClickHandler = () => {
        console.log("Clicekd");

    };


    return (
        <Fragment>
            <div className="row">
                <div className="col-md-3">
                    &nbsp;
                    <p style={{ marginLeft: "10px", fontSize: "15px" }}><b>{props.data.patientName}</b></p>
                    <p style={{ marginLeft: "10px", marginBottom: "-1rem", fontSize: "12px" }}>{props.data.issue}</p>
                </div>
                <div className="col-md-3">
                    &nbsp;
                    <p style={{ fontSize: "13px" }}>{props.data.startTime + props.data.endTime}</p>
                </div>
                <div className="col-md-3">
                    &nbsp;
                    <AvatarGroup total={0}>
                        {[1, 2, 3, 4].map((item) => (
                            <AvatarIcon alt="doctors" src="images" height={35} width={30} />
                        ))}
                    </AvatarGroup>
                </div>
                <div className="col-md-2">
                    <br />

                    <a href="http://3.236.219.1/62ccc8fd4cba6186374edef8" target="_blank" rel="noreferrer">
                        <button style={{}} className="btn btn-primary" onClick={onClickHandler}>Join</button>
                    </a>
                </div>
            </div>
        </Fragment>
    );
};
export default AppointmentContainerDataView;