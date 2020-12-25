import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom';

import Logo from '../logo';
import UserInfo from '../user-info';
import {List, ListItem} from '../common';
import SearchForm from './search-from';

import { logout } from "../../actions/auth";

import { ReactComponent as UserIcon } from '../../images/person_24px.svg';
import { ReactComponent as SettingsIcon } from '../../images/brightness_high_24px.svg';
import { ReactComponent as LogoutIcon } from '../../images/keyboard_tab_24px.svg';


const Header = (props) => {
    let users = [
        {id:1, name: "Томка Ю.Я"},
        {id:2, name: "Руснак М.А"},
        {id:3, name: "Billy Herringhton"},
        {id:4, name: "Van Darkholme"}
    ];
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const Logout = () => {
        dispatch(logout());
    }
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
                <div className="user-profile" onClick={()=> setShow(!show)}>
                    <UserInfo name={props.user.username} surname={props.user.surname} />
                    { 
                        show 
                        ? <div className="user-profile-menu">
                            <ul>
                                <li>                    
                                    <UserIcon />
                                    <NavLink to="/profile">
                                        Профіль
                                    </NavLink>
                                </li>   
                                <li>  
                                    <SettingsIcon />
                                    <NavLink to="/settings">
                                        Налаштування
                                    </NavLink>
                                </li>  
                                <li onClick={Logout}> 
                                    <LogoutIcon />
                                    <NavLink to="/">
                                        Вихід
                                    </NavLink>
                                </li> 
                            </ul>
                         </div>
                        : null
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;