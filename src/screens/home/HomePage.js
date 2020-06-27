import React from 'react';
import Head from "next/head";
import BaseLayout from "../../BaseLayout";
import styles from './scss/styles.module.scss';
import {HomeHeader} from "./components/HomeHeader";
import {MainContent} from "./components/list-meeting/MainContent";
import ServerSideRequest from "../../utils/services/ServerSideRequest";
import {StateMeetingsProvider} from "./components/list-meeting/store";
import {FetchData} from "../../utils/hooks/useRequest";

const HomePage =  BaseLayout(({listMeeting}) => {

    return (
        <StateMeetingsProvider>
            <div className={styles.homeWrap}>
                <Head>
                    <title>Meetings - Screen Leap</title>
                </Head>

                <HomeHeader/>

                <MainContent listMeeting={listMeeting}/>
            </div>
        </StateMeetingsProvider>
    )
});

export const ServerSideProps = ServerSideRequest(async ({params, query, provinceId}) => {

    const data = await FetchData("/api/meetings");

    return {
        props: {
            listMeeting: data
        }
    }
});

export {HomePage}
