import React from 'react';
import BaseLayout from "../../BaseLayout";
import Head from "next/head";

export const BillingPage = BaseLayout(() => {

    return (
        <div className="content-body">
            <Head>
                <title>Billing - Screen Leap</title>
            </Head>

            <h2>Billing page</h2>
        </div>
    )
});
