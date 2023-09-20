import { basicImageVertShader, distortionFragShader } from "./shaders";
import { getGLProgram } from "./updateShaders";
import { loadImages, render } from "./useImageShader";


export async function createDistortionShader(name: string, images: string[], speed: number){
    await loadImages(name, distortionFragShader, basicImageVertShader, images, speed, render);
}