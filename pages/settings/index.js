import React from 'react';
import {SettingsPage} from '../../src/screens/settings/SettingsPage';

export default function Settings (props) {
    return(
        <SettingsPage {...props}/>
    )
};

// export async function getServerSideProps(context) {
//     return ServerSideProps(context)
// }

