import React, { useReducer } from 'react';
import { Transition } from 'react-transition-group';
import { AppData } from '../util';
import { WorkItem } from './WorkItem';
import { useTimeout } from '../hooks';

const data = AppData.work;
const SLIDE_VISIBLE_SECONDS = 3;
const SLIDE_INTERACTIVITY_TIMEOUT_SECONDS = 2;

export const Work = () => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'interacted':
                    state.visibilityTimeout();
                    state.interactivityTimeout();
                    return {
                        ...state,
                        countdown: false,
                        interactivityTimeout: startInteractivityTimeout()
                    };
                case 'startTimer':
                    state.visibilityTimeout();
                    state.interactivityTimeout();
                    return {
                        ...state,
                        countdown: true,
                        visibilityTimeout: startVisibilityTimeout()
                    };
                case 'setIndex':
                    const { index = 0, wasUser = false } = action;
                    state.visibilityTimeout();
                    state.interactivityTimeout();
                    const nextIndex =
                        index > data.length - 1 ? 0 : index < 0 ? data.length - 1 : index;

                    return {
                        ...state,
                        display: data[nextIndex],
                        countdown: !wasUser,
                        interactivityTimeout: wasUser
                            ? startInteractivityTimeout()
                            : state.interactivityTimeout,
                        visibilityTimeout: !wasUser
                            ? startVisibilityTimeout()
                            : state.visibilityTimeout,
                        index: nextIndex
                    };
            }
        },
        {
            index: 0,
            totalItems: data.length - 1,
            countdown: true,
            visibilityTimeout: () => {},
            interactivityTimeout: () => {},
            display: {
                name: '',
                shortname: '',
                year: '',
                agency: '',
                desc: '',
                link: '',
                tech: [],
                media: '',
                mediaExt: []
            }
        }
    );

    const startVisibilityTimeout = () =>
        useTimeout(() => {
            dispatch({ type: 'setIndex', index: state.index + 1, wasUser: false });
        }, SLIDE_VISIBLE_SECONDS * 1000);

    const startInteractivityTimeout = () =>
        useTimeout(() => {
            dispatch({ type: 'startTimer' });
        }, SLIDE_INTERACTIVITY_TIMEOUT_SECONDS * 1000);

    return (
        <div className="work">
            <WorkMedia link={state.media} />
            <WorkItem {...state.display} dispatch={dispatch} />
            <WorkNavigator
                index={state.index}
                countdown={state.countdown}
                totalItems={state.totalItems}
                dispatch={dispatch}
            />
        </div>
    );
};
