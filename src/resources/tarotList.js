import { descriptions } from './descriptions';
import anthropos from './images/00-anthropos.jpg';
import demiurgos from './images/01-demiurgos.jpg';
import astaroth from './images/02-astaroth.jpg';
import kether from './images/03-kether.jpg';
import chokmah from './images/04-chokmah.jpg';
import binah from './images/05-binah.jpg';
import chesed from './images/06-chesed.jpg';

export const majorArcana = [
  {
    id: 'Anthropos',
    number: 0,
    imageSrc: anthropos,
    description: descriptions.anthropos,
  },
  {
    id: 'Demiurgos',
    number: 1,
    imageSrc: demiurgos,
    description: descriptions.demiurgos,
  },
  {
    id: 'Astaroth',
    number: 2,
    imageSrc: astaroth,
    description: descriptions.astaroth,
  },
  {
    id: 'Kether',
    number: 3,
    imageSrc: kether,
    description: descriptions.kether,
  },
  {
    id: 'Chokmah',
    number: 4,
    imageSrc: chokmah,
    description: descriptions.chokmah,
  },
  {
    id: 'Binah',
    number: 5,
    imageSrc: binah,
    description: descriptions.binah,
  },
  {
    id: 'Chesed',
    number: 6,
    imageSrc: chesed,
    description: descriptions.chesed,
  },
];
export const minorArcana = [];

export const tarotList = [...majorArcana, ...minorArcana];
