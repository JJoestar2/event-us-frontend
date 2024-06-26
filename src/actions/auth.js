import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
    UPDATE_USER
  } from "./types";

 import AuthService from "../services/auth-service";

 export const register = (username, surname, city, phone, dateBirth, email, password) => (dispatch) => {
   return AuthService.register(username, surname, city, phone, dateBirth, email, password)
   .then((response) => {
     dispatch({
       type: REGISTER_SUCCESS
     });

     dispatch({
      type: SET_MESSAGE,
      payload: response.data.message
    });
  
    return Promise.resolve();
   },
   (error) => {
     const message =
       (error.response &&
         error.response.data &&
         error.response.data.message) ||
       error.message ||
       error.toString();

     dispatch({
       type: REGISTER_FAIL,
     });

     dispatch({
       type: SET_MESSAGE,
       payload: message,
     });

     return Promise.reject();
   });
 };

 export const updateUser = (id, username, surname, city, phone, dateBirth, email) => (dispatch) => {
  return AuthService.update(id, username, surname, city, phone, dateBirth, email)
  .then((response) => {
    dispatch({
      type: UPDATE_USER,
      payload: { user: response } 
    });
 
   return Promise.resolve();
  },
  (error) => {
    const message =
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  });
};


 export const login = (email, password) => (dispatch) => {
   return AuthService.login(email, password).then((response) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { user: response}
    });

    return Promise.resolve();
   },
   (error) => {
    const message =
    (error.response &&
      error.response.data &&
      error.response.data.message) ||
    error.message ||
    error.toString();

    dispatch({
      type: LOGIN_FAIL,
    });

    dispatch({
      type: SET_MESSAGE,
      payload: message,
    });

    return Promise.reject();
  });
 };

 export const logout = () => (dispatch) => {
  AuthService.logout();

  dispatch({
    type: LOGOUT,
  });
};