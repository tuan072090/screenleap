import React,{useContext} from 'react';
import {meetingsStore} from "./store";
import styles from '../../scss/listTimeline.module.scss';

export const TimeLineBar = () => {
    const {indexUpdating, meetings} = useContext(meetingsStore);

    console.log("indexUpdating...", indexUpdating);

    if(!meetings){
        return (
            <div className={styles.timelineWrap}>
                loading...
            </div>
        )
    }

    return(
        <div className={styles.timelineWrap}>
            <h5 className={styles.date}>Mon Jan 28</h5>

            <ul className={styles.timeline}>
                {
                    meetings.map((item, index) => {
                        return(
                            <li key={index} className={styles.timelineItem}>
                                {item.duration}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};
