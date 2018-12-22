import React, { Component } from 'react';
import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import logger from "redux-logger";
import thunk from "redux-thunk";
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
    case "FETCH_USERS": {
      state = {...state, fetching: true}
      break;
    }
    case "FETCH_USERS_REJECTED": {
      state = {...state, fetching: false, error: action.payload}
      break;
    }
    case "FETCH_USERS_FULFILLED": {
      state = {...state, fetching: false, fetched: true, user: action.payload}
      break;
    }
    default: {
      break;
    }
  }
  return state;
};

const middleware = applyMiddleware(thunk, logger, promise())
const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log("store change", store.getState());
})

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
