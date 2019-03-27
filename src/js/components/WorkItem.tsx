import React from 'react';

export const WorkItem = ({ name, shortname, year, agency, desc, link, tech }) => (
    <div className="work__item">
        <div>
            <h3>Project</h3>
            <p>{name}</p>
        </div>
        <div>
            <h3>Agency</h3>
            <p>{agency}</p>
        </div>
        <div>
            <h3>Desc</h3>
            <p>{desc}</p>
        </div>
        <div>
            <h3>Tech</h3>
            <p>{tech.join(', ')}</p>
        </div>
        <div>
            <a href={link} target="_blank" rel="nofollow noreferrer">
                <h3>View the site</h3>
            </a>
        </div>
    </div>
);
