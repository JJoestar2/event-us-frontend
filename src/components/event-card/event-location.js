import React from 'react'
import { ReactComponent as PlaceIcon } from '../../images/place_24px.svg';

const EventLocation = (props) => {
    return (
        <div className="event-location">
            <PlaceIcon /> 
            <span>{props.location}</span>
        </div>
    );
}

export default EventLocation;