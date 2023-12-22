import { useSpring, useSpringRef,animated } from "@react-spring/web";
import { useHover } from "react-use-gesture";
import { useRef } from "react";

export default function LinksButton({showItens, setShowItens}: {showItens: boolean, setShowItens: Function}){
    const timeoutIdRef = useRef<NodeJS.Timeout | undefined>(undefined);
    const animationFlagRef = useRef<boolean>(false)

    const springApi = useSpringRef()
    const spring = useSpring({
        ref: springApi
    })

    const bind = useHover((event) => {
        const width = window.innerWidth;
        const originalPadding = width >= 1536 ? '3rem':'1.5rem';
        const movePadding = width >= 1536 ? '2.5rem':'1rem';

        const config = {
            tension: 120, 
            friction: 14      
        }

        if(!animationFlagRef.current){
            if(event.hovering){
                springApi.start(
                    {
                        padding: movePadding,
                        backgroundColor: ' rgb(206,216,157)',
                        config: {...config}
                    }
                )
            }
            else{
                springApi.start(
                    {
                        padding: originalPadding,
                        backgroundColor: 'rgb(205,233,202)',
                        config: {...config}
                    }
                )
            }
        }
    });

    
    const buttonClickAnimation = (type) => {
        const width = window.innerWidth;
        const originalPadding = width >= 1536 ? '3rem':'1.5rem';
        const decreasePadding = width >= 1536 ? '2.5rem':'1rem';
        const amplifyPadding =  width >= 1536 ? '3.5rem':'2rem';

        if(type == 1){
            springApi.start(
                {
                    from:{
                        transform: "rotate(0deg)",
                        padding: decreasePadding
                    },
                    to:
                    async (next, cancel) => {
                        animationFlagRef.current = true;
                        await next({
                            padding: amplifyPadding
                        })
                        await next({
                            backgroundColor: 'rgb(205,233,202)',
                            padding: originalPadding
                        })
                        animationFlagRef.current = false;
                    },
                    config: {
                        tension: 120, 
                        friction: 14,
                        duration: 200
                    },
                    
                }
            )
        }
        else {
            springApi.start(
                {
                    from:{
                        padding: decreasePadding
                    },
                    to:
                    async (next, cancel) => {
                        animationFlagRef.current = true;
                        await next({
                            padding: amplifyPadding
                        })
                        await next({
                            padding: originalPadding,
                            backgroundColor: 'rgb(205,233,202)' 
                        })
                        animationFlagRef.current = false;
                    },
                    config: {
                        tension: 120, 
                        friction: 14,
                        duration: 300
                    },
                    
                }
            )
        }
    }


    const handleShowLinks = (e: Event) => {
        e.preventDefault();

        if(showItens){
            clearTimeout(timeoutIdRef.current);
            buttonClickAnimation(2);
        }
        else{
            const id: NodeJS.Timeout = setTimeout(() => {
                setShowItens(false);
                buttonClickAnimation(2);
            }, 5000)

            timeoutIdRef.current = id;

            buttonClickAnimation(1);
        }

        setShowItens(!showItens);
    }

    return(
        <animated.button 
        {...bind()} 
        style={spring} 
        onClick={(e: any) => handleShowLinks(e)}  
        className="relative z-10 bg-light-green-1 xl:p-12 p-6 m-5 rounded-3xl shadow-2xl xl:text-[1.5vw] text-[4vw]">
            Links e mais contatos
        </animated.button>
    )
}