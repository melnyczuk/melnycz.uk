import '../styles/Picture.scss';
import { ImageType } from '../types';
import { buildSrc } from '../utils';


export interface Props {
  image: ImageType;
  parent: string;
}

const getSourceComponent =
  (sourceBuilder: Function, parent: string):
  React.FunctionComponent<{ size: number }> =>
    ({ size }): JSX.Element => (
      <source
        media={`(max-width: ${size * 0.8}px)`}
        srcSet={sourceBuilder(size)}
        className={`picture--source ${parent}--source`}
      />
    );

export default ({ image, parent }: Props) => {
  const sourceBuilder = buildSrc(image);
  const Source = getSourceComponent(sourceBuilder, parent);

  return (
    <picture className={`picture ${parent}--picture`}>
      {image.sizes.map(size => (<Source key={`source-${size}`} size={size} />))}
      <img
        src={sourceBuilder(640)}
        alt={image.alt}
        className={`picture--image ${parent}--image`}
      />
    </picture>
  );
};

export { getSourceComponent };
