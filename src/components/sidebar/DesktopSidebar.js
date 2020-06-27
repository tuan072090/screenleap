import React from 'react';
import styles from './scss/styles.module.scss';
import Link from 'next/link'
import { withRouter } from 'next/router'
import {useDeviceInfo} from "../../utils/hooks/useDeviceInfo";

const DesktopSidebar = withRouter(({router}) => {
    const device = useDeviceInfo();

    console.log("device", device);
    const isActiveRoute = (currentRoute) => {
        return currentRoute === router.pathname ? styles.active : ""
    };

    return (
        <nav className={"col-md-3 col-lg-2 d-md-block bg-light collapse " + styles.sidebar}>
            <div className={styles.logo}>

                <a className="d-flex" href="/" title="Screen Leap">
                    <img src="/img/logo.svg" className={styles.logoImg} alt="logo Screen leap"/>
                </a>

            </div>

            <div className={styles.plan}>
                <div className={"d-flex justify-content-center align-items-center "+styles.planStatus}>
                    <div className={"d-flex justify-content-center align-items-center "+styles.countdown}>00:32</div>
                    <div className={styles.timeText}>You have 32 minutes / day</div>
                </div>
                <a className={styles.planCta} href={""}>Upgrade plan</a>
            </div>

            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">

                    <li className="nav-item">
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

                    <li className={"nav-item d-flex align-items-center " +styles.spaceNav}/>

                    <li className="nav-item d-flex align-items-center">
                        <a href="/" className={"nav-link "+styles.navLink}>
                            <svg className={styles.navIcon}  width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.6276 20H9.37238C8.35719 20 7.53121 19.1741 7.53121 18.1589V17.7342C7.09961 17.5963 6.68027 17.4223 6.27742 17.2138L5.97648 17.5147C5.24762 18.2445 4.08008 18.2231 3.37238 17.5145L2.48523 16.6273C1.77629 15.9192 1.7559 14.752 2.48547 14.0232L2.78617 13.7225C2.5777 13.3197 2.40367 12.9004 2.26574 12.4688H1.84113C0.825976 12.4688 0 11.6428 0 10.6276V9.37238C0 8.35719 0.825976 7.53125 1.84117 7.53125H2.26578C2.40371 7.09961 2.57773 6.68031 2.78621 6.27746L2.48527 5.97656C1.75613 5.2482 1.77625 4.08094 2.48551 3.37246L3.37273 2.48527C4.08207 1.77496 5.24934 1.75723 5.9768 2.48551L6.27746 2.78617C6.68031 2.57773 7.09965 2.40367 7.53125 2.26574V1.84113C7.53125 0.825937 8.35719 0 9.37242 0H10.6276C11.6428 0 12.4688 0.825937 12.4688 1.84113V2.26578C12.9004 2.40367 13.3197 2.57773 13.7225 2.78621L14.0235 2.48527C14.7523 1.75551 15.9199 1.77691 16.6276 2.48555L17.5147 3.37266C18.2237 4.08082 18.2441 5.24797 17.5145 5.97676L17.2138 6.27746C17.4223 6.68031 17.5963 7.09957 17.7342 7.53125H18.1588C19.174 7.53125 20 8.35719 20 9.37238V10.6276C20 11.6428 19.174 12.4688 18.1588 12.4688H17.7342C17.5963 12.9004 17.4223 13.3197 17.2138 13.7225L17.5147 14.0235C18.2439 14.7518 18.2237 15.9191 17.5145 16.6276L16.6273 17.5148C15.9179 18.2251 14.7507 18.2428 14.0232 17.5145L13.7225 17.2139C13.3197 17.4223 12.9004 17.5964 12.4688 17.7343V18.1589C12.4688 19.1741 11.6428 20 10.6276 20ZM6.47332 15.9832C7.03297 16.3142 7.63531 16.5642 8.26359 16.7264C8.52234 16.7931 8.70312 17.0265 8.70312 17.2937V18.1589C8.70312 18.5279 9.0034 18.8281 9.37242 18.8281H10.6276C10.9966 18.8281 11.2969 18.5279 11.2969 18.1589V17.2937C11.2969 17.0265 11.4777 16.7931 11.7364 16.7264C12.3647 16.5642 12.9671 16.3142 13.5267 15.9832C13.757 15.847 14.0502 15.8841 14.2393 16.0732L14.8521 16.6861C15.1164 16.9506 15.5407 16.9445 15.7984 16.6864L16.6862 15.7986C16.9433 15.5418 16.9519 15.1175 16.6864 14.8523L16.0733 14.2393C15.8842 14.0501 15.8471 13.7569 15.9833 13.5267C16.3143 12.9671 16.5643 12.3647 16.7264 11.7364C16.7932 11.4777 17.0266 11.2969 17.2938 11.2969H18.1589C18.5279 11.2969 18.8282 10.9967 18.8282 10.6277V9.37242C18.8282 9.0034 18.5279 8.70316 18.1589 8.70316H17.2938C17.0265 8.70316 16.7932 8.52238 16.7264 8.26367C16.5643 7.63535 16.3142 7.03301 15.9833 6.4734C15.8471 6.24316 15.8842 5.94996 16.0733 5.76082L16.6862 5.14797C16.9511 4.88336 16.9442 4.45914 16.6864 4.20168L15.7987 3.31398C15.5414 3.05633 15.117 3.04879 14.8524 3.31375L14.2394 3.92684C14.0502 4.11602 13.757 4.15305 13.5268 4.01688C12.9671 3.6859 12.3648 3.43586 11.7365 3.27371C11.4777 3.20695 11.297 2.97359 11.297 2.70637V1.84113C11.297 1.47211 10.9967 1.17188 10.6277 1.17188H9.37246C9.00344 1.17188 8.70316 1.47211 8.70316 1.84113V2.70629C8.70316 2.97352 8.52238 3.20688 8.26363 3.27363C7.63535 3.43578 7.03301 3.68582 6.47336 4.0168C6.24305 4.15293 5.94988 4.1159 5.76074 3.92676L5.14793 3.31391C4.88371 3.04938 4.45938 3.05551 4.20168 3.31363L3.31391 4.20137C3.0568 4.45816 3.0482 4.8825 3.31367 5.14766L3.92676 5.76074C4.1159 5.94988 4.15293 6.24309 4.0168 6.47332C3.68582 7.03293 3.43582 7.63527 3.27367 8.26359C3.20688 8.52234 2.97352 8.70309 2.70633 8.70309H1.84117C1.47215 8.70312 1.17188 9.00336 1.17188 9.37238V10.6276C1.17188 10.9966 1.47215 11.2969 1.84117 11.2969H2.70629C2.97352 11.2969 3.20684 11.4777 3.27363 11.7364C3.43578 12.3647 3.68582 12.967 4.01676 13.5266C4.15289 13.7569 4.11586 14.0501 3.92672 14.2392L3.31387 14.8521C3.04895 15.1167 3.05586 15.5409 3.31363 15.7984L4.20133 16.6861C4.45863 16.9437 4.88301 16.9513 5.14762 16.6863L5.76066 16.0732C5.90004 15.9339 6.19 15.8156 6.47332 15.9832Z" fill="#424856"/>
                                <path d="M10 14.3496C7.60051 14.3496 5.64844 12.3975 5.64844 9.99805C5.64844 7.59859 7.60051 5.64648 10 5.64648C12.3995 5.64648 14.3516 7.59859 14.3516 9.99805C14.3516 12.3975 12.3995 14.3496 10 14.3496ZM10 6.81836C8.24668 6.81836 6.82031 8.24477 6.82031 9.99805C6.82031 11.7513 8.24672 13.1777 10 13.1777C11.7533 13.1777 13.1797 11.7513 13.1797 9.99805C13.1797 8.24477 11.7533 6.81836 10 6.81836Z" fill="#424856"/>
                            </svg>


                            <span className={styles.navText}>Settings</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/" className={"nav-link "+styles.navLink}>
                            <svg className={styles.navIcon} width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.65" y="0.65" width="18.7" height="13.7" rx="1.35" stroke="#424856" strokeWidth="1.3"/>
                                <rect x="1" y="4" width="18" height="2" fill="#424856"/>
                            </svg>
                            <span className={styles.navText}>Billing</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/" className={"nav-link "+styles.navLink}>
                            <svg className={styles.navIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.9266 15.1018C19.599 13.3736 18.0735 11.901 16.1065 11.8024C15.4655 11.7708 14.7346 11.4184 14.199 10.8829L12.8752 9.55938L16.5085 5.96981L16.9257 6.3866C17.2135 6.67539 17.7032 6.5884 17.8734 6.21473L19.9449 1.65715C20.0461 1.43488 19.9984 1.17313 19.8258 1.00047L18.9973 0.171525C18.8246 -0.00113113 18.5629 -0.0483967 18.3406 0.0523845L13.7826 2.12434C13.4131 2.29184 13.3203 2.78074 13.6108 3.07203L14.0225 3.48375L10.3891 7.07332L9.07583 5.76039C8.53243 5.21699 8.22227 4.58028 8.20235 3.96813C8.16876 2.92317 7.74259 1.9407 7.00349 1.20121C5.78509 -0.0171468 3.91353 -0.335115 2.34626 0.410197C2.17438 0.491838 2.0529 0.651994 2.02048 0.839885C1.98806 1.02738 2.04899 1.21879 2.18337 1.35356L3.517 2.68719V3.51574H2.68849L1.35485 2.18215C1.22048 2.04778 1.02868 1.98684 0.841143 2.01926C0.653252 2.05168 0.493096 2.17317 0.411455 2.34504C-0.468271 4.19473 0.130596 6.37215 1.83454 7.52219C2.45021 7.93781 3.17911 8.17301 3.94204 8.20192C4.48544 8.22301 5.02841 8.44528 5.49833 8.83321C5.32442 9.27879 5.33743 9.79016 5.55106 10.2344L0.51458 15.3444C-0.169052 16.03 -0.168662 17.1437 0.516143 17.8284L2.17364 19.4859C2.85794 20.1702 3.97228 20.1725 4.65966 19.4859C4.66044 19.4848 4.66161 19.484 4.66239 19.4828L9.69618 14.376C10.1343 14.5848 10.6442 14.6004 11.0908 14.4252C11.5091 14.9295 11.7763 15.551 11.8037 16.1054C11.9029 18.0739 13.3758 19.598 15.103 19.9254C16.4748 20.1834 17.8494 19.751 18.8008 18.7996C19.7622 17.8378 20.1829 16.4557 19.9266 15.1018ZM18.4559 1.28758L18.7102 1.54188L17.1562 4.95996L15.0374 2.84113L18.4559 1.28758ZM3.98696 7.03078C3.44239 7.01008 2.92481 6.84406 2.49005 6.5507C1.52478 5.8991 1.05446 4.78774 1.21228 3.69707L2.03146 4.51625C2.14122 4.62602 2.29044 4.68774 2.44552 4.68774H4.10302C4.42645 4.68774 4.68899 4.42524 4.68899 4.10176V2.44426C4.68899 2.28918 4.62727 2.13996 4.51751 2.0302L3.69946 1.21219C4.59481 1.08445 5.51829 1.37352 6.17454 2.0302C6.7027 2.55836 7.007 3.25992 7.03122 4.00606C7.06091 4.91703 7.49255 5.83426 8.24728 6.58895L9.55513 7.8968L8.7961 8.64684L8.37931 8.23004C7.79681 7.64754 6.92431 7.56817 6.26477 7.94606C5.59251 7.38391 4.79638 7.06203 3.98696 7.03078ZM3.82954 18.6586C3.60103 18.8859 3.23028 18.8851 3.00216 18.6574L1.34466 16.9999C1.11614 16.7714 1.11614 16.3998 1.34466 16.1713L1.34778 16.1682L6.31048 11.1332L8.79649 13.6193L3.82954 18.6586ZM10.8654 13.2021C10.637 13.4305 10.266 13.4313 10.0368 13.2021L6.72185 9.88715C6.49204 9.65734 6.49395 9.28645 6.72185 9.0586C6.95036 8.83004 7.322 8.82981 7.55079 9.0586L10.8654 12.3732C11.0939 12.6017 11.0939 12.9736 10.8654 13.2021ZM10.4536 10.3039L9.62505 9.47539L14.8514 4.31231L15.68 5.14125C15.3907 5.42703 10.7358 10.0253 10.4536 10.3039ZM17.9718 17.9706C17.2745 18.6683 16.3085 18.9609 15.3213 18.7738C14.0999 18.5422 13.0464 17.4657 12.974 16.0479C12.9341 15.2307 12.5677 14.3615 11.9783 13.6588C12.1283 13.3963 12.2087 13.0982 12.2087 12.7876C12.2087 12.3181 12.0259 11.8766 11.6939 11.5446L11.2822 11.1329L12.0416 10.3829L13.3701 11.7118C14.1143 12.4556 15.1155 12.9271 16.0491 12.9728C17.4636 13.0451 18.5432 14.0959 18.775 15.3201C18.9621 16.3073 18.6695 17.2733 17.9718 17.9706Z" fill="#424856"/>
                            </svg>
                            <span className={styles.navText}>Customizations</span>
                        </a>
                    </li>



                    <li className="nav-item">
                        <a href="/" className={"nav-link "+styles.navLink}>
                            <svg className={styles.navIcon} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.0711 13.0402C15.9819 11.9511 14.6855 11.1448 13.2711 10.6567C14.786 9.61332 15.7812 7.86711 15.7812 5.89258C15.7812 2.7048 13.1878 0.111328 10 0.111328C6.81223 0.111328 4.21875 2.7048 4.21875 5.89258C4.21875 7.86711 5.21402 9.61332 6.72898 10.6567C5.31453 11.1448 4.01813 11.9511 2.92895 13.0402C1.0402 14.929 0 17.4402 0 20.1113H1.5625C1.5625 15.4589 5.34754 11.6738 10 11.6738C14.6525 11.6738 18.4375 15.4589 18.4375 20.1113H20C20 17.4402 18.9598 14.929 17.0711 13.0402ZM10 10.1113C7.67379 10.1113 5.78125 8.21883 5.78125 5.89258C5.78125 3.56633 7.67379 1.67383 10 1.67383C12.3262 1.67383 14.2188 3.56633 14.2188 5.89258C14.2188 8.21883 12.3262 10.1113 10 10.1113Z" fill="#424856"/>
                            </svg>
                            <span className={styles.navText}>Administration</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="/" className={"nav-link "+styles.navLink}>
                            <svg className={styles.navIcon} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.69301 13.4082C9.12117 13.4082 8.6582 13.8848 8.6582 14.4566C8.6582 15.0149 9.10754 15.5051 9.69301 15.5051C10.2785 15.5051 10.7414 15.0149 10.7414 14.4566C10.7414 13.8848 10.2649 13.4082 9.69301 13.4082Z" fill="#424856"/>
                                <path d="M9.87082 5.46875C8.03266 5.46875 7.18848 6.55801 7.18848 7.29328C7.18848 7.82433 7.63777 8.06941 8.00543 8.06941C8.74066 8.06941 8.44113 7.02097 9.82996 7.02097C10.5108 7.02097 11.0554 7.32054 11.0554 7.94687C11.0554 8.68218 10.2929 9.10425 9.84359 9.4855C9.44875 9.82589 8.93133 10.3842 8.93133 11.5551C8.93133 12.2632 9.12191 12.4674 9.6802 12.4674C10.3474 12.4674 10.4835 12.1679 10.4835 11.9092C10.4835 11.2011 10.4972 10.7926 11.2461 10.2072C11.6137 9.92124 12.7711 8.99535 12.7711 7.71543C12.7711 6.43551 11.6137 5.46875 9.87082 5.46875Z" fill="#424856"/>
                                <path d="M10 0C4.47328 0 0 4.47254 0 10V19.2188C0 19.6502 0.349766 20 0.78125 20H10C15.5267 20 20 15.5275 20 10C20 4.47328 15.5275 0 10 0ZM10 18.75H1.25V10C1.25 5.33684 5.33621 1.25 10 1.25C14.6632 1.25 18.75 5.33621 18.75 10C18.75 14.6632 14.6638 18.75 10 18.75Z" fill="#424856"/>
                            </svg>

                            <span className={styles.navText}>Help</span>
                        </a>
                    </li>

                </ul>
            </div>

        </nav>
    )
});

export {DesktopSidebar}
