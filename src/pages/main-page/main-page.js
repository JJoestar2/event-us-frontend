import React from 'react';
import { useSelector } from "react-redux";

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';
import EventCard from '../../components/event-card';
import EventSearch from '../../components/event-search';

import {Button} from '../../components/common';
import {ReactComponent as AddIcon} from '../../images/add_24px_outlined.svg';

const MainPage = (props) => {
    const { user: currentUser } = useSelector((state) => state.auth);
    if(!currentUser) props.history.push("/auth");
    else {
        return (
            <div className="main-page">
                <Header user={currentUser} />
                <div className="main-page-wrap">
                    <Sidebar />
                    <div className="main-page-wrap__container">
                        <div className="main-page-wrap__top">
                            <EventSearch class='search-pepople-form' />
                            <div className="main-page-wrap__btn-panel">
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
}

export default MainPage;