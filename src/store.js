import React, {createContext, useReducer} from "react";

export const UPDATE_ACCESS_TOKEN = 'UPDATE_ACCESS_TOKEN';
export const UPDATE_REFRESH_TOKEN = 'UPDATE_REFRESH_TOKEN';
export const UPDATE_NOTIFICATION_TOKEN = 'UPDATE_NOTIFICATION_TOKEN';


export const logReducer = (func) => (state, action) => {
    //console.log("%c"+action["type"],'color: #bada55', "%cData: ", 'color: #bada55', action["data"]);
    return func(state, action)
};

const initialState = {
    accessToken: "",
    refreshToken: "",
    notificationToken: ""
};

const store = createContext(initialState);
const {Provider} = store;

const reducer = logReducer((state, action) => {
    const {data} = action;

    switch (action.type) {
        case UPDATE_ACCESS_TOKEN:
            return {...state, accessToken: data};

        case UPDATE_REFRESH_TOKEN:
            return {...state, refreshToken: data};

        case UPDATE_NOTIFICATION_TOKEN:
            return {...state, notificationToken: data};

        default:
            throw new Error('Unexpected action');
    }
});

const StateProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    return <Provider value={{...state, dispatch}}>{children}</Provider>
};

export {store, StateProvider}

