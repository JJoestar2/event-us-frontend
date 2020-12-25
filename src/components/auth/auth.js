import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from 'react-router-dom';

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import {NavLink} from 'react-router-dom';

import { login } from "../../actions/auth";

const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
};

const Auth = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [values, setValues] = useState({email: '', password:''});
    const [loading, setLoading] = useState(false);

    const { isLoggedIn } = useSelector(state => state.auth);
    const { message } = useSelector(state => state.message);

    const dispatch = useDispatch();

    const handleInputChange = e => {
      const {name, value} = e.target
      setValues({...values, [name]: value});
  }

    const handleLogin = (e) => {
        e.preventDefault();
    
        setLoading(true);
    
        form.current.validateAll();
    
        if (checkBtn.current.context._errors.length === 0) {
          dispatch(login(values.email, values.password))
            .then(() => {
              props.history.push("/main");
              window.location.reload();
            })
            .catch(() => {
              setLoading(false);
            });
        } else {
          setLoading(false);
        }
      };
    
      if (isLoggedIn) {
        return <Redirect to="/main" />;
      }

    return (
        <Form className="entering-form" onSubmit={handleLogin} ref={form}> 
                <Input 
                    type="text" 
                    name="email"  
                    placeholder="Логін" 
                    value={values.email} 
                    onChange={handleInputChange}
                    validations={[required]} />

                <Input 
                    type="password" 
                    name="password" 
                    placeholder="Пароль"               
                    value={values.password}
                    onChange={handleInputChange}
                    validations={[required]} />

                <div className="form-group">
                        {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                         <button type="submit" className="btn-send" disabled={loading}>Підтвердити</button>
                </div>

                {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )
                }

                <CheckButton style={{ display: "none" }} ref={checkBtn} />

                <div className="entering-form-bottom">
                    <span>Don't have an account?
                        <NavLink to = "/register"> Register </NavLink>
                    </span>
                </div>
        </Form>
    );
}

export default Auth;