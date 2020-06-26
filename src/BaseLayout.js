import React, {Fragment, memo, useContext, useEffect} from 'react';
import Head from 'next/head';
import { DesktopFooter, MainHeader} from './components';

import {
    store,
    UPDATE_ACCESS_TOKEN,
    UPDATE_NOTIFICATION_TOKEN,
    UPDATE_REFRESH_TOKEN
} from "./store";
import {DesktopSidebar} from "./components/sidebar/DesktopSidebar";
import {MobileHeaderMenu} from "./components/header/MobileHeaderMenu";
import {RightContentWrap} from "./components";

const BaseLayout = Component => props => {

    return (
        <Fragment>
            <Head>
                <title>Welcome to Screen Leap</title>
                <link rel="icon" href="/favicon.ico"/>

                <script type="text/javascript" src="/js/jquery.min.js"/>
                <script type="text/javascript" src="/js/bootstrap.min.js"/>

                {/*<script type="text/javascript" src="/sortable/js/clippings-html5-sortable.min.js"/>*/}
                <link type="text/css" rel="stylesheet" href="/sortable/css/clippings-html5-sortable.min.css" />

                <script  dangerouslySetInnerHTML={{__html: `
                    console.log("log in client...");
                `}} />
            </Head>

            <MobileHeaderMenu/>

            <div className="container-fluid">

                <div className="row">
                    <DesktopSidebar/>

                    <div className="col-md-9 ml-sm-auto col-lg-10 p-0">
                        <div className="main-wrap">

                            <MainHeader/>

                            <div className="main-inner">
                                <Component {...props}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <RightContentWrap/>

            <DesktopFooter />

        </Fragment>
    );
};

export default BaseLayout;
