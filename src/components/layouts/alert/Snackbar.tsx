import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useRef } from 'react';
import { Fragment,forwardRef,useState } from 'react';
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {SnackbarStyles} from './SnackbarStyle';
import { ISnackBarProps } from '../../../types/common.type';


  
export const SnackbarAlert = (props : ISnackBarProps) => {
    const classes = SnackbarStyles();

    const handleClose = (event?: React.SyntheticEvent | Event,reason?: string)=>
    {
        if (reason === 'clickaway') {
            return;
        }
      
        props.setOpen(false);
    }

    const action = (
        <Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </Fragment>
      );
    return (
        <Fragment>
            <Snackbar
                open={props?.open}
                autoHideDuration={2000}
                message={props?.alertMessage}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                }}
                action={action}
                ContentProps={{
                    classes: {
                      root:
                      props.isError === true
                          ? classes.snackBarErrorClass
                          : classes.snackBarSuccessClass,
                    },
                  }}
            />
        </Fragment >

    )
};
