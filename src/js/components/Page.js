import React from 'react';
import styled from 'styled-components';

export const Page = styled.li`
    position: relative;
    margin-top: 50px;
    margin-left: 50%;
    transform: translateX(-50%);
    border: solid ${props => props.theme.color.text};
    border-width: ${props => props.theme.misc.lineWidth}px ${props => props.theme.misc.lineWidth}px
        0 ${props => props.theme.misc.lineWidth}px;
    width: calc(100% - 100px);
`;
