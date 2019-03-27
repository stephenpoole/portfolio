import React from 'react';
import styled from 'styled-components';
import { StyledTitle, Page } from './';

const Wrapper = styled.div`
    padding: 140px 150px;
`;

export const Contact = ({}) => (
    <Page>
        <StyledTitle visible={76}>Contact</StyledTitle>
        <Wrapper />
    </Page>
);
