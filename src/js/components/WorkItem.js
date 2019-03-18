import React from 'react';
import { Tween, SplitLetters } from 'react-gsap';

const LetterAnimation = ({ children }) => (
    <Tween staggerFrom={{ y: '-5px' }} stagger={0.5} duration={0.3} ease="Elastic.easeOut">
        <SplitLetters>{children}</SplitLetters>
    </Tween>
);

export const WorkItem = ({ name, shortname, year, agency, desc, link, tech }) => (
    <div className="work__item">
        <div>
            <h3>Project</h3>
            <LetterAnimation>
                <p>{name}</p>
            </LetterAnimation>
        </div>
        <div>
            <h3>Agency</h3>
            <LetterAnimation>
                <p>{agency}</p>
            </LetterAnimation>
        </div>
        <div>
            <h3>Desc</h3>
            <LetterAnimation>
                <p>{desc}</p>
            </LetterAnimation>
        </div>
        <div>
            <h3>Tech</h3>
            <LetterAnimation>
                <p>{tech.join(', ')}</p>
            </LetterAnimation>
        </div>
        <div>
            <a href={link} target="_blank" rel="nofollow noreferrer">
                <h3>View the site</h3>
            </a>
        </div>
    </div>
);
