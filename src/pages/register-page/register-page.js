import React from 'react';
import Register from '../../components/register';

const RegisterPage = () => {
    return (
        <div className="l-register-page bg-blue">
            <section className="entering-page-form">
                <h2 className="entering-page-form-header">Реєстрація</h2>
                <div className="entering-page-form-box">
                    <Register />
                </div>
            </section>
        </div>
    );
}

export default RegisterPage;