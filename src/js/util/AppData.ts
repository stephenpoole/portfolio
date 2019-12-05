import React from 'react';
import * as Svg from '../components/Svg';

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
    route: string;
}

export interface IRouteItem {
    [key: string]: string;
}

export interface IWorkItem {
    name: string;
    client: string;
    image: string;
    logo: string;
    year: number;
    agency: string;
    link: string;
    tech: string[];
}

export interface IAppData {
    info: IInfo;
    social: ISocialItem[];
    routes: IRouteItem;
    skills: string[];
    work: IWorkItem[];
}

const data: IAppData = {
    info: {
        name: 'Stephen Poole',
        title: 'Front-End Developer',
        email: 'stephenwpoole@gmail.com'
    },
    social: [
        {
            name: 'email',
            Component: Svg.Mail,
            link: 'mailto:stephenwpoole@gmail.com'
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
        }
    ],
    routes: {
        about: 'about',
        work: 'work',
        contact: 'contact'
    },
    skills: [
        'React',
        'Redux',
        'Typescript',
        'ESNext',
        'Styled Components',
        'Webpack',
        'Jest',
        'Next.js',
        'Node.js'
    ],
    work: [
        {
            name: 'Ashley Madison',
            client: 'Ruby',
            logo: 'logo-ruby.png',
            image: 'work-ashleymadison.jpg',
            year: 2019,
            agency: 'Ruby',
            link: 'https://ashleymadison.com',
            tech: ['React', 'Redux', 'Typescript', 'Styled Components']
        },
        {
            name: 'MINI Configurator',
            client: 'MINI',
            logo: 'logo-mini.png',
            image: 'work-mini.jpg',
            year: 2018,
            agency: 'Richmond Day',
            link: 'https://mini.ca/en/shopping/buildandprice',
            tech: ['React', 'MobX', 'Webpack', 'Sass']
        },
        {
            name: 'Find My Whirlpool',
            client: 'Whirlpool',
            logo: 'logo-whirlpool.png',
            image: 'work-whirlpool.jpg',
            year: 2016,
            agency: 'Red Lion Canada',
            link: 'http://findmy.whirlpool.ca',
            tech: ['AngularJS', 'Gulp', 'Sass']
        },
        {
            name: 'Website on Vinyl',
            client: 'Just Tom',
            logo: 'logo-justtom.png',
            image: 'work-justtom.jpg',
            year: 2017,
            agency: 'Red Lion Canada',
            link: 'https://justtom.ca',
            tech: ['React', 'Webpack', 'Sass']
        }
    ]
};

export class AppDataClass implements IAppData {
    public info: IInfo;
    public social: ISocialItem[];
    public routes: IRouteItem;
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
