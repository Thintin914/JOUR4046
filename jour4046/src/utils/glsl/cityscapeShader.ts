import { basicImageVertShader, cityscapeFragShader } from "./shaders";
import { addNeedScrollGL } from "./updateShaders";
import { loadImages, render } from "./useImageShader";


export async function createCityscapeShader(name: string, images: string[], speed: number){
    await loadImages(name, cityscapeFragShader, basicImageVertShader, images, speed, render);

    addNeedScrollGL(name, 1);

}