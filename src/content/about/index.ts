import { AboutType } from '../../types';
import bio from './bio.md';

export const about: AboutType = {
  bio,
  links: [
    { name: 'Instagram', url: 'https://www.instagram.com/melnyczuk' },
    { name: 'Twitter', url: 'https://twitter.com/melnyczuk' },
    { name: 'GitHub', url: 'https://github.com/melnyczuk' },
  ],
  educations: [
    [2017, 'MA Computational Arts', 'Goldsmiths'],
    [2012, 'BA Cinema & Photography', 'University of Leeds'],
  ],
  exhibitions: [
    [2021, 'Rupert, Vilnius, Lithuania'],
    [2019, 'Taipei Artist Village, Taipei, Taiwan'],
    [2018, 'Victoria & Albert Museum, London, UK'],
    [2018, 'Next Wave Festival, Melbourne, Australia'],
    [2017, 'Bunbury Regional Art Gallery, Bunbury, Australia'],
    [2017, 'Ugly Duck, London, UK'],
    [2017, 'Goldsmiths, London, UK'],
    [2017, 'Heathcote Museum & Gallery, Perth, Australia'],
  ],
  residencies: [
    [2023, 'Medialab Matadero LAB#02, Madrid, Spain'],
    [2021, 'Rupert, Vilnius, Lithuania'],
    [2018, 'V&A Computational Arts, London, UK'],
    [2018, 'Perth Festival Lab, Perth, Australia'],
  ],
};
