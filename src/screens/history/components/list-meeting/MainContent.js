import React, {useContext, useEffect} from 'react';
import {TimeLineBar} from "./TimeLineBar";
import styles from '../../scss/listTimeline.module.scss';
import {meetingsStore, UPDATE_COUNT_MEETING, UPDATE_LIST_MEETING} from "../../store";
import {ListContent} from "./ListContent";

export const MainContent = ({listMeeting}) => {
    const {dispatch} = useContext(meetingsStore);

    useEffect(() => {
        const {count, meetings} = listMeeting;

        dispatch({
            type: UPDATE_LIST_MEETING,
            data: meetings
        });
        dispatch({
            type: UPDATE_COUNT_MEETING,
            data: count
        })
    }, [listMeeting]);

    return (
        <div className={"row px-0 px-sm-3 " + styles.listWrap}>
            <div className="col-12 col-md-4 col-lg-3 p-0 d-none d-md-block">
                <TimeLineBar/>
            </div>

            <div className={"col-12 col-md-8 col-lg-9 " + styles.listMeeting}>
                <ListContent/>
            </div>
        </div>
    )
};
