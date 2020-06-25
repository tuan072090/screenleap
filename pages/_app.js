import React from 'react'
import '../public/scss/custom.scss';
import {StateProvider} from "../src/store";

// Import css files here

const App = ({ Component, pageProps }) => {
    return (
        <StateProvider>
            <Component {...pageProps} />
        </StateProvider>
    )
};

export default App
