import React , { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import { register } from "../../actions/auth";

import {NavLink} from 'react-router-dom';


const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };
  
  const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="alert alert-danger" role="alert">
          This is not a valid email.
        </div>
      );
    }
  };
  
  const vpassword = (value) => {
    if (value.length < 6 || value.length > 40) {
      return (
        <div className="alert alert-danger" role="alert">
          The password must be between 6 and 40 characters.
        </div>
      );
    }
  };


const Register = () => {

  const form = useRef();
  const checkBtn = useRef();

  const [successful, setSuccessful] = useState(false);

  const [values, setValues] = useState({username: '', surname: '', city: '', phone: '', email: '', dateBirth:'', password:''});

  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  const handleInputChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]: value});
    }

    const handleRegister = (e) => {
        e.preventDefault();
    
        setSuccessful(false);
    
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
         dispatch(register(values.username, values.surname, values.city, values.phone, values.dateBirth, values.email, values.password))
            .then(() => {
              setSuccessful(true);
            })
            .catch(() => {
              setSuccessful(false);
            });
        }
      };

    return (
        <Form className="entering-form" ref={form} onSubmit={handleRegister} >
            {!successful && (
                <>
                    <Input type="text" name="username" placeholder="Ім'я" value={values.username} onChange={handleInputChange} />

                    <Input type="text" name="surname" placeholder="Прізвище" value={values.surname} onChange={handleInputChange} />

                    <Input type="text" name="city" placeholder="Місто" value={values.city} onChange={handleInputChange} />

                    <Input type="text" name="phone" placeholder="Телефон" value={values.phone} onChange={handleInputChange} />

                    <Input type="date" name="dateBirth" value={values.dateBirth} onChange={handleInputChange} />

                    <Input type="text"  name="email" placeholder="Email" value={values.email} onChange={handleInputChange} validations={[required, validEmail]} />

                    <Input type="password" name="password" placeholder="Пароль" value={values.password} onChange={handleInputChange} validations={[required, vpassword]} />

                    <button type="submit" className="btn-send">Підтвердити</button>

                    <div className="entering-form-bottom">
                        <span>Have an account?
                            <NavLink to = "/auth"> Sign in </NavLink>
                        </span>
                    </div> 
                </> 
            )}

                {message && (
                <div className="form-group">
                    <div className={ successful ? "alert alert-success" : "alert alert-danger" } role="alert">
                        {message}
                    </div>
                </div>
            )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
         </Form>
    );
}

export default Register;