import * as React from 'react';

import { ContainerType } from "../../types";
import { fetchLongDescriptions } from '../../store/portfolio/portfolio.utils';

interface PostVals {
  className: string;
  title: string;
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
      title,
      short,
      long,
      className,
      children,
    }: PostProps = this.props;

    return long
      ? (
        <article className={className}>
          {title && <h2 key="title">{title}</h2>}
          {short && <p key="short" className="work-desc work-desc-short">{short}</p>}
          {long && <p>{long}</p>}
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
