import React, {useContext} from 'react';
import {meetingsStore} from "../../store";
import {LoadingDefault} from "../../../../components/loading/LoadingDefault";
import {ListItem} from "./ListItem";

export const ListContent = () => {
    const {meetings, dispatch} = useContext(meetingsStore);

    if (!meetings) {
        return (
            <LoadingDefault/>
        )
    }

    return (
        <ul className="p-0">
            {
                meetings.map((meeting, index) => (
                    <ListItem key={index} meeting={meeting}/>
                ))
            }
        </ul>
    );
};
