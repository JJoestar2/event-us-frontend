import {
    GET_EVENTS,
    GET_EVENT,
    GET_USER_EVENTS,
    ADD_EVENT
} from "./types";

 import EventService from "../services/events-service";

 export const getEvents = () => (dispatch) => {
    return EventService.getEvents()
    .then((response) => {
        dispatch({
          type: GET_EVENTS,
          payload: response
      });  
    });  
 };

 export const getEvent = (id) => (dispatch) => {
  return EventService.getEvent(id)
  .then((response) => {
      dispatch({
        type: GET_EVENT,
        payload: response
    });  
  });  
};

export const getUserEvents = (id) => (dispatch) => {
  return EventService.getUserEvents(id)
  .then((response) => {
      dispatch({
        type:  GET_USER_EVENTS,
        payload: response
    });  
  });  
};

 export const addEvent = (title, description, location, dateCreation, userId) => (dispatch) => {
    return EventService.addEvent(title, description, location, dateCreation, userId)
    .then((response) => {
        dispatch({
          type: ADD_EVENT,
          payload: response
        }); 
    }); 
};