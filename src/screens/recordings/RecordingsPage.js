import React from 'react';
import BaseLayout from "../../BaseLayout";
import Head from "next/head";

export const RecordingsPage = BaseLayout(() => {

    return (
        <div className="content-body">
            <Head>
                <title>Recordings - Screen Leap</title>
            </Head>

            <h2>Recording page</h2>
        </div>
    )
});
