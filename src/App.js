import { combineReducers, createStore } from "redux";
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

const store = createStore(reducers);

store.subscribe(() => {
  console.log("store change", store.getState());
})

store.dispatch({type: "CHANGE_NAME", payload: 'Luke'});
store.dispatch({type: "CHANGE_AGE", payload: 30});

class App extends Component {
  render() {
    return (
      <div className="App">

      </div>
    );
  }
}

export default App;
