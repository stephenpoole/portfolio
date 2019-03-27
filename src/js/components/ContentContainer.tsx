import React from 'react';
import { Content } from './index';

interface Props {
    children?: JSX.Element | JSX.Element;
}

export const ContentContainer: React.FC<Props> = ({ children }) => <Content>{children}</Content>;
