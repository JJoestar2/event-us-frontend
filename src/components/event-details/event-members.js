import React from 'react';

import UserInfo from '../user-info';
import {Button, List, ListItem} from '../common';
import { ReactComponent as UsersCount } from '../../images/people_24px_outlined.svg'

const EventMembers = (props) => {
    let users = [
        {id:1, name: "Томка Ю.Я"},
        {id:2, name: "Руснак М.А"},
        {id:3, name: "Billy Herringhton"},
        {id:4, name: "John Snow"},
        {id:5, name: "Jack Snow"},
        {id:6, name: "James Darkholme"}
    ];
    return (
        <div className="event-card__members">
            <div className="event-card__members-top">
                <span>Участники: <UsersCount /> 9</span>
                <Button className="btn-more btn-orange">
                    Поділитись
                </Button>
            </div>
        <div className="event-card__members-list">
        <List className="members-list">
            {
                users.map((item) => {
                    return (
                        <ListItem key={item.id} className="members-list-item">
                            <UserInfo name={item.name} />
                        </ListItem>
                    );
                })
             }
            </List>
        </div>
    </div>
    );
}

export default EventMembers;