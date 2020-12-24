import React from 'react';
import Avatar from '../avatar';

const UserInfo = (props) => {
    return (
        <div className="user">
            <Avatar name = {props.name} />
            <span className="user-name">{props.name  + ' ' + props.surname}</span>
        </div>
    );
}

export default UserInfo;