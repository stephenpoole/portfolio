import React, { useState } from 'react';
import styled from 'styled-components';
import { Scroll } from '../util/index';

export interface IScrollItem {
    height?: number;
    top: number;
}

interface IProps {
    className?: string;
    count: number;
}

interface IStyleProps {
    className: string;
    progress: number;
    count: number;
}

const ScrollTrackerWrapper = styled.div.attrs(({ progress }: IStyleProps) => ({
    style: {
        top: `${progress * 100}%`
    }
}))<IStyleProps>`
    position: absolute;
    height: ${({ count }) => `${100 / count}%`};
    width: ${({ theme }) => `${theme.misc.lineWidth}px`};
    left: 0;
    background: ${({ theme }) => `${theme.color.text}`};
    transition: 0.1s transform;
`;

export const ScrollTracker: React.FC<IProps> = ({ className, count }) => {
    const [progress, setProgress] = useState(Scroll.getProgress());
    window.addEventListener('scroll', () => setProgress(Scroll.getProgress()));

    return <ScrollTrackerWrapper className={className!} progress={progress} count={count} />;
};
