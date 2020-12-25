import React from 'react';

import UserInfo from '../user-info';

import { ReactComponent as PlaceIcon } from '../../images/place_24px.svg';

const EventDetails = (props) => {
    return (
    <section className="event-detail">
        <div className="event-card">
                <div className="event-card__header">
                    <div className="event-location">
                        <PlaceIcon /> 
                        <span>{props.item.location}</span>
                    </div>
                </div>
                <div className="event-card__content">
                    <div className="event-card__content-header">
                        <h2>{props.item.title}</h2>
                        <span className="date-creation">Створено в: <span>{props.item.dateCreation}</span> </span>
                    </div>
                    <p>
                        {props.item.description}
                    </p>
                </div>
            </div>
    </section>
    );
}

export default EventDetails;