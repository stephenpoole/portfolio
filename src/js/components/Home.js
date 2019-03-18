import React from 'react';
import { Link } from 'react-router-dom';
import { Routes } from '../Constants';

export const Home = () => (
    <div className="home slide">
        <div className="home__details">
            <h1 className="home__name">Stephen Poole</h1>
            <p className="home__title">Front-End Developer</p>
            <ul className="home__social">
                <li className="home__social-item home__social-item--github" />
                <li className="home__social-item home__social-item--linkedin" />
                <li className="home__social-item home__social-item--twitter" />
            </ul>
        </div>
        <div className="home__links">
            <ul>
                <Link to={Routes.About}>
                    <li>About</li>
                </Link>
                <Link to={Routes.Work}>
                    <li>Work</li>
                </Link>
            </ul>
        </div>
    </div>
);
