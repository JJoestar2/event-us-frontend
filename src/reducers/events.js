import {
    GET_EVENTS,
    GET_EVENT,
    GET_USER_EVENTS,
    ADD_EVENT
} from "../actions/types";

const initialState = {
    events: [],
    userevents: [],
    event:[]
 };

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch(type) {
        case GET_EVENTS:
            return {
                ...state,
                events: payload
               };

            case GET_EVENT:
                return {
                    ...state,
                    event: payload
                };
                
            case GET_USER_EVENTS:
                return {
                    ...state,
                    userevents: payload
                };

        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, payload]
            };

        default:
            return state;
    }
}