import React from 'react';

import {Button} from '../common';

import Image from '../../components/common/image'
import UserInfo from '../user-info';
import EventMembers from './event-members';

import { ReactComponent as PlaceIcon } from '../../images/place_24px.svg';
import { ReactComponent as GoIcon } from '../../images/keyboard_tab_24px_outlined.svg'; 

const EventDetails = (props) => {
    return (
    <section className="event-detail">
        <div className="event-card">
                <div className="event-card__header">
                    <UserInfo name="Van Darkholme" />
                    <div className="event-location">
                        <PlaceIcon /> 
                        <span>Україна, м.Чернівці</span>
                    </div>
                </div>
                <div className="event-card__content">
                    <div className="event-card__content-header">
                        <h2>Event Сonference 2020</h2>
                        <span className="date-creation">Створено в: <span>23.09.2020 10:30</span> </span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                    <div className="event-card__image--container">
                        <Image alt="photo" className="event-card--photo"/>
                        <Image alt="photo" className="event-card--photo"/>
                        <Image alt="photo" className="event-card--photo"/>
                        <Image alt="photo" className="event-card--photo"/>
                        <Image alt="photo" className="event-card--photo"/>
                        <Image alt="photo" className="event-card--photo"/>
                    </div>
                    <Button className="btn-more">
                        <GoIcon /> Долучитись
                    </Button>
                </div>
            </div>
        <EventMembers />
    </section>
    );
}

export default EventDetails;