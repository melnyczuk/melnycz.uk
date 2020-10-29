import React, { FC } from 'react';

import Figma from '../../components/Figma';

const FIGMA_SRC =
  'https://www.figma.com/file/CaYnsRLZDCMAQUM0U5smdf/Microservices-as-Art';

const ProjectArchitecture: FC = () => <Figma src={FIGMA_SRC} />;

export default ProjectArchitecture;
