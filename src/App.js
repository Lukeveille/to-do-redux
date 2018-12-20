import { applyMiddleware, combineReducers, createStore } from "redux";
import React, { Component } from 'react';
import './App.css';

const userReducer = (state={}, action) => {
  switch(action.type) {
    case "CHANGE_NAME": {
      state = {...state, name: action.payload}
      break;
    }
    case "CHANGE_AGE": {
      state = {...state, age: action.payload}
      break;
    }
    case "E": {
      throw new Error("not this time");
    }
    default: {
      break;
    }
  }
  return state;
};

const tweetsReducer = (state=[], action) => {
  return state;
};

const reducers = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
})

const logger = (store) => (next) => (action) => {
  console.log(action)
  next(action)
}

const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch(e) {
    console.log("No Worky", e);
  }
}

const middleware = applyMiddleware(logger, error)

const store = createStore(reducers, middleware);

store.subscribe(() => {
  console.log("store change", store.getState());
})

store.dispatch({type: "CHANGE_NAME", payload: 'Luke'});
store.dispatch({type: "CHANGE_AGE", payload: 30});
store.dispatch({type: "E", payload: 30});

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
