export const basicVertShader = `
attribute vec4 a_position;

void main() {
  gl_Position = a_position;
}
`;

export const basicImageVertShader = `
attribute vec2 a_position;
attribute vec2 a_texCoord;
uniform vec2 u_resolution;
varying vec2 v_texCoord;
void main() {
   // convert the rectangle from pixels to 0.0 to 1.0
   vec2 zeroToOne = a_position / u_resolution;
   // convert from 0->1 to 0->2
   vec2 zeroToTwo = zeroToOne * 2.0;
   // convert from 0->2 to -1->+1 (clipspace)
   vec2 clipSpace = zeroToTwo - 1.0;
   gl_Position = vec4(clipSpace * vec2(1, -1), 0, 1);
   // pass the texCoord to the fragment shader
   // The GPU will interpolate this value between points.
   v_texCoord = a_texCoord;
}
`;

export const waveFragShader = `
precision highp float;

uniform vec2 resolution;
uniform float time;
uniform vec3 color;

uniform vec2 mouse;

void main() {

  vec2 coord = (gl_FragCoord.xy / resolution.xy / 2.0) + mouse.y;

  float val = sin(time * coord.x);

  if (coord.y > val){
    gl_FragColor = vec4(color.rgb, 1.0);
  }else{
    gl_FragColor = vec4(1.0);
  }
}
`;

export const slowWaveFragShader = `
precision highp float;

uniform vec2 resolution;
uniform float time;
uniform vec3 color;

void main() {

  vec2 coord = (gl_FragCoord.xy / resolution.xy) + 0.65;
  float val = sin(time / mod(coord.x, 10.0));

  if (coord.y >= val){
    gl_FragColor = vec4(color.rgb, 1.0);
  }else{
    gl_FragColor = vec4(0.0);
  }
}
`;

export const diagonalFragShader = `
precision lowp float;

uniform float scale;
uniform vec2 resolution;
uniform float time;
uniform vec2 mouse;

// our textures
uniform sampler2D u_image0;
uniform sampler2D u_image1;

varying vec2 v_texCoord;

uniform vec3 c;
uniform float amount;

void main() {
    
  vec4 color = texture2D(u_image0, mod(vec2((v_texCoord.x - sin(time)) * amount, (v_texCoord.y - cos(time)) * scale * amount), 1.0));

  vec2 localPos = vec2(gl_FragCoord.x / (resolution.x * scale), gl_FragCoord.y);

  float dist = distance(vec2(localPos.x, localPos.y * scale), vec2(gl_FragCoord.x, gl_FragCoord.y * scale));

  if (dist <= 50.0 + abs(sin(time * 5.0) * 80.0)){
    vec4 color2 = texture2D(u_image1, mod(vec2((v_texCoord.x - sin(time)) * amount, (v_texCoord.y - cos(time)) * scale * amount), 1.0));
    if (color2.a == 0.0){
      gl_FragColor = vec4(c.r + sin(time) * 0.3, c.gb, 1.0);
    }else{
      gl_FragColor = vec4(vec3(sin(time) * 0.3), 1.0);
    }
  }else{
    if (color.a == 0.0){
        gl_FragColor = vec4(0.0);
    }else{
        gl_FragColor = vec4(c.r + sin(time) * 0.2, c.g, c.b, 1.0);
    }
  }
}
`;

export const distortionFragShader = `
precision lowp float;

uniform sampler2D u_image0;

uniform float scale;
uniform vec2 resolution;
uniform float time;

// the texCoords passed in from the vertex shader.
varying vec2 v_texCoord;

void main() {

  vec2 pos = mod(vec2(10.0 * v_texCoord.x, 10.0 * v_texCoord.y) + sin(v_texCoord.x * 10.0 + time) + cos(v_texCoord.y * 10.0 + time), smoothstep(1.0, 2.0, v_texCoord.xy + 1.5));
  pos = vec2(pos.x / scale, pos.y / scale);
  vec4 pixel = texture2D(u_image0, pos);

  gl_FragColor = vec4(pixel.rgba);
}
`;