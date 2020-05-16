import React, { FC, useRef, useEffect, useState, HTMLAttributes } from 'react';
import { useRaf } from 'react-use';

import getGl from './utils';

const ErrorMsg: FC<{ msg: string }> = ({ msg }) => <p>{msg}</p>;

function setupShaderProgram(canvas: HTMLCanvasElement, vert, frag) {
  if (!canvas) {
    return;
  }

  const { error, init, draw } = getGl(canvas);

  if (error) {
    return;
  }

  const program = init(vert, frag);
  const size = [canvas?.clientWidth, canvas?.clientHeight];

  return (uTime: number) =>
    draw(program, [
      { type: '1f', name: 'u_time', value: uTime },
      { type: '2fv', name: 'u_res', value: size },
    ]);
}

function updateUniforms(update) {
  const timestamp = useRaf(2000, 1000);
  const uTime = timestamp / 10000;
  return update ? update(uTime) : null;
}

interface ShaderProps extends HTMLAttributes<HTMLCanvasElement> {
  vert: string;
  frag: string;
  width: number;
  height: number;
}

const Shader: FC<ShaderProps> = ({
  vert,
  frag,
  className,
  width = 1200,
  height = 1500,
}) => {
  const canvas = useRef<HTMLCanvasElement>();

  const [update, setUpdate] = useState<Function>(null);
  const [error, setError] = useState<Error>(null);

  useEffect(() => {
    try {
      setUpdate(setupShaderProgram(canvas.current, vert, frag));
    } catch (e) {
      setError(e);
    }
  }, [canvas.current]);

  update && updateUniforms(update);

  if (error) {
    return <ErrorMsg msg={error.message} />;
  }

  return (
    <div className="container">
      <canvas
        ref={canvas}
        id="glCanvas"
        className={`glCanvas ${className}`.trim()}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Shader;
