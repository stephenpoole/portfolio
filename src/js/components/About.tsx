import React from 'react';
import styled from 'styled-components';
import { A, StyledTitle, Page, ContentSection } from './index';
import { AppData } from '../util/index';

const Wrapper = styled.div`
    padding: 140px 150px;
`;

export const About = ({}) => (
    <Page>
        <StyledTitle visible={76}>About</StyledTitle>
        <Wrapper>
            <ContentSection>
                <p>
                    Stephen Poole is a senior Front-End developer based in Toronto, Canada.
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
                        <A href={`mailto:${AppData.info.email}`}>{AppData.info.email}</A>
                    </strong>
                </p>
            </ContentSection>
        </Wrapper>
    </Page>
);
