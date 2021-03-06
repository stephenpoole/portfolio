import styled from 'styled-components';

export const Book = styled.ul`
    position: relative;
    width: 1000px;
    padding-top: 150px;
    left: 50%;
    transform: translateX(-50%);

    ${({ theme }) => theme.media.desktop} {
        width: 100%;
        transform: none;
        left: initial;
    }

    ${({ theme }) => theme.media.phone} {
        padding-top: 80px;
    }
`;
