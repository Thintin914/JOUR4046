import { useEffect } from "react"
import { createDistortionShader } from "./utils/glsl/distortionShader"
import { CanvasBlock } from "./utils/glsl/CanvasBlock";
import { motion, useAnimate } from "framer-motion";
import { EE } from "./Transitioner";

export function Introduction(){

    useEffect(() =>{
        createDistortionShader('intro-gl', ['./images/white-wave-bg.jpg'], 0.005);
        createDistortionShader('intro-gl2', ['./images/black-wave-bg.jpg'], 0.005);
    }, [])

    return (
        <div className=" relative flex flex-col justify-center items-center w-full h-screen">

            <CanvasBlock id="intro-gl" canvasW={1000} canvasH={1000} />

            <motion.div className=" absolute w-2/3 lg:w-1/3 h-[66vw] lg:h-[33vw] bg-white hover:cursor-pointer"
                initial={{scaleX: 8, scaleY: 0.5, opacity: 0}}
                transition={{duration: 0.5}}
                whileInView={{scaleX: 1, scaleY: 1, opacity: 1}}
                whileHover={{scaleX: 1.5}}
                onClick={() =>{
                    EE.emit('transition', 'slide2');
                }}>
                <CanvasBlock id="intro-gl2" canvasW={1000} canvasH={1000} />
            </motion.div>

            <motion.div className=" absolute flex flex-col justify-center items-center w-2/3 lg:w-1/3 h-1/2 text-white text-2xl text-center pointer-events-none"
                initial={{scale: 2, opacity: 0}}
                transition={{duration: 0.5}}
                whileInView={{scale: 1, opacity: 1}}>
                <p className=" font-light">JOUR4046</p>
                <p className=" font-light">Incoming Housing Crisis in Hong Kong</p>
                <br />

                <div className=" w-full flex flex-col justify-center items-center font-extralight">

                    <div className=" w-full h-fit flex flex-row justify-around items-center gap-5">
                        <p>Jacky Wu</p>
                        <p>Vincent Chan</p>
                    </div>

                    <div className=" w-full h-fit flex flex-row justify-around items-center gap-5">
                        <p>Joyce</p>
                        <p>Fanny</p>
                    </div>

                </div>

            </motion.div>

        </div>
    )
}