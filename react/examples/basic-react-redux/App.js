import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {createStore,applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
// import reducer from "./reducers/studentReducer";
import Student from "./container/Student";



const initialState ={
  students:["*"]
}

 function reducer(state = initialState, action){
  switch (action.type) {
    case "GRADE_9":
       return {
         students: action.payload
       };

    case "GRADE_10":
       return {
         students: action.payload
       }

    case "GRADE_11":
       return {
         students: action.payload
       }

    case "GRADE_12":
       return {
         students: action.payload
       }
    case "FETCH_BEGIN":
       return {
         students: state.students
       }
    case "FETCH_SUCCESS":
       return {
         students: action.payload
       }
    case "FETCH_FAIL":
       return {
         students: state.students
       }

    default:
    return {
      students:[]
    }

  }
}


const store = createStore(reducer,applyMiddleware(thunk,logger));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div className="App">
          Hello World
          </div>
          <Student />
      </Provider>

    );
  }
}

export default App;
