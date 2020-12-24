import React from 'react';

import Input from '../input';
import Label from '../label';

const FormInput = ({name, title, id=`${name}`, ...props}) => {
    return (
        <div>
            <Label htmlFor={id}> {title} </Label>
            <Input {...{name, title, id,...props}} />
        </div>
    );
} 

export default FormInput;