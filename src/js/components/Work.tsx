import React from 'react';
import styled from 'styled-components';
import { StyledTitle, Page, ContentSection, Spacer, A, Image } from './index';
import { AppData, IPageProps } from '../util';
import { Arrow } from './Svg';
import { PageInner } from './PageInner';

const ItemWrapper = styled.div`
    position: relative;
    margin: 25px 0;
`;

const StyledArrow = styled(Arrow)`
    position: absolute;
    top: 50%;
    width: 50px;
    transform: translateY(-50%);
    margin-left: 15px;
    margin-top: 1px;
`;

const StyledImage = styled(Image)`
    transform: rotate(-90deg) translateY(-50%);
    right: -40%;
    width: 80%;
    position: absolute;
    top: 35%;
`;

const StyledContentSection = styled(ContentSection)`
    margin: 200px 0;
`;

const DistinctItemWrapper = styled(ItemWrapper)`
    margin: 50px 0;

    h3 {
        display: inline;
    }
`;

export const Work: React.FC<IPageProps> = ({ route }) => (
    <Page id={route}>
        <StyledTitle visible={76}>Work</StyledTitle>
        <PageInner>
            {AppData.work.map(({ name, client, image, logo, year, agency, link, tech }) => (
                <StyledContentSection underlined={false} key={name}>
                    <A href={link}>
                        <StyledImage src={image} />
                        <ItemWrapper>
                            <h3>Client</h3>
                            <p>{client}</p>
                        </ItemWrapper>
                        <ItemWrapper>
                            <h3>Project</h3>
                            <p>{name}</p>
                        </ItemWrapper>
                        <ItemWrapper>
                            <h3>Team</h3>
                            <p>{agency}</p>
                        </ItemWrapper>
                        <ItemWrapper>
                            <h3>Tech</h3>
                            {tech.map(lib => (
                                <p key={lib}>{lib}</p>
                            ))}
                        </ItemWrapper>
                        <DistinctItemWrapper>
                            <h3>Visit Site</h3>
                            <StyledArrow />
                        </DistinctItemWrapper>
                    </A>
                </StyledContentSection>
            ))}
            <Spacer height={100} count={20} />
        </PageInner>
    </Page>
);
