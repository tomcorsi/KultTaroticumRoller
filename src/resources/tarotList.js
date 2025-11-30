import anthropos from './images/00-anthropos.jpg'
import demiurgos from './images/01-demiurgos.jpg'

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
    }
]
export const minorArcana = []

export const tarotList = [...majorArcana, ...minorArcana]