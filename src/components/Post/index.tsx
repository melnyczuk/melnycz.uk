import * as React from 'react';
import yaml from 'js-yaml';

import './Post.scss';

import { ImageType } from '../../types';
import { Picture } from '../Picture';

interface PostVals {
  className: string;
  description: string[];
<<<<<<< Updated upstream
  baseUrl: string;
=======
  title?: string;
>>>>>>> Stashed changes
  images?: ImageType[];
  children?: JSX.Element[];
}

interface PostFuncs {
  setDesc?: (data: string[]) => void;
}

interface PostProps extends PostVals, PostFuncs {
  namespace: string;
}

const buildImages =
  (image: ImageType, i: number): JSX.Element => (
    <Picture
      key={`${image.namespace}-${image.index}`}
      image={image}
      parent='post'
    />
  );

const buildParagraph = (text: string, i: number): JSX.Element => (
  <React.Fragment key={`desc-${i}`} >
    <p className='post post-desc'>{text}</p>
    <br />
  </React.Fragment>
);

const Post: React.FunctionComponent<PostProps> =
  ({ namespace, title, images, description, children, setDesc }) =>
    {
      useEffect((): void => {
        (async () => {
          if (!description) {
            await fetch(`./bin/copy/${namespace}.yaml`)
              .then(async resp => await resp.text())
              .then(yaml.load)
              .then(({ description }: any) => description)
              .then(setDesc);
          }
        })();
      });

class Post extends React.PureComponent<PostProps> {

  constructor(props: PostProps) {
    super(props);
  }

  componentDidMount() {
    const { namespace, description, setDesc } = this.props;
    if (!description) {
      fetch(`./bin/copy/${namespace}.yaml`)
        .then(async resp => await resp.text())
        .then(yaml.load)
        .then(({ description }: any) => description)
        .then(setDesc);
    }
  }

  render() {
    const {
      images,
      baseUrl,
      description,
      className,
      children,
    }: PostProps = this.props;

    return (
        <article className={`post${className && ' ' + className}`}>
          {description && description.map(buildParagraph)}
          {images && images.map(buildImages)}
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
