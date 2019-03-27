import React, { useReducer } from 'react';
import { AppData } from '../util/index';
import { WorkItem, Page } from './index';

const data = AppData.work;

export const Work = () => {
    const [state, dispatch] = useReducer(
        (state, action) => {
            switch (action.type) {
                case 'setIndex':
                    const { index = 0 } = action;
                    const nextIndex =
                        index > data.length - 1 ? 0 : index < 0 ? data.length - 1 : index;

                    return {
                        ...state,
                        display: data[nextIndex],
                        index: nextIndex
                    };
            }
        },
        {
            index: 0,
            totalItems: data.length - 1,
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

    return (
        <Page>
            <WorkMedia link={state.media} />
            <WorkItem {...state.display} dispatch={dispatch} />
            <WorkNavigator index={state.index} totalItems={state.totalItems} dispatch={dispatch} />
        </Page>
    );
};
