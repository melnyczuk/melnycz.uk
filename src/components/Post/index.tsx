import * as React from 'react';

import './Post.scss';

import { ContainerType } from "../../types";
import { fetchLongDescriptions } from '../../store/portfolio/portfolio.utils';

interface PostVals {
  className: string;
  short: string;
  long: string;
  longPath?: string;
  children?: ContainerType[] | JSX.Element[];
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
    if (!this.props.long && this.props.longPath) {
      fetchLongDescriptions(this.props.longPath).then(
        data => this.props.setLong(data)
      );
    }
  }

  render() {

    const {
      short,
      long,
      className,
      children,
    }: PostProps = this.props;

    return long
      ? (
        <article className={`post ${className}`}>
          {short && <p className='post post-short' key='short'>{short}</p>}
          {long && <p className='post post-long' key='long' >{long}</p>}
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
