import React from 'react';
import styled, { StyledComponent } from 'styled-components';

const TitleText = styled.h1`
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: bold;
    font-size: 10em;
    letter-spacing: -8px;

    ${({ theme }) => theme.media.phone} {
        font-size: 5em;
        letter-spacing: -5px;
    }
`;

const AnchoredTitleText = styled(TitleText)`
    opacity: 0;
`;

const TitleWrapper = styled.div`
    position: relative;
`;

interface TitleTextWrapperProps {
    visible: number;
}

const TitleTextWrapper = styled.div<TitleTextWrapperProps>`
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${({ visible = 100 }) => `${visible}%`};
    overflow: hidden;
`;

interface Props {
    children?: JSX.Element[] | JSX.Element | string;
    visible?: number;
    className?: string;
}

export const Title: React.FC<Props> = ({ children, visible = 100, className }) => (
    <TitleWrapper className={className}>
        <TitleTextWrapper visible={visible}>
            <TitleText>{children}</TitleText>
        </TitleTextWrapper>
        <AnchoredTitleText>{children}</AnchoredTitleText>
    </TitleWrapper>
);

export const StyledTitle = styled(Title)`
    position: absolute;
    top: -135px;
    left: 20px;

    ${({ theme }) => theme.media.phone} {
        top: -55px;
    }
`;
