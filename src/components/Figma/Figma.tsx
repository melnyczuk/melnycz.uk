import React, { FC, HTMLAttributes } from 'react';

import './Figma.scss';

function validateFigmaUrl(url: string): RegExpMatchArray {
  return url.match(
    /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/
  );
}

interface FigmaProps extends HTMLAttributes<HTMLIFrameElement> {
  src: string;
  height?: number;
  width?: number;
}

const Figma: FC<FigmaProps> = ({
  src,
  className = '',
  height = 800,
  width = 800,
}) => {
  const figmaUrl =
    validateFigmaUrl(src)?.reduce((validUrl) => validUrl) || null;

  if (!figmaUrl) return null;

  return (
    <iframe
      className={`figma ${className}`.trim()}
      height={height}
      width={width}
      src={`https://www.figma.com/embed?embed_host=share&url=${figmaUrl}`}
      allowFullScreen
    />
  );
};

export default Figma;
