import React from 'react';
import {NavLink} from 'react-router-dom';

import {List, ListItem} from '../common';
import UserInfo from '../user-info';

const Sidebar = (props) => {
    let users = [
        {id:1, name: "Томка", surname: "Ю.Я"},
        {id:2, name: "Руснак" , surname: "М.А"},
        {id:3, name: "Billy", surname: "Herringhton"},
        {id:4, name: "Van", surname: "Darkholme"}
    ];
    return (
        <aside className="sidebar">
            <div className="sidebar-wrap">
                <List className="chat-list">
                {
                    users.map((item) => {
                        return (
                            <ListItem key={item.id} className="chat-list-item">
                                <NavLink to="#">
                                    <UserInfo name={item.name} surname={item.surname} />
                                </NavLink>
                            </ListItem>
                        );
                    })
                }
                </List>
            </div>
        </aside>
    );
}

export default Sidebar;