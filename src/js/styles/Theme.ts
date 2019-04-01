import { Color } from '../util/Color';
import { Hex } from '../Hex';

interface IColor {
    text: string;
    background: string;
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

const textColor: Hex = Color.randomizeHue(new Hex('a53b3b'));
const backgroundColor: Hex = Color.randomizeHue(new Hex('3a1212'), textColor);

export const theme: ITheme = {
    color: {
        text: textColor.toString(),
        background: backgroundColor.toString()
    },
    font: {
        size: 16,
        sans: 'San Francisco Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
        serif: 'AbrilFatface-Regular, Times New Roman, serif'
    },
    media: {
        phone: '(max-width: 414px)',
        tablet: '(max-width: 768px)',
        desktop: '(max-width: 1400px)'
    },
    misc: {
        lineWidth: 6,
        inputPadding: 10
    }
};
