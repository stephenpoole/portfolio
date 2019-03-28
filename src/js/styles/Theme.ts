import { Color } from '../util/index';
import { RGB } from '../RGB';

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
}

export interface ITheme {
    color: IColor;
    font: IFont;
    media: IMedia;
    misc: IMisc;
}

const textColor: RGB = Color.randomizeHue(new RGB('a53b3b'));
const backgroundColor: RGB = Color.randomizeHue(new RGB('3a1212'), textColor);

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
        lineWidth: 6
    }
};
