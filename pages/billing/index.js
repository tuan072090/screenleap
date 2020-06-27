import React from 'react';
import {BillingPage} from '../../src/screens/billing/BillingPage';

export default function Billing (props) {
    return(
        <BillingPage {...props}/>
    )
};

// export async function getServerSideProps(context) {
//     return ServerSideProps(context)
// }

