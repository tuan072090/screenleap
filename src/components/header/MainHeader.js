import React, {useContext} from 'react';
import styles from './styles.module.scss';
import {store, UPDATE_RIGHT_CONTENT} from "../../store";
import {DesktopMeetingForm} from "../formCreateMeeting/DesktopMeetingForm";

export const MainHeader = () => {
    const {dispatch} = useContext(store);

    const startMeeting = (event) => {
        event.preventDefault();

        dispatch({
            type: UPDATE_RIGHT_CONTENT,
            data: DesktopMeetingForm
        })
    };

    return(
        <div className={styles.mainHeader +" p-4"}>
            <div className={"d-flex align-items-center "+styles.inner}>

                <h2>Meet now</h2>

                <div className={"d-flex flex-grow-1 justify-content-end align-items-center "+ styles.formWrap}>

                    <h6 className={styles.title}>Secure your meeting with password</h6>

                    <div className={"d-flex "+styles.formPassword}>

                        <input type="text" name="pass" className={"form-control "+ styles.meetingPassword} />

                        <a onClick={startMeeting} className={styles.startMeetingBtn} href={"#"}>Start</a>
                    </div>


                </div>
            </div>
        </div>
    )
};
