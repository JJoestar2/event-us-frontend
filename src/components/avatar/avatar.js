import React from 'react';
import Image from '../common/image';

const Avatar = (props) => {
    return (
        <Image className="user-avatar" alt={props.name}></Image>
    );
}

export default Avatar;