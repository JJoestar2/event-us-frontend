import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/";
let token = authHeader();
let headerToken = token;

const register = (username, surname, city, phone, dateBirth, email, password) => {
    return axios.post(API_URL + 'api/auth/signup', {
        username, 
        surname, 
        city, 
        phone,
        dateBirth, 
        email, 
        password
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "api/auth/signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
        localStorage.setItem("token", JSON.stringify(response.data.accessToken));
      }
      return response.data;
    });
};

const logout = () => {
    localStorage.removeItem("user");
};

const update = (id, username, surname, city, phone, dateBirth, email) => {
  return axios.patch(API_URL + 'api/user/' + id, {
      username, 
      surname, 
      city, 
      phone,
      dateBirth, 
      email
  },
    {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': headerToken
    }
  }).then((response) => {
    localStorage.removeItem("user");
    localStorage.setItem("user", JSON.stringify(response.data));
    return response.data;
  });
};

export default {
    register,
    login,
    update,
    logout,
  };