import { useEffect } from "react";
import { CanvasBlock } from "./utils/glsl/CanvasBlock";
import { createDistortionShader } from "./utils/glsl/distortionShader";
import { createDistortionShader2 } from "./utils/glsl/distortionShader2";
import { motion } from "framer-motion";
import { EE } from "./Transitioner";



export function Slide2(){

    useEffect(() =>{
        createDistortionShader('slide2-gl', ['./images/black-wave-bg.jpg'], 0.0001);
        createDistortionShader2('slide2-gl2', 0.005);
    }, [])

    return (
        <div className="relative w-full h-screen flex flex-col justify-start items-center text-white">
            <CanvasBlock id="slide2-gl" canvasW={1000} canvasH={1000} />

            <div className="w-2/3 h-fit absolute flex justify-start items-center m-10 text-4xl font-bold">
                <p>Problem</p>
            </div>

            <motion.div className=" w-60 h-60 absolute right-0 bottom-0 hover:cursor-pointer"
                initial={{scale: 1}}
                whileHover={{scale: 2}}
                transition={{duration: 1.2}}
                onClick={() =>{
                    EE.emit('transition', 'slide3');
                }}>
                <CanvasBlock id="slide2-gl2" canvasW={1000} canvasH={1000} />
            </motion.div>

        </div>
    )
}