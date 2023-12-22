import { useState, useEffect } from "react";
import { useTransition, animated} from "@react-spring/web";
import Image from "next/image";
import Link from "next/link";

interface LinkData {
    url: string,
    icon: string
}

export default function Links({showItens} : {showItens: boolean}){
    const links : Array<LinkData> = [
        {
            url:"https://www.linkedin.com/in/vin%C3%ADcius-polachini-780159195/",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
        },
        {
            url:"https://github.com/ViniciusPolachini",
            icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
    ]
    
    const [initialX, setInitialX] = useState<number>(0);
    const [endX, setEndX] = useState<number>(0);
    const [endY, setEndY] = useState<number>(0);

    useEffect(()=>{
      const handleResize = () => {
        const flag = window.innerWidth >= 1024;
        setInitialX(flag ? 200:0);
        setEndX(flag ? 1:0);
        setEndY(flag ? 80:50);
      }
      
      window.addEventListener("resize", handleResize, false);
      
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    },[])



    const entryTransitions = useTransition(showItens ? links:[], {
        from: { transform: `translateY(0px) translateX(${initialX}px)` },
        enter: (item, index) => {return { transform: `translateY(${endY}px) translateX(${(-1)*index*150 + 200}px)`}},
        leave: { transform: "translateY(0px) translateX(100px)" },
        config: 
        {
            tension: showItens ? 120:170, 
            friction: showItens ? 14:26        
        }
    });

    return(
        <>
        {
            entryTransitions((style, item) => (
            <animated.div style={{...style}} className="absolute self-center inset-0 max-w-[100px] z-0">
            <Link href={item.url}>
                <Image
                src={item.icon}
                width={100}
                height={100}
                alt="icon"
                style={{
                    width: '20vw',
                    height: '20vw'
                }}
                />
            </Link>
            </animated.div>))
            
        }
        </>
    )
}