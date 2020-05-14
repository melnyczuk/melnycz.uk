import React, { FC } from 'react';
import Link from 'next/link';

import PageTitle from '../../components/PageTitle';
import './ShaderIndex.scss';

export const N = 5;

const SHADERS_ROUTE = '/shaders';

const ShaderIndex: FC = () => (
  <>
    <PageTitle>Shaders</PageTitle>
    <ul className="shader-index">
      {Array(N).fill(0).map((_, i) => (
        <Link key={i} href={`${SHADERS_ROUTE}/${i}`}>
          <li className="shader-index__list-item">
            {`${i}`}
          </li>
        </Link>
      ))}
    </ul>
  </>
);  

export default ShaderIndex;
