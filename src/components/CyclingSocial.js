import React from 'react';
import stravaLogo from './../assets/images/logos/strava-logo.png';
import instagramLogo from './../assets/images/logos/instagram-logo.png';
import athlinksLogo from './../assets/images/logos/athlinks-logo.jpeg';

function CyclingSocial() {
    return(
        <div className='bg-color-tertiary-opaque mt-auto padding-topbottom-20px'>

        <div className='d-flex flex-row justify-content-center'>

            {/* ATHLINKS */}
            <div className='p-2 social-icon'>
                <a href='https://www.athlinks.com/athletes/498448960/results' target='_blank' rel='noopener noreferrer'>
                    <img src={athlinksLogo} alt='Athlinks logo linked to profile' />
                </a>
            </div>

            {/* STRAVA */}
            <div className='p-2 social-icon'>
                <a href='https://www.strava.com/athletes/10430671' target='_blank' rel='noopener noreferrer'>
                    <img src={stravaLogo} alt='Strava logo linked to profile' />
                </a>
            </div>

            {/* INSTAGRAM */}
            <div className='p-2 social-icon'>
                <a href='https://www.instagram.com/colleenmaher007/' target='_blank' rel='noopener noreferrer'>
                    <img src={instagramLogo} alt='Instagram logo linked to profile' />
                </a>
            </div>

        </div>

        </div>
    )
};

export default CyclingSocial;