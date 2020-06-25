import React, {useContext} from 'react';
import {meetingsStore, UPDATE_LIST_MEETING} from "./store";
import {SortableContainer, SortableElement} from "react-sortable-hoc";
import styles from "../../scss/listTimeline.module.scss";
import {switchIndexOfTwoItems} from "../../../../utils/utils";
import {LoadingDefault} from "../../../../components/loading/LoadingDefault";

export const ListContent = () => {
    const {meetings, dispatch} = useContext(meetingsStore);

    const onSortEnd = ({oldIndex, newIndex}) => {

        //  sort meeting and update
        const newList = switchIndexOfTwoItems(meetings, oldIndex, newIndex);

        dispatch({
            type: UPDATE_LIST_MEETING,
            data: newList
        });
    };

    const SortableItem = SortableElement(({meeting}) => (
        <li className={"d-flex align-items-center shadow-sm bg-white " + styles.listMeetingItem}>
            <div className={"d-flex " + styles.meetingName}>
                <strong>{meeting.name}</strong> - {meeting.description}
            </div>

            <div className={"d-flex " + styles.viewCount}>
                {meeting.viewCount}
            </div>

            <div className={"d-flex justify-content-end " + styles.timeCount}>
                <span>{meeting.minutes + ":00"}</span>
            </div>
        </li>
    ));

    const SortableList = SortableContainer(({data}) => {
        return (
            <ul className="p-0">
                {data.map((value, index) => (
                    <SortableItem key={index} index={index} meeting={value}/>
                ))}
            </ul>
        );
    });

    if (!meetings) {
        return (
            <LoadingDefault/>
        )
    }

    return (
        <SortableList data={meetings} onSortEnd={onSortEnd} />
    )
};
