import React, { useRef, useState, useReducer, Dispatch } from 'react';
import styled from 'styled-components';
import { StyledTitle, Page, Spacer, Svg } from './index';
import { IPageProps, AppData } from '../util';
import { ContentSection } from './ContentSection';
import { theme } from '../styles/index';
import { Config, Validate } from '../util/index';
import { Api } from '../services';
import { Check, Dots, Cross, Arrow } from './Svg';
import { PageInner } from './PageInner';
import { A } from './A';

const StyledArrow = styled(Arrow)`
    position: absolute;
    top: 50%;
    width: 50px;
    transform: translateY(-50%);
    margin-left: 15px;
    margin-top: 1px;
`;

const StyledHeader = styled.h3`
    display: inline;
`;

export const Contact: React.FC<IPageProps> = ({ route }) => (
    <Page id={route}>
        <StyledTitle visible={76}>Contact</StyledTitle>
        <PageInner>
            <ContentSection underlined={false}>
                <A
                    href={`mailto:${AppData.info.email}?subject=Inquiry%20via%20stephen.work`}
                    underlined={true}
                >
                    <StyledHeader>Send me an email</StyledHeader>
                    <StyledArrow />
                </A>
            </ContentSection>
        </PageInner>
    </Page>
);
