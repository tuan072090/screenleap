import React from 'react'
import styles from "../../scss/listTimeline.module.scss";
import {useDeviceInfo} from "../../../../utils/hooks/useDeviceInfo";

export const ListItem = ({meeting}) => {
    const device = useDeviceInfo();

    const isMobile = device === 'mobile';

    if(isMobile){
        return(
            <li className={"d-flex align-items-center shadow-sm bg-white " + styles.listMeetingItem}>
                <div className="row">
                    <div className="col-12">
                        <p>{meeting.duration}</p>
                        <strong>{meeting.name}</strong>
                        <p>{meeting.description}</p>
                    </div>
                    <div className={"col-6 d-flex " + styles.viewCount}>
                        <img src={"/img/icons/eye.svg"} className={styles.inlineIcon}/>
                        <strong>{meeting.viewCount}</strong>
                    </div>

                    <div className={"col-6 d-flex justify-content-end " +styles.timeCount} >
                        <img src={"/img/icons/clock.svg"} className={styles.inlineIcon}/>

                        <strong>{meeting.minutes}</strong><span className="ml-1">min</span>
                    </div>
                </div>

            </li>
        )
    }

    return(
        <li className={"d-flex align-items-center shadow-sm bg-white " + styles.listMeetingItem}>
            <div className={"d-flex " + styles.meetingName}>
                <strong>{meeting.name}</strong> - {meeting.description}
            </div>

            <div className={"d-flex " + styles.viewCount}>
                <img src={"/img/icons/eye.svg"} className={styles.inlineIcon}/>
                <strong>{meeting.viewCount}</strong>
            </div>

            <div className={"d-flex justify-content-end " + styles.timeCount}>
                <img src={"/img/icons/clock.svg"} className={styles.inlineIcon}/>

                <strong>{meeting.minutes}</strong><span className="ml-1">min</span>
            </div>
        </li>
    )
};
