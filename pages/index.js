import {HomePage,ServerSideProps} from "../src/screens";
import React from "react";

export default function Home(props) {
    return (
        <HomePage {...props}/>
    )
};

export async function getServerSideProps(context) {
    return ServerSideProps(context)
}
