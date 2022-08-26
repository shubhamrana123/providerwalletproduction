import { Fragment, useState } from "react";
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import { IDrawerProps } from "../types/common.type";
import { Direction } from "../types/enum";
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { styled, useTheme } from '@mui/material/styles';


const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const DrawerLayout = (props: IDrawerProps) => {

    const [open, setOpen] = useState<boolean>(false);

    const toggleDrawer = (anchor: any, open: any) => (event: any) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }
        props.onClose();
    };

    const onCloseHandler = () => {
        props.onClose()
    }
    const theme = useTheme();
    return (
        <Fragment>

            <Drawer
                anchor={props.anchor}
                open={props.open}
                onClose={toggleDrawer(props.anchor, false)}
                
            >
                <DrawerHeader>
                    <IconButton onClick={onCloseHandler}>
                        {theme.direction === 'ltr' ? <CloseIcon /> : <CloseIcon />}
                    </IconButton>
                </DrawerHeader>
                <Box
                    sx={{ width: props.width }}
                    role="presentation"

                >

                    {props.component}
                </Box>

            </Drawer>
        </Fragment>
    )
}
export default DrawerLayout;