import React, { useState } from 'react';

import Picture from './Picture';
import Post from './Post';

import { ImageType } from '../types';

export interface Props { image: ImageType; namespace: string; }

export default ({ image, namespace }: Props) => {
  const [visible, setVisible] = useState(false);
  return (image ? (
    <div>
      <div className='punctum' onClick={() => setVisible(!visible)}>
        <Picture image={image} parent='punctum' max={800} />
        {/* {title && <Label title={title} parent='punctum' />} */}
      </div>
      {visible && <Post namespace={namespace} />}
    </div>
  ) : null);
}
