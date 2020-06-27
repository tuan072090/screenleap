import React, {useContext, useEffect, useState} from 'react';
import {store, UPDATE_RIGHT_CONTENT} from "../../store";

export const RightContentWrap = () => {
    const [visible, setVisible] = useState(false);

    const {RightContent, dispatch} = useContext(store);

    useEffect(() => {
        if (RightContent) {
            show()
        } else {
            hide()
        }
    }, [RightContent]);

    const show = () => {
        setVisible(true);
        document.getElementById("rightContent").addEventListener("click", bgClick)
    };

    const hide = () => {
        setVisible(false);
        dispatch({type: UPDATE_RIGHT_CONTENT, data: null});
        document.getElementById("rightContent").removeEventListener("click", bgClick)
    };

    const bgClick = (event) => {
        const id = event.target.getAttribute("id");

        if(id === 'rightContent') hide();
    };

    return (
        <div id="rightContent" className={visible ? "rightContent rightContent--animatable rightContent--visible shadow " : "shadow rightContent"}>
            <div className="innerContent">
                {
                    RightContent ? <RightContent/> : null
                }
            </div>
        </div>
    )
};
