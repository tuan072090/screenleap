import React, {createContext, useReducer} from "react";
import {logReducer} from "../../../../store";

export const UPDATE_LIST_MEETING = 'UPDATE_LIST_MEETING';
export const UPDATE_COUNT_MEETING = 'UPDATE_COUNT_MEETING';
export const UPDATE_INDEX_UPDATING = 'UPDATE_INDEX_UPDATING';

const initialState = {
    count: null,
    meetings: null,
    indexUpdating: null
};

const meetingsStore = createContext(initialState);
const {Provider} = meetingsStore;

const reducer = logReducer((state, action) => {
    const {data} = action;

    switch (action.type) {
        case UPDATE_LIST_MEETING:
            return {...state, meetings: data};

        case UPDATE_COUNT_MEETING:
            return {...state, count: data};

        case UPDATE_INDEX_UPDATING:
            return {...state, indexUpdating: data};

        default:
            throw new Error('Unexpected action');
    }
});

const StateMeetingsProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{...state, dispatch}}>{children}</Provider>
};

export {meetingsStore, StateMeetingsProvider}
