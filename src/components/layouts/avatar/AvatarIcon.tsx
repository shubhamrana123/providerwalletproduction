
import { Fragment } from "react";
import Avatar from '@mui/material/Avatar';
import { IAvatarProps } from "../../../types/common.type";

const AvatarIcon = (props : IAvatarProps)=>
{
    return(
        <Fragment>
            <Avatar 
                sx={{ bgcolor: "#3385ff" , height:props.height , weight: props.width }} 
                alt={props.alt} 
                src={props.src} 
                
            />
        </Fragment>
    )
}
export default AvatarIcon;