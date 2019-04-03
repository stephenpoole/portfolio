import React, { useState } from 'react';
import styled from 'styled-components';

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

const bodyRef = document.getElementsByTagName('body')[0];

export const ScrollTracker: React.FC<IProps> = ({ className, count }) => {
    const getProgress = () => {
        const scrollTop: number = window.pageYOffset;
        const bodyHeight: number = bodyRef.offsetHeight;
        const windowHeight: number = window.innerHeight;
        const offset: number = bodyHeight - windowHeight;
        return scrollTop / (offset || 1);
    };
    const [progress, setProgress] = useState(getProgress());

    window.addEventListener('scroll', () => setProgress(getProgress()));

    return <ScrollTrackerWrapper className={className!} progress={progress} count={count} />;
};
