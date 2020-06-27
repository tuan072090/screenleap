import React from 'react';
import BaseLayout from "../../BaseLayout";
import Head from "next/head";

export const HelpPage = BaseLayout(() => {

    return (
        <div className="content-body">
            <Head>
                <title>Help - Screen Leap</title>
            </Head>

            <h2>Help page</h2>
        </div>
    )
});
