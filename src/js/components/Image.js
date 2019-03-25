import React from 'react';
import styled from 'styled-components';
import { Config } from '../util';

const StyledImg = styled.img`
    width: 100%;
`;

export const Image = ({ src, ...props }) => (
    <StyledImg {...props} src={`${Config.imagePrefix}${src}`} />
);
