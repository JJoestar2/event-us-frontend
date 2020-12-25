import React from 'react';
import {Link} from 'react-router-dom';

import {Button} from '../common';
import UserInfo from '../user-info';
import EventLocation from './event-location';
import EventDescribe from './event-describe';
import EventTitle from './event-title';


const EventCard = (props) => {
    let username;
    let surname;
    if(!username && !surname) {
        username = props.username || props.item.creator.username;
        surname = props.surname || props.item.creator.surname;
    }
    return (
        <div className="event-card">
            <div className="event-card__header">
                <UserInfo name={username} surname={surname} />
                <EventLocation location={props.item.location} />
            </div>
            <div className="event-card__content">
                <div className="event-card--container">
                    <EventTitle>{props.item.title}</EventTitle>
                    <span className="date-creation">Створено в: <span>{props.item.dateCreation}</span> </span>
                </div>
                <EventDescribe>
                    {props.item.description}
                </EventDescribe>
                <Button className="btn-more">
                    <Link to={`/event-detail/${props.item._id}`}>Детальніше</Link>
                </Button>
            </div>
        </div>
    );
}

export default EventCard;