/* global Float32Array console */
import { mat4 } from 'gl-matrix';
import { Uniform } from './models';

function initShaderProgram(
  gl: WebGLRenderingContext,
  vertexShader,
  fragmentShader
): WebGLProgram {
  const shaderProgram = gl.createProgram();

  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    throw new Error(
      'Unable to initialize the shader program: ' +
        gl.getProgramInfoLog(shaderProgram)
    );
  }

  return shaderProgram;
}

function compileShader(
  gl: WebGLRenderingContext,
  type: GLenum,
  source: string
): WebGLShader {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

function shaderHasCompiled(
  gl: WebGLRenderingContext,
  shader: WebGLShader
): boolean {
  return gl.getShaderParameter(shader, gl.COMPILE_STATUS);
}

function deleteShader(gl: WebGLRenderingContext, shader: WebGLShader): null {
  console.log(
    'An error occurred compiling the shaders: ' + gl.getShaderInfoLog(shader)
  );
  gl.deleteShader(shader);
  return null;
}

function loadShader(
  gl: WebGLRenderingContext,
  type: GLenum,
  source: string
): WebGLShader {
  const shader = compileShader(gl, type, source);
  return shaderHasCompiled ? shader : deleteShader(gl, shader);
}

function getAspect({ clientWidth, clientHeight }: HTMLCanvasElement): number {
  return clientWidth / clientHeight;
}

function initCam(gl: WebGLRenderingContext, shaderProgram: WebGLProgram): void {
  const fov = (45 * Math.PI) / 180; // in radians
  const aspect = getAspect(gl.canvas as HTMLCanvasElement);

  const projectionMatrix = mat4.create();
  mat4.perspective(projectionMatrix, fov, aspect, 0.1, 100.0);

  const modelViewMatrix = mat4.create();
  mat4.translate(modelViewMatrix, modelViewMatrix, [-0.0, 0.0, -1.0]);

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

  const positions = new Float32Array([
    -1.0,
    1.0,
    1.0,
    1.0,
    -1.0,
    -1.0,
    1.0,
    -1.0,
  ]);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const vertexPosition = gl.getAttribLocation(shaderProgram, 'aVertexPosition');

  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(vertexPosition, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(vertexPosition);

  gl.useProgram(shaderProgram);

  gl.uniformMatrix4fv(
    gl.getUniformLocation(shaderProgram, 'uProjectionMatrix'),
    false,
    projectionMatrix
  );

  gl.uniformMatrix4fv(
    gl.getUniformLocation(shaderProgram, 'uModelViewMatrix'),
    false,
    modelViewMatrix
  );
}

function invokeUniforms(gl: WebGLRenderingContext, shaderProgram, uniforms) {
  uniforms.forEach(({ type, name, value }) => {
    gl[`uniform${type}`](gl.getUniformLocation(shaderProgram, name), value);
  });
}

function clear(gl: WebGLRenderingContext) {
  gl.clearColor(0.0, 0.0, 0.0, 1.0); // Clear to black, fully opaque
  gl.clearDepth(1.0); // Clear everything
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
}

type Init = (v, f) => WebGLProgram;
function init(gl: WebGLRenderingContext): Init {
  return !gl
    ? null
    : (vert, frag): WebGLProgram => {
        const vertexShader = loadShader(gl, gl.VERTEX_SHADER, String(vert));
        const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, String(frag));
        const shaderProgram = initShaderProgram(
          gl,
          vertexShader,
          fragmentShader
        );

        clear(gl);
        initCam(gl, shaderProgram);

        return shaderProgram;
      };
}

type Draw = (s: WebGLShader, u: Uniform<number | number[]>[]) => void;
function draw(gl: WebGLRenderingContext): Draw {
  return !gl
    ? null
    : (shaderProgram, uniforms) => {
        const offset = 0;
        const vertexCount = 4;
        invokeUniforms(gl, shaderProgram, uniforms);
        gl.drawArrays(gl.TRIANGLE_STRIP, offset, vertexCount);

        if (gl.getError()) {
          console.log('error code', gl.getError());
        }
      };
}

export default function getGL(
  canvas: HTMLCanvasElement
): { error: boolean; init: Init; draw: Draw } {
  const gl = canvas?.getContext('webgl');
  return { error: !gl, init: init(gl), draw: draw(gl) };
}
