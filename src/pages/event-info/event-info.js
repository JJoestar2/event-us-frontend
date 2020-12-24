import React from 'react';

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import EventDetails from '../../components/event-details'


const EventInfo = () => {
    return (
        <div className="event-page">
            <Header />
            <div className="event-page-wrap">
                <Sidebar />
                <EventDetails />
            </div>
        </div>
    );
}

export default EventInfo;