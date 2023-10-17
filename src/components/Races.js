import React, { useState } from 'react';
import { allUpper } from '../utils/helpers';
//import image from '../../assets/images/cycling'

function Races() {

    const [events] = useState([
        {
            title: 'BWR North Carolina',
            type: 'Unroad Race',
            image: require('../assets/images/cycling/bwr-nc_2023.JPG'),
            result: '2nd Place Womens 23-34, 7th Place Womens Overall',
            miles: '78',
            feetClimbing: '9,000',
            hours: '6',
            minutes: '28',
            when: 'Jun 2023',
            results: 'https://www.omnigoevents.com/events/bwr-nc-2023/results/',
        },
        {
            title: 'Swamp Fox Gravel Fondo',
            type: 'Gravel Race',
            image: require('../assets/images/cycling/swamp-fox_2023.JPG'),
            result: '2nd Place Womens Open',
            miles: '100',
            feetClimbing: '80',
            hours: '6',
            minutes: '34',
            when: 'Mar 2023',
            results: 'https://www.webscorer.com/race?raceid=308841',
        },
        {
            title: 'Asheville Off Road Series',
            type: 'Gravel Race',
            image: require('../assets/images/cycling/aors_2022.jpg'),
            result: '3rd Place Womens Overall, 1st Place Age Group',
            miles: '42',
            feetClimbing: '3,400',
            hours: '2',
            minutes: '39',
            when: 'Sep 2022',
            results: 'https://results.raceroster.com/v2/en-US/results/d4gwk7qpfahdf396/results?subEvent=122275&page=1&genderSexId=36eda1e6-c9ff-4038-802d-2b4b178c7753',
        },
        {
            title: 'Dirt Diggler',
            type: 'Gravel Race',
            image: require('../assets/images/cycling/dirt-diggler_2022.JPG'),
            result: '1st Place Womens Overall, 5th Person Overall',
            miles: '27',
            feetClimbing: '2,500',
            hours: '2',
            minutes: '00',
            when: 'Sep 2022',
            results: 'https://www.blueridgeadventures.net/2022-dirt-diggler-gravel-grinder-results/',
        },
        {
            title: 'SEG Falling Creek Pinnacle Punisher',
            type: 'Gravel Race',
            image: require('../assets/images/cycling/pinnacle-punisher_2022.JPG'),
            result: '1st Place Womens 19-39',
            miles: '67',
            feetClimbing: '5,000',
            hours: '4',
            minutes: '26',
            when: 'Sep 2022',
            results: 'https://southeastgravel.com/pages/2022-falling-creek-results',
        },
        {
            title: 'Sasquatch Scrambler',
            type: 'Mountain Bike Race',
            image: require('../assets/images/cycling/sasquatch_2022.JPG'),
            result: '2nd Place Womens Open',
            miles: '15',
            feetClimbing: '2,000',
            hours: '1',
            minutes: '49',
            when: 'Jun 2022',
            results: 'https://www.blueridgeadventures.net/2022-sasquatch-scrambler-results/',
        },
        {
            title: 'Swamp Fox Gravel Fondo',
            type: 'Gravel Race',
            image: require('../assets/images/cycling/swamp-fox_2022.JPG'),
            result: '3rd Place Womens Open',
            miles: '100',
            feetClimbing: '80',
            hours: '6',
            minutes: '20',
            when: 'Mar 2022',
            results: 'https://www.webscorer.com/racedetails?raceid=271115&did=317143&cid=1570449',
        },
        {
            title: 'Dirt Diggler',
            type: 'Gravel Race',
            image: require('../assets/images/cycling/dirt-diggler_2021.JPG'),
            result: '3rd Place Womens open',
            miles: '27',
            feetClimbing: '2,500',
            hours: '2',
            minutes: '19',
            when: 'Sep 2021',
            results: 'https://www.blueridgeadventures.net/2021-dirt-diggler-gravel-grinder-results/',
        },
    ])

    return (
        <section className='padding-standard padding-leftright'>

            <h2 className='padding-top-20px'>RACE RESULTS</h2>

            {/* flex parent container */}
            <div className='d-flex flex-row flex-wrap align-self-stretch col-12'>

                {/* flex children, event cards */}
                {events.map((event, i) => (
                <div className='card p-2 col-12 col-md-4' style={{width: '18rem'}}>
                    <div>
                        <img
                            className='card-img-top'
                            src={event.image}
                            alt={`${event.title}`}
                            key={event.title}
                        />
                        <div className='card-body'>
                            <h4 className='card-title'>{event.title}</h4>
                            <h6>{allUpper(event.type)}</h6>
                            <p className='card-text'>{event.result}</p>
                            <ul className='font-size-p light-font-weight'>
                                <li>{event.miles} miles</li>
                                <li>{event.feetClimbing} feet climbing</li>
                                <li>{event.hours} hours, {event.minutes} minutes</li>
                                <li>{event.when}</li>
                            </ul>
                            <a href={event.results} className='card-link' target='_blank' rel='noopener noreferrer'>Race Results</a>
                        </div>
                    </div>
                </div>
                ))}

            </div>

        </section>
    )
};

export default Races;