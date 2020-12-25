import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";

import { addEvent } from "../../actions/events";

import {Form, Input, Button} from '../../components/common';

const AddEventForm = (props) => {

    const { user: currentUser } = useSelector((state) => state.auth);

    const [values, setValues] = useState({
        title: '', 
        description: '', 
        location: '', 
        dateCreation: '',  
    });

    const dispatch = useDispatch();
  
    const handleInputChange = e => {
          const {name, value} = e.target
          setValues({...values, [name]: value});
    };

    const handleAddEvent = (e) => {
        e.preventDefault();
        dispatch(addEvent(values.title, values.description, values.location, values.dateCreation, currentUser._id));
    };

    return (
        <div className="user-form-data">
            <Form onSubmit={handleAddEvent}>
                <div className="user-form-group">
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <Input type="text" name="title" value={values.title} onChange={handleInputChange} />
                            <span className="omrs-input-label">Заголовок</span>
                        </label>
                    </div>
                </div>
                <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <textarea name="description" value={values.description} onChange={handleInputChange} cols="35" rows="10" />
                            <span className="omrs-input-label">Опис</span>
                        </label>
                </div>
                <div className="user-form-group">
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <Input type="text" name="location" value={values.location} onChange={handleInputChange} />
                            <span className="omrs-input-label">Місце проведення</span>
                        </label>
                    </div>
                    <div className="omrs-input-group">
                        <label className="omrs-input-underlined">
                            <Input type="date" name="dateCreation" value={values.dateCreation} onChange={handleInputChange} />
                            <span className="omrs-input-label">Дата свтворення</span>
                        </label>
                    </div>
                </div>
                <Button className="save-btn" type="submit">Зберегти</Button>
            </Form>
        </div>
    );
}

export default AddEventForm;