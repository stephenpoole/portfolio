import { Color } from '../util/Color';
import { Hex } from '../Hex';

interface IColor {
    text: string;
    background: string;
    pairs: Hex[][];
}

interface IFont {
    size: number;
    sans: string;
    serif: string;
}

interface IMedia {
    phone: string;
    tablet: string;
    desktop: string;
}

interface IMisc {
    lineWidth: number;
    inputPadding: number;
}

export interface ITheme {
    color: IColor;
    font: IFont;
    media: IMedia;
    misc: IMisc;
}

const pairs: Hex[][] = [0, 0, 0].map(() =>
    Color.generatePair(new Hex('a53b3b'), new Hex('3a1212'))
);

export const theme: ITheme = {
    color: {
        text: pairs[0][0].toString(),
        background: pairs[0][1].toString(),
        pairs
    },
    font: {
        size: 16,
        sans: 'San Francisco Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
        serif: 'AbrilFatface-Regular, Times New Roman, serif'
    },
    media: {
        phone: '@media(max-width: 414px)',
        tablet: '@media(max-width: 768px)',
        desktop: '@media(max-width: 1022px)'
    },
    misc: {
        lineWidth: 6,
        inputPadding: 10
    }
};
