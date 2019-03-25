import React from 'react';
import { Image, A } from './';
import { withRouter, Link } from 'react-router-dom';
import { Config, Route } from '../util';

const classNames = require('classnames');

export const Menu = withRouter(({ social, routes, logo, location }) => (
    <div className="menu">
        <div className="menu__logo">
            <div className="menu__logo-inner">
                <h3>{logo.name}</h3>
                <p className="bold">{logo.title}</p>
            </div>
        </div>
        <ul className="menu__navigation">
            {Object.values(routes).map(({ path, name }) => {
                const isSelected = Route.matches(location, path);
                const className = classNames('menu__navigation-item', 'bold', {
                    'menu__navigation-item--selected': isSelected
                });

                return (
                    <li className={className} key={name}>
                        <Link to={Route.fullpath(path)}>{name}</Link>
                    </li>
                );
            })}
        </ul>
        <ul className="menu__social">
            {Object.values(social).map(({ image, link, name }) => (
                <li className="menu__social-item" key={name}>
                    <A href={link}>
                        <Image src={image} />
                    </A>
                </li>
            ))}
        </ul>
    </div>
));
