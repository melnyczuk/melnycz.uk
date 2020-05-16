/* global fetch Promise */
import React, { FC, useState, useEffect } from 'react';
import Link from 'next/link';

import Loader from '../../components/Loader';
import PageTitle from '../../components/PageTitle';
import './ShaderIndex.scss';

const SHADERS_ROUTE = '/shaders';

const ShaderIndex: FC = () => {
  const [shaderNames, setShaderNames] = useState<string[]>();

  useEffect(() => {
    fetch('/static/shaders/index.json')
      .then((resp: Response): Promise<string[]> => resp.json())
      .then(setShaderNames);
  }, [setShaderNames]);

  return (
    <Loader<string> waitOn={shaderNames}>
      <PageTitle>Shaders</PageTitle>
      <ul className="shader-index">
        {shaderNames?.map((file) => (
          <Link key={file} href={`${SHADERS_ROUTE}/${file}`}>
            <li className="shader-index__list-item">{`${file}`}</li>
          </Link>
        ))}
      </ul>
    </Loader>
  );
};

export default ShaderIndex;
