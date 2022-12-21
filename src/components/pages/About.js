import React from 'react';
// import headshot from '../../assets/images/headshot/funshot_small.jpg';

function About() {
    return (
        <div className='padding-top-0 '>

            {/* headshot or avatar */}

            {/* short bio */}
            <section className='hero'>
                <h2>Hi, I'm Colleen. <br/>
                <span>I'm a full-stack web developer.</span></h2>
                {/* <img src={headshot} alt='headshot' style={{ width: '50%' }} /> */}
            </section>

            <div className='d-flex flex-row justify-content-center'>
            <section className='about  col-12 col-md-8'>
                <p className='font-size-1halfrem'>I'm a full-stack web developer and recently graduated the University of North Carolina at Chapel Hill's Web Dev Bootcamp with a 4.0.</p>
                <p className='font-size-1halfrem'>Newly developed skills include JavaScript, managing databases, responsive web design, and following best practices for code organization and structure. I am a thorough, detail-oriented, and conscientious coder whose strengths include creativity, teamwork, and building projects from ideation to execution.</p>
                <p className='font-size-1halfrem'>I am open to full-time, contract, and freelancing opportunities.</p>
            </section>
            </div>

        </div>
    )
};

export default About;