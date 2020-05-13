import React, { FC } from 'react';

import Figma from '../../components/Figma';
import PageTitle from '../../components/PageTitle';

const FIGMA_SRC = "https://www.figma.com/file/CaYnsRLZDCMAQUM0U5smdf/Microservices-as-Art";

const ProjectArchitecture: FC = () => (
  <>
    <PageTitle>Microservices as Art</PageTitle>
    <Figma src={FIGMA_SRC} />
  </>
);

export default ProjectArchitecture;
