import React from 'react';
import styled from 'styled-components';
import { StyledTitle, Page, ContentSection, Spacer, HashLink } from './index';
import { AppData, IPageProps } from '../util/index';

const Wrapper = styled.div`
    padding: 140px 150px;
`;

export const About: React.FC<IPageProps> = ({ route }) => (
    <Page id={route}>
        <StyledTitle visible={76}>About</StyledTitle>
        <Wrapper>
            <ContentSection>
                <p>
                    Stephen Poole is a senior Front-End developer based in Toronto, Canada.
                    <br />
                    <br />
                    He’s worked with brands such as American Standard, BMW, Cadillac, Cisco,
                    Kitchenaid, Maytag, MINI, Samsung, Subaru, Whirlpool, and more.
                </p>
            </ContentSection>
            <ContentSection>
                <h3>Skills</h3>
                <ul>
                    {AppData.skills.map(skill => (
                        <li key={skill}>{skill}</li>
                    ))}
                </ul>
            </ContentSection>
            <ContentSection>
                <h3>Contact</h3>
                <p>New opportunities are always welcome.</p>
                <p>
                    <strong>
                        <HashLink to={AppData.routes.contact}>{AppData.info.email}</HashLink>
                    </strong>
                </p>
            </ContentSection>
            <Spacer height={1000} count={20} />
        </Wrapper>
    </Page>
);
