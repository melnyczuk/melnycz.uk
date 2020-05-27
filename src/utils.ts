/* global fetch */
import useAsync, { AsyncState } from 'react-use/lib/useAsync';
import { Image, Work } from './models';

export function buildSrc(path: string) {
  return function (img: Image) {
    return function (size = 0) {
      if (!img) return null;
      const [dir, ext] = img?.type.split('/');
      return `${path}/${dir}/${size}/${img?.index}.${ext}`;
    };
  };
}

export function fetchData<T>(path: string): AsyncState<T> {
  return useAsync<T>(async () => await fetch(path).then((resp) => resp.json()));
}

export function findPunctumImage(work: Work): Image {
  return work?.media.images.find(({ index }) => index === work?.punctum);
}
