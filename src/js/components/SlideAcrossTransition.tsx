import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import * as Util from '../util/index';

interface Props {
    children?: JSX.Element | JSX.Element;
    timeout?: number;
    easing?: string;
    in?: boolean;
}

export const SlideAcrossTransition: React.FC<Props> = props => {
    const { children, timeout = 400, easing = 'ease-in-out' } = props;
    const name = `slide-across-${Util.String.random(6)}`;
    const Container = styled.div`
        & {
            width: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            transition: transform ${timeout}ms ${easing};
        }

        &.${name}-enter,&.${name}-appear {
            transform: translateX(60%);
        }

        &.${name}-enter-active,&.${name}-appear-active {
            transform: translateX(-50%);
        }

        &.${name}-exit {
            transform: translateX(-50%);
        }

        &.${name}-exit-active {
            transform: translateX(-160%);
        }
    `;

    return (
        <CSSTransition in={props.in} classNames={name} timeout={timeout} unmountOnExit={true}>
            <Container>{children}</Container>
        </CSSTransition>
    );
};
