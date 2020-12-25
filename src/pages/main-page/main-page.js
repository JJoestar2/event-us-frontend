import React, { useState,useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import { getEvents } from "../../actions/events";

import Header from '../../components/header';
import EventCard from '../../components/event-card';
import EventSearch from '../../components/event-search';

import {Button} from '../../components/common';
import {ReactComponent as AddIcon} from '../../images/add_24px_outlined.svg';

import Modal from '../../components/modal';
import AddEventForm from '../../components/AddEventForm';

const MainPage = (props) => {
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    setTimeout (useEffect(() => { dispatch(getEvents()); }, []), 1000);
    const events = useSelector((state) => state.events).events;
    const [open, setOpen] = useState(false);

    if(!currentUser) {
            props.history.push("/auth");
    } 

        return (
            <div className="main-page">
                <Header user={currentUser} />
                <div className="main-page-wrap">
                    <div className="main-page-wrap__container">
                        <div className="main-page-wrap__top">
                            <EventSearch class='search-pepople-form' />
                            <div className="main-page-wrap__btn-panel">
                                <div onClick={ () => setOpen(!open) }>
                                    <Button className="btn-add-event">
                                        <span>Створити івент</span>
                                        <AddIcon />
                                    </Button>   
                                </div>
                                <Modal title="Cтворення івенту" show={open} close={ () => setOpen(!open)} > <AddEventForm /> </Modal>
                                <select className="sort">
                                    <option>All</option>
                                    <option>Desc</option>
                                    <option>Asc</option>
                                </select>
                            </div>
                        </div>
                        <div className="events">
                            {
                                events.length > 0
                                ? events.map((item) => {
                                        return (
                                            <EventCard key={item._id} item={item} />
                                        );
                                    })
                                : 'На даний момент подій немає'
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    
}

export default MainPage;