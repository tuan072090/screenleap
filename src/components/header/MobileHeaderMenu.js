import React,{useRef} from 'react'
import {useDeviceInfo} from "../../utils/hooks/useDeviceInfo";
import styles from './MobileHeaderMenu.module.scss';
import { withRouter } from 'next/router'
import Link from "next/link";

export const MobileHeaderMenu = withRouter(({router}) => {
    const device = useDeviceInfo();
    const menuContentRef = useRef(false);
    const isActiveRoute = (currentRoute) => {
        return currentRoute === router.pathname ? styles.active : ""
    };

    const menuToggle = () => {
        if (menuContentRef.current) {
            $(menuContentRef.current).collapse('toggle')
        }
    };

    if(device !== 'mobile') return null;

    return (
        <div className={styles.mHeaderWrap}>
            <div className="container-fluid">
                <div className={styles.inner}>
                    <a className={styles.logo} href="/">
                        <img src={"/img/logo.svg"} alt="logo"/>
                    </a>

                    <button onClick={menuToggle} className={"btn "+styles.menu}>
                        <img src={"/img/icons/hambuger.svg"} alt="hambuger menu"/>
                    </button>
                </div>

                <div ref={menuContentRef} className={"collapse "+styles.menuList}>
                    <ul className="flex-column p-0">

                        <li>
                            <a href="/" className={"nav-link "+styles.navLink +" "+ isActiveRoute("/")}>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="0.65" y="0.65" width="18.7" height="14.7" rx="1.35" stroke="#424856" strokeWidth="1.3"/>
                                    <rect x="6" y="17" width="8" height="1.6" rx="0.8" fill="#424856"/>
                                </svg>

                                <span className={styles.navText}>Meetings</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link href="/recording">
                                <a className={"nav-link "+styles.navLink}>
                                    <svg className={styles.navIcon} width="20" height="14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.349 1.273h-1.953a.659.659 0 00-.462.184l-1.107 1.088h-1.035V1.91C14.792.855 13.917 0 12.838 0H1.954C.874 0 0 .855 0 1.91v10.18C0 13.146.874 14 1.953 14H12.84c1.078 0 1.953-.855 1.953-1.91v-.636h1.035l1.113 1.089a.659.659 0 00.456.184h1.953c.36 0 .651-.285.651-.636V1.909a.644.644 0 00-.651-.636zm-.651 10.181h-1.035l-1.114-1.088a.659.659 0 00-.455-.184H14.14a.644.644 0 00-.651.636v1.273a.644.644 0 01-.652.636H1.954a.644.644 0 01-.65-.636V1.909c0-.351.29-.636.65-.636H12.84c.36 0 .65.285.65.636v6.364h1.303V3.818h1.302a.659.659 0 00.462-.184l1.107-1.089h1.035v8.91z" fill="#424856"/></svg>
                                    <span className={styles.navText}>Recording</span>
                                </a>
                            </Link>

                        </li>

                        <li className="nav-item">
                            <Link href="/history">
                                <a className={"nav-link "+styles.navLink +" "+ isActiveRoute("/history")}>
                                    <svg className={styles.navIcon} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.8266 4.38995L12.7854 0.176239C12.677 0.0632858 12.5312 0 12.3792 0H2.16233C0.970092 0 0 1.02972 0 2.29559V18.7044C0 19.9701 0.969941 21 2.16233 21H14.8377C16.0299 21 17 19.9703 17 18.7044V4.82895C17 4.66376 16.9375 4.50563 16.8266 4.38995ZM12.9588 2.08186L15.0034 4.21371H13.143C13.0415 4.21371 12.9588 4.12592 12.9588 4.01809V2.08186ZM14.8377 19.7695H2.16233C1.60922 19.7695 1.15904 19.2918 1.15904 18.7044V2.29559C1.15904 1.70824 1.60907 1.23047 2.16233 1.23047H11.7999V4.01809C11.7999 4.80444 12.4025 5.44418 13.1432 5.44418H15.841V18.7044C15.841 19.2918 15.3909 19.7695 14.8377 19.7695Z" fill="#424856"/>
                                        <path d="M12.5231 9.76172H4.35369C4.0336 9.76172 3.77417 10.0371 3.77417 10.377C3.77417 10.7168 4.0336 10.9922 4.35369 10.9922H12.5231C12.8432 10.9922 13.1026 10.7168 13.1026 10.377C13.1026 10.0371 12.8432 9.76172 12.5231 9.76172Z" fill="#424856"/>
                                        <path d="M4.35369 13.4531H11.0148C11.3349 13.4531 11.5944 13.1777 11.5944 12.8379C11.5944 12.4981 11.3349 12.2227 11.0148 12.2227H4.35369C4.0336 12.2227 3.77417 12.4981 3.77417 12.8379C3.77417 13.1777 4.0336 13.4531 4.35369 13.4531Z" fill="#424856"/>
                                        <path d="M11.8185 14.6836H4.35369C4.0336 14.6836 3.77417 14.959 3.77417 15.2988C3.77417 15.6386 4.0336 15.9141 4.35369 15.9141H11.8185C12.1384 15.9141 12.398 15.6386 12.398 15.2988C12.398 14.959 12.1384 14.6836 11.8185 14.6836Z" fill="#424856"/>
                                    </svg>


                                    <span className={styles.navText}>History</span>
                                </a>
                            </Link>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
});
