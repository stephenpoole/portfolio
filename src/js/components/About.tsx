import React from 'react';
import { StyledTitle, Page, ContentSection, Spacer, HashLink } from './index';
import { AppData, IPageProps } from '../util/index';
import { PageInner } from './PageInner';

export const About: React.FC<IPageProps> = ({ route }) => (
    <Page id={route}>
        <StyledTitle visible={76}>About</StyledTitle>
        <PageInner>
            <ContentSection>
                <p>
                    Stephen Poole is a senior Front-End developer based in Toronto, Canada.
                    <br />
                    <br />
                    He&apos;s worked with brands such as American Standard, Ashley Madison, BMW,
                    Cadillac, Cisco, Kitchenaid, Maytag, MINI, Samsung, Subaru, Whirlpool, and more.
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
        </PageInner>
    </Page>
);
