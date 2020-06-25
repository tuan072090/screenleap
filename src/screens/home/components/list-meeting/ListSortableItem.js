import React from 'react'
import styles from "../../scss/listTimeline.module.scss";
import {useDeviceInfo} from "../../../../utils/hooks/useDeviceInfo";
import {SortableElement} from "react-sortable-hoc";
import ReactTooltip from 'react-tooltip';

export const ListSortableItem = SortableElement(({meeting, sortIndex}) => {
    let tooltipRef;
    const device = useDeviceInfo();
    console.log("device...", device);

    const isOpen = sortIndex === 0;
    const isMobile = device === 'mobile' || device === 'tablet';

    if (isMobile) {
        return (
            <li className={"d-flex align-items-center shadow-sm bg-white " + styles.listMeetingItem}>
                <p ref={ref => tooltipRef = ref} data-tip={meeting.description}/>

                <div className="row">
                    <div className="col-12">
                        <p>{meeting.duration}</p>
                        <strong>{meeting.name}</strong>
                        <p onClick={() => {
                            ReactTooltip.hide(this.fooRef)
                        }}>{meeting.description}</p>
                    </div>
                    <div className={"col-6 d-flex " + styles.viewCount}>
                        <img src={"/img/icons/eye.svg"} className={styles.inlineIcon}/>
                        <strong>{meeting.viewCount}</strong>
                    </div>

                    <div className={"col-6 d-flex justify-content-end " + styles.timeCount}>
                        <img src={"/img/icons/clock.svg"} className={styles.inlineIcon}/>

                        <strong>{meeting.minutes}</strong><span className="ml-1">min</span>
                    </div>

                    <div className={"col-12 d-flex align-items-center " + styles.mobileControl}>
                        <a>
                            <img src="/img/icons/edit.svg" alt="edit"/> edit
                        </a>
                        <a>
                            <img src="/img/icons/trash.svg" alt="copy"/> remove
                        </a>
                    </div>
                </div>

            </li>
        )
    }

    return (
        <li className={"d-flex align-items-center shadow-sm bg-white " + styles.listMeetingItem}>
            <p ref={ref => tooltipRef = ref} data-tip={meeting.description}/>

            <div className={"d-flex " + styles.meetingName}>
                <strong>{meeting.name}</strong>
                <span
                    className={"d-flex  align-items-center "+styles.meetingDesc}
                    onMouseEnter={() => {
                        ReactTooltip.show(tooltipRef)
                    }}
                    onMouseLeave={() => {
                        ReactTooltip.hide(tooltipRef)
                    }}>
                    <span className={styles.meetingDescText}>{" - " + meeting.description}</span>

                    <span className={"align-items-center justify-content-end "+styles.meetingDescControl}>
                        <a><img src="/img/icons/edit.svg" alt="edit"/></a>
                        <a><img src="/img/icons/trash.svg" alt="copy"/></a>
                    </span>
                </span>
            </div>

            <div className={"d-flex align-items-center " + styles.viewCount + " " + styles.meetingLinkWrap}>
                <span className={styles.meetingLink}>
                    {meeting.link}
                </span>

                <span className={styles.linkCopy}>
                    <img src={"/img/icons/copy.svg"}/>
                </span>
            </div>

            <div className={"d-flex justify-content-end " + styles.timeCount}>
                <a href=""
                   className={isOpen ? "btn btn-primary " + styles.btnOpen : "btn btn-outline-secondary " + styles.btnStart}
                >{isOpen ? "Open" : "Start"}</a>
            </div>
        </li>
    )
})
