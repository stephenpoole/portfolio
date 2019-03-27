import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { Config } from '../util/index';

interface Props {
    src?: string;
}

const StyledImg = styled.img`
    width: 100%;
`;

export const Image: React.FC<Props> = ({ src, ...props }) => (
    <StyledImg {...props} src={`${Config.imagePrefix}${src}`} />
);
