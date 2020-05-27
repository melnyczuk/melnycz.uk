import React, { FC } from 'react';
import Link from 'next/link';

import { shaders } from '../../../static/info.json';
import PageTitle from '../../components/PageTitle';
import './ShaderIndex.scss';

const SHADERS_ROUTE = '/shaders';

const ShaderIndex: FC = () => (
  <>
    <PageTitle>Shaders</PageTitle>
    <ul className="shader-index">
      {shaders?.map((file) => (
        <Link key={file} href={`${SHADERS_ROUTE}/${file}`}>
          <li className="shader-index__list-item">{`${file}`}</li>
        </Link>
      ))}
    </ul>
  </>
);

export default ShaderIndex;
