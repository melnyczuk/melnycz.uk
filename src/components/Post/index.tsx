import * as React from 'react';

import { ContainerType } from "../../store/types";
import Axios from 'axios';
import { fetchLongDescriptions } from '../../store/works/works.utils';
import { postActions } from '../../store/works/works.actions';

interface PostProps {
  namespace: string;
  title: string;
  short: string;
  long: string;
  longPath?: string;
  className?: string;
  children?: Array<ContainerType | JSX.Element>;
  setLong?: (data: string) => void;
}

class Post extends React.PureComponent<PostProps> {

  constructor(props: PostProps) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.long && this.props.longPath) {
      fetchLongDescriptions(this.props.longPath).then(data => {
        console.log(data);
        this.props.setLong(data);
      });
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
  PostProps
};
