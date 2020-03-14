import React, { Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import {Navbar} from 'react-bootstrap';
import {createStore, applyMiddleware,} from 'redux';
import thunk from "redux-thunk";
import logger from "redux-logger";
import {Provider} from "react-redux";
import {ButtonEvent, HoverSection} from "./Events";
import {farmerReducer} from "./reducers";
import FarmerContainer from "./FarmerContainer";

const store = createStore(farmerReducer, applyMiddleware(thunk,logger));

class App extends Component {


  render() {
    return (

      <Provider store={store}>
        <div className="App">
          <Navbar bg="dark" className="mb-5 justify-content-center">
            <h2 className="text-white text-center">Basic React Redux Tutorial</h2>
          </Navbar>
          <main>
            <FarmerContainer />
          </main>
          <div className="container">
            <ButtonEvent/>
            <div className="result">
            </div>
            <HoverSection/>
          </div>
        </div>

      </Provider>

    );
  }
}

export default App;
