import React from 'react';
import { ThemeConsumer } from 'styled-components';
import { theme } from '../styles/index';
import { ColorTweener } from '../util/Color';
import { Scroll } from '../util/index';

const textTween = new ColorTweener(theme.color.pairs.map(color => color[0]));
const backgroundTween = new ColorTweener(theme.color.pairs.map(color => color[1]));

export const TweenColorsViaScroll: React.FC<{}> = () => {
    return (
        <ThemeConsumer>
            {theme => {
                window.addEventListener('scroll', () => {
                    const progress = Scroll.getProgress();
                    const text = textTween.getColor(progress);
                    const background = backgroundTween.getColor(progress);

                    theme.color.text = text;
                    theme.color.background = background;
                });

                return <div />;
            }}
        </ThemeConsumer>
    );
};
