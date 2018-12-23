import React, { Component } from 'react';
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";

import promise from "redux-promise-middleware";
import './App.css';

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null,
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case "FETCH_USERS_PENDING": {
      return {...state, fetching: true}
    }
    case "FETCH_USERS_REJECTED": {
      return {...state, fetching: false, error: action.payload}
    }
    case "FETCH_USERS_FULFILLED": {
      return  {...state, fetching: false, fetched: true, user: action.payload}
    }
    default: {
      return state;
    }
  }
};

const middleware = applyMiddleware(logger, promise())
const store = createStore(reducer, middleware);

// store.subscribe(() => {
//   console.log("store change", store.getState());
// })

store.dispatch({
  type: 'FETCH_USERS',
  payload: axios.get("http://rest.learncode.academy/api/wstern/users"),
})

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
