import {useEffect, useState} from "react";

const useDeviceInfo = () => {
    const [device, setDevice] = useState("desktop");

    useEffect(() => {
        const deviceName = window.innerWidth <= 768 ? "mobile" : window.innerWidth <= 992 ? "tablet" : window.innerWidth <= 1200 ? "desktop" : "largeDesktop";
        console.log("window.innerWidth", window.innerWidth)

        setDevice(deviceName);

        window.addEventListener('resize', changeWindowSize);

        return window.removeEventListener('resize', changeWindowSize)
    }, []);

    const changeWindowSize = () => {
        const deviceName = window.innerWidth <= 768 ? "mobile" : window.innerWidth <= 992 ? "tablet" : window.innerWidth <= 1200 ? "desktop" : "largeDesktop";
        console.log("window.innerWidth", window.innerWidth)
        setDevice(deviceName);
    };

    return device;
};

export {useDeviceInfo}
