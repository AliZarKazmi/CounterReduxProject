// This is our Store which contains all management tools
//  Now we have to Handle all the react-STATES in this file

import { createStore } from "redux";

// reducer function
const reducerfn = (state = { counter: 0 }, action) => {
    if(action.type ==="Inc")
    {
        return {counter : state.counter + 1 }
    }

    if(action.type==='Dec')
    {
        return{counter : state.counter-1}
    }
    if(action.type==='Add')
    {
        return {counter : state.counter + action.payload}
    }
    return state
  
  };

const store = createStore(reducerfn);

export default store;
