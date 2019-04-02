import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface IScrollItem {
    height: number;
    top: number;
}

interface IProps {
    className: string;
    scrollItems: IScrollItem[];
    navItems: IScrollItem[];
    navHeight: number;
}

interface IStyleProps {
    className: string;
    progress: number;
    itemCount: number;
}

const ScrollTrackerWrapper = styled.div<IStyleProps>`
    position: absolute;
    height: ${({ itemCount }) => `${100 / itemCount}%`};
    top: ${({ progress }) => `${progress * 100}%`};
    width: ${({ theme }) => `${theme.misc.lineWidth}px`};
    right: 0;
`;

const bodyRef = document.getElementsByTagName('body')[0];

export const ScrollTracker: React.FC<IProps> = ({
    className,
    scrollItems = [],
    navItems = [],
    navHeight = 0
}) => {
    const getProgress = () => {
        const scrollTop: number = window.pageYOffset;
        const bodyHeight: number = bodyRef.offsetHeight;
        const windowHeight: number = window.innerHeight;
        return scrollTop / (bodyHeight - windowHeight);
    };
    const [progress, setProgress] = useState(getProgress());

    window.addEventListener('scroll', () => {
        setProgress(getProgress());
    });

    return (
        <ScrollTrackerWrapper
            className={className}
            progress={progress}
            itemCount={scrollItems.length}
        />
    );
};
