import React from 'react';
import Head from "next/head";
import BaseLayout from "../../BaseLayout";
import styles from './scss/styles.module.scss';
import {HomeHeader} from "./components/HomeHeader";
import {MainContent} from "./components/list-meeting/MainContent";
import ServerSideRequest from "../../services/ServerSideRequest";
import {StateMeetingsProvider} from "./components/list-meeting/store";

const HomePage =  BaseLayout(({listMeeting}) => {


    return (
        <StateMeetingsProvider>
            <div className={styles.homeWrap}>
                <Head>
                    <title>Meet now - Screen Leap</title>
                </Head>

                <HomeHeader/>

                <MainContent listMeeting={listMeeting}/>
            </div>
        </StateMeetingsProvider>
    )
});

export const ServerSideProps = ServerSideRequest(async ({params, query, provinceId}) => {

    return {
        props: {
            listMeeting: {
                count: 24,
                meetings: [
                    {
                        name: "New project about selling",
                        description: "I would like to send the presentation we've discussed today. You...",
                        viewCount: 22,
                        minutes: 34,
                        duration: "4:00 PM - 5:00 PM"
                    },
                    {
                        name: "Meeting name",
                        description: "I would like to send the presentation we've discussed today. You may find it be... ",
                        viewCount: 4,
                        minutes: 6,
                        duration: "1:00 PM - 2:00 PM"
                    },
                    {
                        name: "New project about selling",
                        description: "I would like to send the presentation we've discussed today. You...",
                        viewCount: 23,
                        minutes: 31,
                        duration: "7:00 AM - 9:30 AM"
                    },
                    {
                        name: "Meeting name",
                        description: "I would like to send the presentation we've discussed today. You may find it be... ",
                        viewCount: 14,
                        minutes: 17,
                        duration: "9:00 AM - 11:30 AM"
                    },
                    {
                        name: "New project about selling",
                        description: "I would like to send the presentation we've discussed today. You...",
                        viewCount: 8,
                        minutes: 11,
                        duration: "8:30 AM - 9:05 AM"
                    },
                    {
                        name: "Meeting name",
                        description: "I would like to send the presentation we've discussed today. You may find it be... ",
                        viewCount: 9,
                        minutes: 34,
                        duration: "10:00 AM - 11:30 AM"
                    },
                    {
                        name: "New project about selling",
                        description: "I would like to send the presentation we've discussed today. You...",
                        viewCount: 15,
                        minutes: 18,
                        duration: "7:00 AM - 9:30 AM"
                    },
                    {
                        name: "Meeting name",
                        description: "I would like to send the presentation we've discussed today. You may find it be... ",
                        viewCount: 33,
                        minutes: 8,
                        duration: "7:00 AM - 9:30 AM"
                    }
                ]
            }
        }
    }
});

export {HomePage}
