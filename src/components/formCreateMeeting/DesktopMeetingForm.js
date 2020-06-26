import React, {useContext} from 'react';
import styles from './desktop.module.scss';
import {store, UPDATE_RIGHT_CONTENT} from "../../store";

export const DesktopMeetingForm = () => {
    const {dispatch} = useContext(store);

    const closeForm = () => {
        dispatch({
            type: UPDATE_RIGHT_CONTENT,
            data: null
        })
    };

    return(
        <div className={styles.formWrap}>

            <h3 className={styles.formTitle}>Form content</h3>

            <button className={"btn "+styles.closeBtn} onClick={closeForm}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="2.31415" height="23.1415" rx="1.15708" transform="matrix(0.707109 -0.707104 0.707109 0.707104 0 1.63672)" fill="#3F9409"/>
                    <rect width="2.31415" height="23.1415" rx="1.15708" transform="matrix(0.707109 0.707104 -0.707109 0.707104 16.3638 0)" fill="#3F9409"/>
                </svg>
            </button>

            <div className="form-group">
                <label>Meeting name</label>
                <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Date and time</label>
                <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Participants</label>
                <input type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label>Description</label>
                <textarea className="form-control" rows="3"/>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>

        </div>
    )
};
