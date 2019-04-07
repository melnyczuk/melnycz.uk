import * as React from 'react';

import './Post.scss';

import {
  buildSrc
} from '../../utils';

import { ImageType } from '../../types';

interface PostVals {
  className: string;
  desc: string[];
  imgs: ImageType[];
  children?: JSX.Element[];
}

interface PostFuncs {
  setLong?: (data: string[]) => void;
}

interface PostProps extends PostVals, PostFuncs {
  namespace: string;
}

function buildImg(image: ImageType, i: number): JSX.Element {
  const { id, index, alt } = image;
  return (
    <img
      key={`${id}-${index}`}
      className={`post post-img post-img_${i}`}
      src={buildSrc(image)}
      alt={alt}
    />)
}

function buildParagraph(text: string, i: number): JSX.Element {
  return (
    <React.Fragment key={`desc-${i}`} >
      <p className='post post-desc' >{text}</p>
      <br />
    </React.Fragment>)
}

class Post extends React.PureComponent<PostProps> {

  constructor(props: PostProps) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.desc) {
      const { namespace } = this.props;
      fetch(`./bin/portfolio/${namespace}/${namespace}.json`)
        .then(resp => resp.json())
        .then(this.props.setLong)
    }
  }

  render() {
    const {
      imgs,
      desc,
      className,
      children,
    }: PostProps = this.props;

    return desc
      ? (
        <article className={`post ${className}`}>
          {desc.map(buildParagraph)}
          {imgs && imgs.map(buildImg)}
          {children}
        </article>
      )
      : null;
  }
};


export {
  Post,
  PostProps,
  PostVals,
  PostFuncs,
};
