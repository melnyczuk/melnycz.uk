import * as React from 'react';

import './Post.scss';

import { fetchLongDescriptions } from '../../store/portfolio/portfolio.utils';
import { ImageType } from '../../types';

interface PostVals {
  className: string;
  short: string;
  longPath: string;
  long: string;
  imgs: ImageType[];
  children?: JSX.Element[];
}

interface PostFuncs {
  setLong?: (data: string) => void;
}

interface PostProps extends PostVals, PostFuncs {
  namespace: string;
}

class Post extends React.PureComponent<PostProps> {

  constructor(props: PostProps) {
    super(props);
  }

  componentDidMount() {
    const {
      longPath
    } = this.props;

    if (!this.props.long && longPath) {
      fetchLongDescriptions(longPath).then(
        data => this.props.setLong(data)
      );
    }
  }

  buildImg({ id, path, ext, alt }: ImageType, i: number): JSX.Element {
    return (
      <img
        key={id}
        className={`post post-img post-img_${i}`}
        src={`${path}/${id}.${ext}`}
        alt={alt}
      />)
  }


  render() {

    const {
      imgs,
      short,
      long,
      className,
      children,
    }: PostProps = this.props;

    // export interface ImageType {
    //   id: string;
    //   path: string;
    //   ext: string;
    //   title?: string;
    //   rank?: number;
    //   description?: DescriptionType;
    // }

    return long
      ? (
        <article className={`post ${className}`}>
          {short && <p className='post post-short' key='short'>{short}</p>}
          {long && <p className='post post-long' key='long' >{long}</p>}
          {imgs && imgs.map(this.buildImg)}
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
