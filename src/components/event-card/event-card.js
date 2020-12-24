import React from 'react';
import {Link} from 'react-router-dom';

import {Button} from '../common';
import UserInfo from '../user-info';
import EventLocation from './event-location';
import EventDescribe from './event-describe';
import EventTitle from './event-title';


const EventCard = (props) => {
    return (
        <div className="event-card">
            <div className="event-card__header">
                <UserInfo name="Van" surname="Darkholme" />
                <EventLocation location="Україна, м.Чернівці" />
            </div>
            <div className="event-card__content">
                <div className="event-card--container">
                    <EventTitle>Event Сonference 2020</EventTitle>
                    <span className="date-creation">Створено в: <span>23.09.2020 10:30</span> </span>
                </div>
                <EventDescribe>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </EventDescribe>
                <Button className="btn-more">
                    <Link to="#">Детальніше</Link>
                </Button>
            </div>
        </div>
    );
}

export default EventCard;