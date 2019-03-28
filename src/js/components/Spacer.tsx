import React from 'react';
import styled from 'styled-components';

interface Props {
    height?: number;
    count?: number;
}

const StyledSpacer = styled.div<Props>`
    width: 100%;
    height: ${({ height = 50, count = 1 }) => height * count}px;
`;

export const Spacer: React.FC<Props> = ({ height, count }) => (
    <StyledSpacer height={height} count={count} />
);
