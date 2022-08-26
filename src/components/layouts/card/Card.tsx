import { Fragment } from "react";
import { ICardProps } from "../../../types/common.type";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';

const CardView = (props: ICardProps) => {
    return (
        <Fragment>
            <Card sx={{ maxWidth: 500}} style={{height : "350px"}}>
                <CardHeader
                    avatar={
                        props.Icon
                    }
                    title={props.Heading}
                    subheader={props.subHeading}
                />
                <div className="container">
                    {props.children}
                </div>


            </Card>
        </Fragment>
    )
}
export default CardView;