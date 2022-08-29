import React, { useState } from 'react';
import { allUpper } from '../../utils/helpers';

function Portfolio() {

    const projectImagePathing = '../../assets/images/projects/'

    const [projects] = useState([
        {
            title: 'Local Music Scene',
            type: 'full stack application',
            image: 'local-music-scene.jpg',
            description: 'Designed and developed an application with a robust back-end and intuitive front-end. Used agile development methodologies with this team build to create a responsive, mobile-first design.',
            deployed: 'https://damp-plateau-16490.herokuapp.com/',
            repo: 'https://github.com/cpm-128/local-music-scene'
        },
        // {
        //     title: 'Investment Portfolio',
        //     type: 'full stack team project',
        //     image: '',
        //     description: 'Interactive front-end project with team collaboration from project idea through to execution.',
        //     deployed: 'https://damp-plateau-16490.herokuapp.com/',
        //     repo: 'https://github.com/cpm-128/investment-portfolio-dashboard'
        // },
        // {
        //     title: 'The Tech Blog',
        //     type: 'model-view-controller',
        //     image: '',
        //     description: 'A CMS-style blog site that utilizes Sequelize as the ORM, Handlebars.js, and express-session for authentication.',
        //     deployed: 'https://whispering-dusk-78788.herokuapp.com/',
        //     repo: 'https://github.com/cpm-128/tech-blog'
        // },
        // {
        //     title: 'Just Tech News',
        //     type: 'model-view-controller',
        //     image: '',
        //     description: 'A blog app that utilizes ORM to connect with a SQL database and dynamic HTML using Handlebars.js.',
        //     deployed: 'https://powerful-oasis-35251.herokuapp.com/',
        //     repo: 'https://github.com/cpm-128/just-tech-news'
        // },
        // {
        //     title: 'Zoo Keepr',
        //     type: 'express js',
        //     image: '',
        //     description: 'Create server-side APIs using the Express.js framework with a provided front-end.',
        //     deployed: 'https://fathomless-oasis-00691.herokuapp.com/',
        //     repo: 'https://github.com/cpm-128/zookeepr'
        // },
        // {
        //     title: 'Weather Dashboard',
        //     type: 'server side apis',
        //     image: '',
        //     description: 'A browser application featuring dynamically updated HTML and CSS. Utilizes the OpenWeather One Call API.',
        //     deployed: 'https://cpm-128.github.io/weather-dashboard/',
        //     repo: 'https://github.com/cpm-128/weather-dashboard'
        // },
        // {
        //     title: 'Git It Done',
        //     type: 'SERVER SIDE APIs',
        //     image: '',
        //     description: 'Dynamically update HTML and CSS powered by JavaScript and Server Side APIs.',
        //     deployed: 'https://cpm-128.github.io/git-it-done/',
        //     repo: 'https://github.com/cpm-128/git-it-done'
        // },
        // {
        //     title: 'Work Day Scheduler',
        //     type: 'THIRD PARTY APIs',
        //     image: '',
        //     description: 'A simple calendar application to save events for each hour of the day. Dynamic content powered by jQuery and Bootstrap.',
        //     deployed: 'https://cpm-128.github.io/work-day-scheduler/',
        //     repo: 'https://github.com/cpm-128/work-day-scheduler'
        // },
        // {
        //     title: 'Task Manager',
        //     type: 'WEB APIs',
        //     image: '',
        //     description: 'A simple application to manage to-do lists, task status, and task categories.',
        //     deployed: 'https://cpm-128.github.io/task-manager/',
        //     repo: 'https://github.com/cpm-128/task-manager'
        // },
    ])

    return (
        <section>

            <h1>PORTFOLIO</h1>

            {/* flex parent container */}
            <div className='d-flex flex-row flex-wrap justify-content-around align-self-stretch'>

                {/* flex children, project cards */}
                {projects.map((project, i) => (
                <div className='card p-2' style={{width: '18rem'}}>
                    <div>
                        <img
                            className='card-img-top'
                            src={`${projectImagePathing}${i}.jpg`}
                            alt={`Screencapture of ${project.title} application.`}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>{project.title}</h5>
                            <h6>{allUpper(project.type)}</h6>
                            <p className='card-text'>{project.description}</p>
                            <a href={project.deployed} className='card-link' target='_blank' rel='noopener noreferrer'>Deployed app</a>
                            <a href={project.repo} className='card-link' target='_blank' rel='noopener noreferrer'>Repository</a>
                        </div>
                    </div>
                </div>
                ))}

            </div>

        </section>
    )
};

export default Portfolio;