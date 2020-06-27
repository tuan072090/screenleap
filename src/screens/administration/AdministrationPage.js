import React from 'react';
import BaseLayout from "../../BaseLayout";
import Head from "next/head";

export const AdministrationPage = BaseLayout(() => {

    return (
        <div className="content-body">
            <Head>
                <title>Administration - Screen Leap</title>
            </Head>

            <h2>Administration page</h2>
        </div>
    )
});
