
import { Fragment } from "react";


const Select = ()=>
{
    return (
        <Fragment>
            <select className="form-control">
                <option disabled key={0} value={0}>Select Patient</option>
                <option key={1} value={1}>Eric Parker</option>
                <option key={2} value={2}>Light Yagami</option>
                <option key={3} value={3}>Kemely Jones</option>
            </select>
        </Fragment>
    )
}
export default Select;