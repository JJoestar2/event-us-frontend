import React from 'react';
import { useSelector } from "react-redux";

import Header from '../../components/header';
import Sidebar from '../../components/sidebar';


import {Form, Input, Button} from '../../components/common';

const SettingsPage = (props) => {
    const { user: currentUser } = useSelector((state) => state.auth);
    return (
        <div className="settings-page">
            <Header user={currentUser} />
            <div className="settings-page-wrap">
                <Sidebar />
                <div className="form-wrap">
                    <div className="user-form">
                        <div className="user-form-block">
                            <div className="user-form-header">
                                <span>Дані користувача:</span>
                            </div>
                            <div className="user-form-data">
                                <Form>
                                    <div className="user-form-group">
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="username" value={currentUser.username} />
                                                <span className="omrs-input-label">Ім'я</span>
                                            </label>
                                        </div>
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="surname" value={currentUser.surname} />
                                                <span className="omrs-input-label">Прізвище</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="user-form-group">
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="city" value={currentUser.city} />
                                                <span className="omrs-input-label">Місто</span>
                                            </label>
                                        </div>
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="phone" value={currentUser.phone} />
                                                <span className="omrs-input-label">Моб.тел</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="user-form-group">
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="date" name="dateBirth" value={currentUser.dateBirth} />
                                                <span className="omrs-input-label">Дата народження</span>
                                            </label>
                                        </div>
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="email" value={currentUser.email} />
                                                <span className="omrs-input-label">Email</span>
                                            </label>
                                        </div>
                                    </div>
                                    <Button className="save-btn" type="submit">Зберегти</Button>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="user-form">
                        <div className="user-form-block">
                            <div className="user-form-header">
                                <span>Змінити пароль:</span>
                            </div>
                            <div className="user-form-data">
                                <Form>
                                    <div className="user-form-group">
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="oldpass" />
                                                <span className="omrs-input-label">Старий пароль</span>
                                            </label>
                                        </div>
                                        <div className="omrs-input-group">
                                            <label className="omrs-input-underlined">
                                                <Input type="text" name="password" />
                                                <span className="omrs-input-label">Новий пароль</span>
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