import React from 'react';
import styled from 'styled-components';
import { StyledTitle, Page, Spacer } from './index';
import { IPageProps } from '../util';

const Wrapper = styled.div`
    padding: 140px 150px;
`;

export const Contact: React.FC<IPageProps> = ({ route }) => (
    <Page id={route.name}>
        <StyledTitle visible={76}>Contact</StyledTitle>
        <Wrapper>
            <Spacer height={1000} count={20} />
        </Wrapper>
    </Page>
);
