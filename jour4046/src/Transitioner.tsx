import EventEmitter from "eventemitter3";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { removeGLs } from "./utils/glsl/updateShaders";
import { delay } from "./utils/delay";

export const EE = new EventEmitter()

export function Transitioner(){

    const [transitionScope, transitionAnimate] = useAnimate();

    const navigate = useNavigate();

    async function FadeIn(path: string){
        await transitionAnimate(transitionScope.current, {opacity: 1}, {duration: 0.5});
        removeGLs([]);
        navigate(path);
        await delay(500);
        FadeOut();
    }

    async function FadeOut(){
        transitionAnimate(transitionScope.current, {opacity: 0}, {duration: 0.5});
    }

    useEffect(() =>{
        EE.on('transition', (e) =>{
            FadeIn(e);
        });
        FadeOut();

    }, [])

    return (
        <motion.div ref={transitionScope} className=" absolute w-full h-screen bg-black z-50 pointer-events-none"
            initial={{opacity: 1}}>

        </motion.div>
    )
}