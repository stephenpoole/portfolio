import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
    font-family: ${({ theme }) => theme.font.sans};
    font-weight: bold;
    font-size: 9em;
    letter-spacing: -8px;
`;

const AnchoredTitleText = styled(TitleText)`
    opacity: 0;
`;

const TitleWrapper = styled.div`
    position: relative;
`;

const TitleTextWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    height: ${({ visible = 100 }) => `${visible}%`};
    overflow: hidden;
`;

export const Title = ({ children, visible, className }) => (
    <TitleWrapper className={className}>
        <TitleTextWrapper visible={visible}>
            <TitleText>{children}</TitleText>
        </TitleTextWrapper>
        <AnchoredTitleText>{children}</AnchoredTitleText>
    </TitleWrapper>
);

export const StyledTitle = styled(Title)`
    position: absolute;
    top: -120px;
    left: 20px;
`;