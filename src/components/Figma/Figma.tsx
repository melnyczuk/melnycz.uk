import React, { FC, HTMLAttributes } from 'react';

import './Figma.scss';

function validateFigmaUrl(url: string): RegExpMatchArray {
  return url.match(
    /https:\/\/([\w.-]+\.)?figma.com\/(file|proto)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/
  );
}

interface FigmaProps extends HTMLAttributes<HTMLIFrameElement> {
  src: string;
}

const Figma: FC<FigmaProps> = ({ src, className = '' }) => {
  const figmaUrl =
    validateFigmaUrl(src)?.reduce((validUrl) => validUrl) || null;

  if (!figmaUrl) return null;

  return (
    <div className="iframe-wrapper">
      <iframe
        className={`figma ${className}`.trim()}
        height="100%"
        width="100%"
        src={`https://www.figma.com/embed?embed_host=share&url=${figmaUrl}`}
        allowFullScreen
      />
    </div>
  );
};

export default Figma;
