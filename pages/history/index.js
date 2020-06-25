import React from 'react';
import {HistoryPage, ServerSideProps} from "../../src/screens/history/HistoryPage";

export default function History (props) {
    return(
        <HistoryPage {...props}/>
    )
};

export async function getServerSideProps(context) {
    return ServerSideProps(context)
}

