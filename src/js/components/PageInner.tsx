import React from 'react';
import styled from 'styled-components';

export const PageInner = styled.div`
    padding: 140px 150px;

    ${({ theme }) => theme.media.tablet} {
        padding: 130px 90px;
    }
`;
