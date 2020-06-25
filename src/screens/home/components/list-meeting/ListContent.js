import React, {useContext} from 'react';
import {meetingsStore, UPDATE_LIST_MEETING} from "./store";
import {SortableContainer} from "react-sortable-hoc";
import {switchIndexOfTwoItems} from "../../../../utils/utils";
import {LoadingDefault} from "../../../../components/loading/LoadingDefault";
import {ListSortableItem} from "./ListSortableItem";
import ReactTooltip from "react-tooltip";

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

    const SortableList = SortableContainer(({data}) => {
        return (
            <ul className="p-0">
                {data.map((value, index) => (
                    <ListSortableItem key={index} index={index} sortIndex={index} meeting={value}/>
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
        [
            <SortableList data={meetings} onSortEnd={onSortEnd} key="0"/>,
            <ReactTooltip key="1" effect="solid" type="light" offset={{right: 250}} className="shadow"/>
        ]

    )
};
