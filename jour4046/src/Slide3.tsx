import { useEffect } from "react";
import { CanvasBlock } from "./utils/glsl/CanvasBlock";
import { createDistortionShader2 } from "./utils/glsl/distortionShader2";


export function Slide3(){
    
    useEffect(() =>{
        createDistortionShader2('slide3-gl', 0.005);
    }, [])

    return (
        <div className="relative w-full h-screen flex flex-col justify-start items-center text-white">
            <CanvasBlock id="slide3-gl" canvasW={1000} canvasH={1000} />

            <div className="w-2/3 h-fit absolute flex justify-start items-center m-10 text-4xl font-bold">
                <p>Problem</p>
            </div>

        </div>
    )
}