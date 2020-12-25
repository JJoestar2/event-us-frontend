import React, {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import Header from '../../components/header';
import EventDetails from '../../components/event-details';

import { getEvent } from "../../actions/events";


const EventInfo = (props) => {
    let { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => { dispatch(getEvent(id)); }, []);


    const { user: currentUser } = useSelector((state) => state.auth);
    const event = useSelector((state) => state.events.event);
    
    return (
        <div className="event-page">
            <Header user={currentUser} />
            <div className="event-page-wrap">
                <EventDetails item={event} />
            </div>
        </div>
    );
}

export default EventInfo;