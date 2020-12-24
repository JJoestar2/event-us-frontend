import React from 'react';

import Form from '../common/form';
import Input from '../common/input';
import Button from '../common/button';

import { ReactComponent as SeacrhIcon } from '../../images/youtube_searched_for_24px_outlined.svg';

const EventSearch = (props) => {
    return (
            <Form className={props.class}>
                <Input type="text" placeholder="Введіть назву події" />
                <Button type="submit"> 
                    <SeacrhIcon /> 
                </Button>
            </Form>
    );
}

export default EventSearch;