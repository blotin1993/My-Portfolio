import React from 'react';

const options = { 
    year: 'numeric',
    month: 'long',
};

import './styles.scss'

const WorkingExperienceCardItem = ({
    items
}) => {
    return (
        <div
            className="WorkingExperienceCardItem"
        >
            {
                items.map(({id, company_name, company_website,position, start_date, end_date, description, technologies}) => (
                    <div
                        key={id}
                        className="WorkingExperienceCardItem__Item"
                    >
                        <h2>
                            <a href={company_website} rel="noopener noreferrer" target="_blank" className="--clickable">
                                {company_name}
                            </a>
                        </h2>
                            <div>
                                {position}
                            </div>
                            <div>
                                {`From ${start_date.toLocaleDateString("en-US", options)} ${end_date ? `to ${end_date.toLocaleDateString("en-US", options)}` : ''}`} 
                            </div>
                            <div>
                                {description}
                            </div>
                            <div>
                                <ul>
                                    {
                                    technologies.map(technology => (
                                        <li>
                                            {technology}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                    </div>
                ))
	        }
        </div>
    )
}

export default React.memo(WorkingExperienceCardItem)