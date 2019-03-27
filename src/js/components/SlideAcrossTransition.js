import React from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import * as Util from '../util';

export const SlideAcrossTransition = props => {
    const { children, key, timeout = 400, easing = 'ease-in-out' } = props;
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
        <CSSTransition
            key={key}
            in={props.in}
            classNames={name}
            timeout={timeout}
            unmountOnExit={true}
        >
            <Container>{children}</Container>
        </CSSTransition>
    );
};
