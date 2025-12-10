import anthropos from './images/00-anthropos.jpg'
import demiurgos from './images/01-demiurgos.jpg'
import astaroth from './images/02-astaroth.jpg'
import kether from './images/03-kether.jpg'
import chokmah from './images/04-chokmah.jpg'
import binah from './images/05-binah.jpg'
import chesed from './images/06-chesed.jpg'

export const majorArcana = [
    {
        id: 'Anthropos',
        number: 0,
        imageSrc: anthropos
    },
    {
        id: 'Demiurgos',
        number: 1,
        imageSrc: demiurgos
    },
    {
        id: 'Astaroth',
        number: 2,
        imageSrc: astaroth
    },
    {
        id: 'Kether',
        number: 3,
        imageSrc: kether
    },
    {
        id: 'Chokmah',
        number: 4,
        imageSrc: chokmah
    },
    {
        id: 'Binah',
        number: 5,
        imageSrc: binah
    },
    {
        id: 'Chesed',
        number: 6,
        imageSrc: chesed
    }
]
export const minorArcana = []

export const tarotList = [...majorArcana, ...minorArcana]