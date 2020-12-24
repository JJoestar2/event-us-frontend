import React from 'react';
import Auth from '../../components/auth';

const AuthPage = () => {
    return (
        <div className="l-auth-page bg-blue">
            <section className="entering-page-form">
                <h2 className="entering-page-form-header">Авторизація</h2>
                <div className="entering-page-form-box">
                    <Auth />
                </div>
            </section>
        </div>
    );
}

export default AuthPage;