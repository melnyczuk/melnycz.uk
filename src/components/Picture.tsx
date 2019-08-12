import '../styles/Picture.scss';
import { ImageType } from '../types';
import { buildSrc } from '../utils';


export interface Props {
  image: ImageType;
  max: number;
  parent: string;
}

const getSourceComponent =
  (sourceBuilder: Function, parent: string, max: number):
  React.FunctionComponent<{ size: number }> =>
    ({ size }): JSX.Element => (
      <source
        media={`(max-width: ${Math.min(size * 0.8, max)}px)`}
        srcSet={sourceBuilder(size)}
        className={`picture--source ${parent}--source`}
      />
    );

export default ({ image, max, parent }: Props) => {
  const sourceBuilder = buildSrc(image);
  const Source = getSourceComponent(sourceBuilder, parent, max);

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
