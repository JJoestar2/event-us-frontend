import React from 'react';

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import EventCard from '../../components/event-card';

import {Button} from '../../components/common';
import {ReactComponent as AddIcon} from '../../images/add_24px_outlined.svg';

const UserPage = () => {
    return (
        <div className="main-page">
            <Header />
            <div className="main-page-wrap">
                <Sidebar />
                <div className="main-page-wrap__container">
                    <div className="main-page-wrap__top">
                            <Button className="btn-add-event">
                                <span>Створити івент</span>
                                <AddIcon />
                            </Button>   
                            <select className="sort">
                                <option>All</option>
                                <option>Desc</option>
                                <option>Asc</option>
                            </select>
                    </div>
                    <div className="events">
                        <EventCard />
                        <EventCard />
                        <EventCard />
                        <EventCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPage;