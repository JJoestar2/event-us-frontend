import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from '../logo';
import UserInfo from '../user-info';
import {List, ListItem} from '../common';
import SearchForm from './search-from';


const Header = (props) => {
    let users = [
        {id:1, name: "Томка Ю.Я"},
        {id:2, name: "Руснак М.А"},
        {id:3, name: "Billy Herringhton"},
        {id:4, name: "Van Darkholme"}
    ];
    return (
        <header className="header">
            <div className="header-container">
                <Logo />
                <div className="search-pepople">
                    <div className="search-people-wrap"> 
                        <SearchForm class='search-pepople-form' />
                        <div className="result-block">
                            <List className="people-list">
                                {
                                    users.map((item) => {
                                        return (
                                            <ListItem key={item.id} className="people-list-item">
                                                <NavLink to="#">
                                                    <UserInfo name={item.name} />
                                                </NavLink>
                                            </ListItem>
                                        );
                                    })
                                }
                            </List>
                        </div>
                    </div>
                </div>
                <UserInfo name={props.user.username} surname={props.user.surname} />
            </div>
        </header>
    );
}

export default Header;