import React from 'react';
import styled from 'styled-components';

interface Props {
    id: string;
    children: JSX.Element | JSX.Element[] | string;
}

export const StyledPage = styled.li`
    position: relative;
    margin-top: -${({ theme }) => theme.misc.lineWidth}px;
    margin-left: 50%;
    transform: translateX(-50%);
    border: ${({ theme }) => `${theme.misc.lineWidth}px solid ${theme.color.text}`};
    width: calc(100% - 100px);

    ${({ theme }) => theme.media.desktop} {
        width: calc(100% - 20px);
    }

    &:last-child {
        border-bottom: none;
    }
`;

interface AnchorProps {
    id: string;
}

const Anchor = styled.div<AnchorProps>`
    position: absolute;
    height: 1px;
    width: 100%;
    top: -110px;
    left: 0;

    ${({ theme }) => theme.media.phone} {
        top: -80px;
    }
`;

export const Page: React.FC<Props> = ({ id, children }) => (
    <StyledPage>
        <>
            <Anchor id={id} />
            {children}
        </>
    </StyledPage>
);
