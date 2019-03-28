import React from 'react';
import * as Svg from '../components/Svg';
import { About, Work, Contact } from '../components/index';

export interface IInfo {
    name: string;
    title: string;
    email: string;
}

export interface ISocialItem {
    name: string;
    Component: React.FC<{}>;
    link: string;
}

export interface IPageProps {
    route: IRouteItem;
    key: string;
}

export interface IRouteItem {
    path: string;
    name: string;
}

export interface IRouteItemData extends IRouteItem {
    Component: React.FC<IPageProps>;
}

export interface IWorkItem {
    name: string;
    shortname: string;
    year: number;
    agency: string;
    desc: string;
    link: string;
    media: string;
    tech: string[];
}

export interface IAppData {
    info: IInfo;
    social: ISocialItem[];
    routes: IRouteItemData[];
    skills: string[];
    work: IWorkItem[];
}

const data: IAppData = {
    info: {
        name: 'Stephen Poole',
        title: 'Front-End Developer',
        email: 'me@stephen.work'
    },
    social: [
        {
            name: 'email',
            Component: Svg.Mail,
            link: 'mailto:me@stephen.work'
        },
        {
            name: 'github',
            Component: Svg.Github,
            link: 'https://github.com/stephenpoole'
        },
        {
            name: 'linkedin',
            Component: Svg.LinkedIn,
            link: 'https://www.linkedin.com/in/stephenwpoole'
        },
        {
            name: 'twitter',
            Component: Svg.Twitter,
            link: 'https://twitter.com/poolestephen'
        }
    ],
    routes: [
        {
            path: '/about',
            name: 'About',
            Component: About
        },
        {
            path: '/work',
            name: 'Work',
            Component: Work
        },
        {
            path: '/contact',
            name: 'Contact',
            Component: Contact
        }
    ],
    skills: [
        'React',
        'Webpack',
        'C#',
        'Typescript',
        'SASS',
        'MobX',
        'ES6',
        'Greensock',
        'Banner Ads'
    ],
    work: [
        {
            name: '',
            shortname: '',
            year: 0,
            agency: '',
            desc: '',
            link: '',
            media: '',
            tech: ['']
        }
    ]
};

export class AppDataClass implements IAppData {
    public info: IInfo;
    public social: ISocialItem[];
    public routes: IRouteItemData[];
    public skills: string[];
    public work: IWorkItem[];

    public constructor({ info, social, routes, skills, work }: IAppData) {
        this.info = info;
        this.social = social;
        this.routes = routes;
        this.skills = skills;
        this.work = work;
    }
}

export const AppData: IAppData = new AppDataClass(data);
