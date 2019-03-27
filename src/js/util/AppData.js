import * as Svg from '../components/Svg';
import { WorkContainer } from '../components/WorkContainer';
import { ContactContainer } from '../components/ContactContainer';
import { AboutContainer } from '../components/AboutContainer';

export class AppDataClass {
    constructor() {
        const data = {
            info: {
                name: 'Stephen Poole',
                title: 'Front-End Developer',
                email: 'me@stephen.work'
            },
            social: [
                {
                    name: 'email',
                    component: Svg.Mail,
                    link: 'mailto:me@stephen.work'
                },
                {
                    name: 'github',
                    component: Svg.Github,
                    link: 'https://github.com/stephenpoole'
                },
                {
                    name: 'linkedin',
                    component: Svg.LinkedIn,
                    link: 'https://www.linkedin.com/in/stephenwpoole'
                },
                {
                    name: 'twitter',
                    component: Svg.Twitter,
                    link: 'https://twitter.com/poolestephen'
                }
            ],
            routes: [
                {
                    path: '/about',
                    name: 'About',
                    Component: AboutContainer
                },
                {
                    path: '/work',
                    name: 'Work',
                    Component: WorkContainer
                },
                {
                    path: '/contact',
                    name: 'Contact',
                    Component: ContactContainer
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

        Object.assign(this, data);
    }
}

export const AppData = new AppDataClass();
