import React from 'react';
import BaseLayout from "../../BaseLayout";
import Head from "next/head";

export const CustomizationsPage = BaseLayout(() => {

    return (
        <div className="content-body">
            <Head>
                <title>Customizations - Screen Leap</title>
            </Head>

            <h2>Customizations page</h2>
        </div>
    )
});
