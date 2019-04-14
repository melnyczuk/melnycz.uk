import * as React from 'react';

import './Post.scss';

import { ImageType } from '../../types';

interface PostVals {
  className: string;
  desc: string[];
  imgs: ImageType[];
  children?: JSX.Element[];
}

interface PostFuncs {
  setDesc?: (data: string[]) => void;
}

interface PostProps extends PostVals, PostFuncs {
  namespace: string;
}

const buildSrc = ({ path = '', namespace = '', index = 0, ext = '' }: ImageType): string => {
  return `${path}/${namespace}-${index}.${ext}`
}

function buildImg(image: ImageType, i: number): JSX.Element {
  const { namespace, index, alt } = image;
  return (
    <img
      key={`${namespace}-${index}`}
      className={`post post-img post-img_${i}`}
      src={buildSrc(image)}
      alt={alt}
    />)
}

function buildParagraph(text: string, i: number): JSX.Element {
  console.log('wtf');
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
    const { namespace, desc } = this.props;
    if (!desc) {
      fetch(`./bin/portfolio/${namespace}/${namespace}.json`)
        .then(async resp => await resp.json())
        .then(({ desc }) => {
          console.log(typeof desc);
          return desc;
        })
        .then(this.props.setDesc);
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
