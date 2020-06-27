import React from 'react';
import BaseLayout from "../../BaseLayout";
import Head from "next/head";

export const SettingsPage = BaseLayout(() => {

    return (
        <div className="content-body">
            <Head>
                <title>Settings - Screen Leap</title>
            </Head>

            <h2>Settings page</h2>
        </div>
    )
});
