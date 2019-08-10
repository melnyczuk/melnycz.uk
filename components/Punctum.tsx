import React, { useState } from 'react';

import Picture from './Picture';
import Post, { Props as PostProps } from './Post';

import { ImageType } from '../types';

export interface Props extends PostProps { punctum: ImageType }

export default ({ namespace, punctum, images }: Props) => {
  const [visible, setVisible] = useState(false);
  return (punctum ? (
    <div>
      <div className='punctum' onClick={() => setVisible(!visible)}>
        <Picture image={punctum} parent='punctum' max={800} />
        {/* {title && <Label title={title} parent='punctum' />} */}
      </div>
      {visible && <Post namespace={namespace} images={images} />}
    </div>
    ) : null
  );
}
