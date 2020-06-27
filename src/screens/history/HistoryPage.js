import React from 'react';
import Head from "next/head";
import BaseLayout from "../../BaseLayout";
import styles from './scss/styles.module.scss';
import {ListHeader} from "./components/ListHeader";
import {MainContent} from "./components/list-meeting/MainContent";
import ServerSideRequest from "../../utils/services/ServerSideRequest";
import {StateMeetingsProvider} from "./store";
import {FetchData} from "../../utils/hooks/useRequest";

export const HistoryPage =  BaseLayout(({listMeeting}) => {

    return (
        <StateMeetingsProvider>
            <div className={"content-body "+styles.listWrap}>
                <Head>
                    <title>History - Screen Leap</title>
                </Head>

                <ListHeader/>

                <MainContent listMeeting={listMeeting}/>
            </div>
        </StateMeetingsProvider>
    )
});

export const ServerSideProps = ServerSideRequest(async ({params, query, provinceId}) => {
    const data = await FetchData("/api/history");

    return {
        props: {
            listMeeting: data
        }
    }
});
