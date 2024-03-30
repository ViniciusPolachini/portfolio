'use client'
import {
    animated,
    useSpring,
  } from '@react-spring/web';

import {useEffect, useState} from "react";

import Image from 'next/image'

export default function TechCarousel(){
 
    const techs : Array<string> = [
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", 
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    ]
    const techsIlusionList = techs.concat(techs);
    const [iconSize, setIconSize] =  useState<number>(0);

    useEffect(()=>{
      const handleResize = () => {
        const carouselDiv = document.getElementById("Carousel");
        setIconSize((carouselDiv?.offsetHeight as number) - (8*2));
      }
      
      window.addEventListener("resize", handleResize, false);
      
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    },[])

    const spring = useSpring({
      from:{
        transform: `translateX(0px)`
      },
      to:{
        transform:`translateX(-${iconSize*(techs.length)}px)`
      },
      
      loop: true,
      reset: true,
      config:{
        duration: 1000*techs.length,
      }
    })
    
    return(
      <div id="Carousel" className={'overflow-hidden rounded-xl pt-2 pb-2 shadow-carouselInner xl:w-[30vw] w-[80vw] xl:h-[8rem] h-[4rem] bg-white '}>
        <animated.div style={spring} className={`h-full flex`}>
             {
             techsIlusionList.map((tech, index) => 
             <Image
              src={tech}
              key={index}
              className="relative"
              alt="logo"
              width={iconSize}
              height={iconSize}
              />
             )
             }
        </animated.div>
      </div>
    );
}