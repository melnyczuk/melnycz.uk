import { FC } from 'react';

import { ImageType } from '../../types';
import Image from '../Image/Image';
import styles from './Gallery.module.scss';

type GalleryProps = {
  images: ImageType[];
  onClose: () => void;
};

const Gallery: FC<GalleryProps> = ({ images, onClose }) => (
  <div
    className={styles['gallery']}
    tabIndex={0}
    role="button"
    aria-label="close"
    onKeyDown={onClose}
    onClick={onClose}
  >
    {images.map((image) => (
      <Image
        key={image.name}
        className={styles['gallery__image']}
        name={image.name}
        src={image.src}
        width={image.width}
        height={image.height}
        thumbnail={image.thumbnail}
      />
    ))}
  </div>
);

export default Gallery;
