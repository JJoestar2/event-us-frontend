import axios from "axios";
import authHeader from './auth-header';

const API_URL = "http://localhost:8080/";
let token = authHeader();
let headerToken = token;

const getEvents = () => {
    return axios.get(API_URL + 'api/event/all', {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': headerToken
        }
    }).then((response) => {
        return response.data;
    });
};

const getEvent = (id) => {
    return axios.get(API_URL + 'api/event/' + id, {
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': headerToken
        }
    }).then((response) => {
        return response.data;
    });
};

const getUserEvents = (id) => {
    return axios.post(API_URL + 'api/event/user-events', {
        userId: id
    }).then((response) => {
        return response.data;
    });
};

const addEvent = (title, description, location, dateCreation, userId) => {
    return axios.post(API_URL + 'api/event/add', {
        title, 
        description, 
        location, 
        dateCreation,
        userId
    },
    {
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': headerToken
    }
    }).then((response) => {
        return response.data;
    });
};


export default {
    getEvents,
    getEvent,
    getUserEvents,
    addEvent
};