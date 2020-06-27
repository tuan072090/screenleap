import React from 'react';
import {AdministrationPage} from '../../src/screens/administration/AdministrationPage';

export default function Administration (props) {
    return(
        <AdministrationPage {...props}/>
    )
};

// export async function getServerSideProps(context) {
//     return ServerSideProps(context)
// }

