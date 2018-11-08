import {FETCH_WEATHER} from "../actions/index";

// an array of state to store cities
export default  function (state = [], action) {
    //redux promise is a middleware to manipulate promises
    // if a payload is a promise,it stops actions entirely and wait for the request to finish.
    // After the request finishes, it dispatch a new action of same type with a payload of resolved request
    console.log('Action received', action);
    switch (action.type) {
        case FETCH_WEATHER:
            // never mutate states.
            return state.concat([action.payload.data]); // concat does not change the existing array, it build a new array with new elements. better readability.
            // return [action.playload.data, ...state]; // nearly identical as the above statement. take payload data and insert into state(the front), ...state means take everything from state
            //[city,city,city]
    }

    return state;
    
}