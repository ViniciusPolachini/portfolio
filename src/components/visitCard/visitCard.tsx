'use client'
import { useEffect, useState } from "react";
import ProfileImage from "./profileDetails/profileImage";
import ProfileInfo from "./profileDetails/profileInfo";


export default function VisitCard() {
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
    },[])

    return(
        <div className="w-[98%] xl:m-5 m-1 flex rounded-3xl bg-light-green-2">
            {windowWidth >= 1280 && <ProfileImage/>}
            <ProfileInfo/>
        </div>
    );
}