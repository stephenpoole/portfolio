import { Color } from '../util/index';

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

export const theme: ITheme = {
    color: {
        text: Color.generate('#a53b3b'),
        background: '#ffffff'
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
