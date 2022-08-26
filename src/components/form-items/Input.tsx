
import { Fragment, useEffect, useState } from 'react';
import { InputProps } from '../../types/common.type';


const Input = (props: InputProps) => {
    const item = props.fields;
    const [errorInput, setErrorInput] = useState('');

    const inputRegistry = props.register(item.controller, {
        required: { value: item.isRequired, message: `${item.label} is Required` },
        maxLength: { value: item.maxLength, message: `${item.label} can't be more than ${item.maxLength}.` },
        minLength: { value: item.minLength, message: `${item.label} can't be more than ${item.maxLength}.` },
        disabled: item.disabled
    });


    return (
        <Fragment>

            <input  className={`form-control ${errorInput}`} placeholder={item.placeholder} type={item.type} value={item.value}
            {...inputRegistry}
            />
            {/* <ErrorMessage
                errors={props.errors}
                name={item.controller}
                render={({ message }) =>  <p className='text-danger'>{message}</p> }
            /> */}
        </Fragment >

    )
}
export default Input;