import { basicVertShader, distortionFragShader2 } from "./shaders";
import { addGLToUpdate } from "./updateShaders";
import { createShader } from "./useShader";


export function createDistortionShader2(name: string, speed: number){

    var temp = createShader(name, basicVertShader, distortionFragShader2);
    if (!temp) return;

    var gl = temp.gl;
    var program = temp.program;

    var location = gl.getUniformLocation(program, "resolution");
    gl.uniform2f(location, gl.canvas.width, gl.canvas.height);

    location = gl.getUniformLocation(program, "time");
    gl.uniform1f(location, Math.random() * 10000);

    addGLToUpdate(name, gl, program, speed);
}