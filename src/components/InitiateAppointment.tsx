import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';
import MultipleSelect from './form-items/MultipleSelect';
import Select from './form-items/Select';

const InitiateAppoitment = () => {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const [sendInvitation, setSendInvitation] = useState<boolean>(false);

    const onSubmitHandler = (event: any) => {
        event?.preventDefault();
        setSendInvitation(true);
    }
    return (
        <Fragment>
            <div className='right-sidebar-wrapper common-right-sidebar'>
                <div className="profile-info mt-4">
                    <div className="info-heading mt-0">Initiate Appointment</div>
                </div>
                {
                    sendInvitation ?
                        <>
                            <p>Invitation has been sent. Would you like to start the meeting now?</p>
                            <button className='btn-default btn-md'>Start Now</button>
                        </>
                        :
                        <form onSubmit={onSubmitHandler}>
                            <div className="form-field type-2 type-3">
                                <label className="text-start">Patient</label>
                                <Select />
                            </div>
                            <div className="form-field type-2 type-3">
                                <label className="text-start">Subject</label>
                                <textarea className="form-control" style={{ height: "130px" }}></textarea>
                            </div>
                            <div className="form-field type-2 type-3">
                                {/* <label className="text-start">Subject</label> */}
                                <MultipleSelect />
                            </div>
                            <br />
                            <div className="text-right"><button className="btn-default btn-md" type="submit">Send Invite</button></div>
                        </form>
                }
            </div>

        </Fragment >
    )
}
export default InitiateAppoitment;