import * as React from 'react';

import './Post.scss';

import { ImageType } from '../../types';
import { buildSrc } from '../../utils';

interface PostVals {
  baseURL: string;
  className: string;
  description: string[];
  imgs?: ImageType[];
  children?: JSX.Element[];
}

interface PostFuncs {
  setDesc?: (data: string[]) => void;
}

interface PostProps extends PostVals, PostFuncs {
  namespace: string;
}

const buildImg = (baseUrl: string, type: string) =>
  (image: ImageType, i: number): JSX.Element => {
    const { namespace, index, alt } = image;
    return (
      <img
        key={`${namespace}-${index}`}
        className={`post post-img post-img_${i}`}
        src={buildSrc(baseUrl, type)(image)}
        alt={alt}
      />);
  };

const buildParagraph = (text: string, i: number): JSX.Element => (
  <React.Fragment key={`desc-${i}`} >
    <p className='post post-desc' >{text}</p>
    <br />
  </React.Fragment>
);


class Post extends React.PureComponent<PostProps> {

  constructor(props: PostProps) {
    super(props);
  }

  componentDidMount() {
    const { namespace, description, setDesc } = this.props;
    if (!description) {
      fetch(`./bin/copy/${namespace}.json`)
        .then(async resp => await resp.json())
        .then(({ description }) => description)
        .then(setDesc);
    }
  }

  render() {
    const {
      baseURL,
      imgs,
      description,
      className,
      children,
    }: PostProps = this.props;

    const buildImages = buildImg(baseURL, 'images');

    return (
        <article className={`post ${className}`}>
          {description && description.map(buildParagraph)}
          {imgs && imgs.map(buildImages)}
          {children}
        </article>
      );
  }
};

export {
  Post,
  PostProps,
  PostVals,
  PostFuncs,
};
