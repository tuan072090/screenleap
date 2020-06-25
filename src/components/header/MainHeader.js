import React from 'react';
import styles from './styles.module.scss';

export const MainHeader = () => {



    return(
        <div className={styles.mainHeader +" p-4"}>
            <div className={"d-flex align-items-center "+styles.inner}>

                <h2>Meet now</h2>

                <div className={"d-flex flex-grow-1 justify-content-end align-items-center "+ styles.formWrap}>

                    <h6 className={styles.title}>Secure your meeting with password</h6>

                    <div className={"d-flex "+styles.formPassword}>

                        <input type="text" name="pass" className={"form-control "+ styles.meetingPassword} />

                        <a className={styles.startMeetingBtn} href={"#"}>Start</a>
                    </div>


                </div>
            </div>
        </div>
    )
};
