'use client'
import { useEffect, useState } from "react";
import ProfileInfo from "./profileDetails/profileInfo";
import ProfileArt from "./profileArt/profileArt";


export default function VisitCard() {
    const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    },[])

    return(
        <div className="w-[98%] xl:m-5 m-1 flex rounded-3xl bg-light-green-2">
            {windowWidth >= 1280 && <ProfileArt/>}
            <ProfileInfo/>
        </div>
    );
}