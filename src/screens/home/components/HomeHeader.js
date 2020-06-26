import React, {useContext, useEffect} from 'react';
import styles from '../scss/styles.module.scss';
import {store, UPDATE_RIGHT_CONTENT} from "../../../store";
import {DesktopMeetingForm} from "../../../components/formCreateMeeting/DesktopMeetingForm";

export const HomeHeader = () => {
    const {dispatch} = useContext(store);

    const openCreateMeetingForm = (event) => {
        event.preventDefault();

        dispatch({
            type: UPDATE_RIGHT_CONTENT,
            data: DesktopMeetingForm
        })
    };

    return (
        <div className={"d-block "+styles.header}>
            <h3 className={styles.title}>Meetings</h3>

            <a onClick={openCreateMeetingForm} className={"btn btn-lg btn-outline-primary "+styles.btn} href={"#"}>+ Schedule meeting</a>
        </div>
    )
};
