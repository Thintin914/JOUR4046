import { useEffect } from "react"
import { createDistortionShader } from "./utils/glsl/distortionShader"
import { CanvasBlock } from "./utils/glsl/CanvasBlock";
import { motion, useAnimate } from "framer-motion";
import { EE } from "./Transitioner";
import { createCityscapeShader } from "./utils/glsl/cityscapeShader";

export function Introduction(){

    useEffect(() =>{
        createCityscapeShader('intro-gl', ['./images/cityscape.jpg'], 0.001);
    }, [])

    return (
        <div className=" relative flex flex-col justify-start items-center w-full h-[500vh]">

            <div className=" fixed w-full h-screen">
                <CanvasBlock id="intro-gl" canvasW={1000} canvasH={1000} />
            </div>

        </div>
    )
}