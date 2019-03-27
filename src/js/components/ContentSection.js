import React from 'react';
import styled from 'styled-components';

export const ContentSection = styled.div`
    font-size: 14pt;
    margin: 100px 0;
    line-height: 34px;

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-bottom: 10px;
    }
    h3 {
        border-bottom: 3px solid ${({ theme }) => theme.color.text};
    }
    ul {
        display: inline-block;
    }
    li {
        width: 33.3333%;
        float: left;
    }
    &:first-child {
        margin-top: 0;
    }
    &:last-child {
        margin-bottom: 0;
    }
`;
