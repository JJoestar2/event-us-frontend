import React, {useState} from 'react';
import { useDispatch, useSelector  } from "react-redux";
import { updateUser } from "../../actions/auth";

import Header from '../../components/header';


import {Form, Input, Button} from '../../components/common';

const SettingsPage = (props) => {

    const { user: currentUser } = useSelector((state) => state.auth);

    if(!currentUser) props.history.push("/auth");

    const [values, setValues] = useState({
        id: currentUser._id, 
        username: currentUser.username, 
        surname: currentUser.surname, 
        city: currentUser.city, 
        phone: currentUser.phone,  
        dateBirth:currentUser.dateBirth,
        email: currentUser.email
    });

    const dispatch = useDispatch();
  
    const handleInputChange = e => {
          const {name, value} = e.target
          setValues({...values, [name]: value});
    };

    const handleUpdateUser = (e) => {
        e.preventDefault();
        dispatch(updateUser(values.id, values.username, values.surname, values.city, values.phone, values.dateBirth, values.email));
    };
    
    return (
        <div className="settings-page">
            <Header user={currentUser} />
            <div className="settings-page-wrap">
                <div className="form-wrap">
                    <div className="user-form">
                        <div className="user-form-block">
                            <div className="user-form-header">
                                <span>Дані користувача:</span>
                            </div>
                            <div className="user-form-data">
                                <Form onSubmit={handleUpdateUser}>
                                    <div className="user-form-group">
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="username" value={values.username} onChange={handleInputChange} />
                                                <span className="omrs-input-label">Ім'я</span>
                                            </label>
                                        </div>
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="surname" value={values.surname} onChange={handleInputChange} />
                                                <span className="omrs-input-label">Прізвище</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="user-form-group">
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="city" value={values.city} onChange={handleInputChange} />
                                                <span className="omrs-input-label">Місто</span>
                                            </label>
                                        </div>
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="phone" value={values.phone} onChange={handleInputChange} />
                                                <span className="omrs-input-label">Моб.тел</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="user-form-group">
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="dateBirth" value={values.dateBirth} onChange={handleInputChange} />
                                                <span className="omrs-input-label">Дата народження</span>
                                            </label>
                                        </div>
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="email" value={values.email} onChange={handleInputChange} />
                                                <span className="omrs-input-label">Email</span>
                                            </label>
                                        </div>
                                    </div>
                                    <Button className="save-btn" type="submit">Зберегти</Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SettingsPage;