import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import { StyledTitle, Page } from './index';

const Wrapper = styled.div`
    padding: 140px 150px;
`;

export const Contact: React.FC<{}> = () => (
    <Page>
        <StyledTitle visible={76}>Contact</StyledTitle>
        <Wrapper />
    </Page>
);
