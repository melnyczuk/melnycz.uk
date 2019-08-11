import '../styles/Picture.scss';
import { ImageType } from '../types';
import { buildSrc } from '../utils';
import '../styles/Picture.scss';

export interface Props {
  image: ImageType;
  max: number;
  parent: string;
}


export default ({ image, max, parent }: Props) => {
  const sourceBuilder = buildSrc(image);
  const getSources = (size: number, i: number) => {
    const sourceProps = {
      key: `source-${i}`,
      media: `(max-width: ${Math.min(size * 0.8, max)}px)`,
      srcSet: sourceBuilder(size),
      className: `picture--source ${parent}--source`,
    }

    return (
      <source {...sourceProps} />
    )
  }

  return (
    <picture className={`picture ${parent}--picture`}>
      {image.sizes.map(getSources)}
      <img
        src={sourceBuilder(640)}
        alt={image.alt}
        className={`picture--image ${parent}--image`}
      />
    </picture>
  );
};
