/* global fetch */
import React, { FC, useState, useEffect } from 'react';
import { DynamicPageProps } from '../../hoc/DynamicPage';

import Loader from '../../components/Loader';
import Shader from '../../components/Shader';

async function fetchShader(path: string): Promise<string> {
  return fetch(path).then((resp: Response): Promise<string> => resp.text());
}

const ShaderPage: FC<DynamicPageProps> = ({ namespace }) => {
  const [vert, setVert] = useState<string>();
  const [frag, setFrag] = useState<string>();

  useEffect(() => {
    fetchShader('/static/shaders/vertex.c').then(setVert);
    fetchShader(`/static/shaders/fragment/${namespace}.c`).then(setFrag);
  }, [namespace]);

  return (
    <Loader<string> waitOn={[vert, frag]}>
      <Shader
        className="shader"
        vert={vert}
        frag={frag}
        width={640.0}
        height={640.0}
      />
    </Loader>
  );
};

export default ShaderPage;
