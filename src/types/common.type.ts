import { FC } from "react";

export interface InputFields {
    controller : string,
    isRequired : boolean,
    minLength : number,
    maxLength? : number,
    patterns? : Array<{RegExp : RegExp, message : string}>,
    disabled : boolean,
    type : string,
    label : string,
    placeholder : string,
    value? : string,
    onChange? : ()=>void
}

export interface InputProps
{
    fields : InputFields,
    register : any,
    errors : any,
    setError? : any
    onChange? : ()=>void
}


export interface ISnackBarProps {
    open?: boolean;
    alertMessage?: string;
    setOpen?: any;
    isError?: boolean;
};

export type DialogAlertProps ={
    title : string,
    description : string,
    children : any,
    open : boolean, 
    handleClose : ()=> void,
    handleAction? : ()=> void
}

export type ConfirmAlertProps =
{

  button1Text?: string;
  button2Text?: string;
  successMessage?: string;
  onSuccess : ()=> void;
  onDeny : ()=> void;
  showPopup : boolean;
  item : string;
  type : string;
}

export interface ICardProps 
{
    Heading : string,
    subHeading : string,
    Icon? : string,
    onClick? : (id: number) => void,
    children : any

}


export interface IListProps
{
    itemList? : Array<any>
}

export interface IAvatarProps
{
    alt : string,
    src : string,
    width : number,
    height : number,
}

export type AddInSessionProps = {
    handleClose : ()=> void,
    groupList : Array<any>,
    groupId : number,
    depId : number,
    adminId : number,
    setSnackbarOpen : React.Dispatch<React.SetStateAction<boolean>>,
    setAlertMessage :  React.Dispatch<React.SetStateAction<string>>,
    setIsError : React.Dispatch<React.SetStateAction<boolean>>,
}

export interface IUserType  {
    id : number,
    type : string
}

export interface ISpecOptions {
    id : number,
    Specialization : string
}

export interface IUserDetails
{
    fname : string,
    lname : string,
    email : string,
    password : string,
    phone : string,
    hospitalId : number | null,
    practiceId : number | null,
    hospitalDepId : number | null ,
    practiceDepId : number | null,
    typeId : number,
    specId : number,
    adminId? : number
}

export interface IDrawerProps
{
    anchor: "left" | "top" | "right" | "bottom" | undefined,
    width : number,
    open : boolean,
    onClose : ()=>void
    component : any
}
