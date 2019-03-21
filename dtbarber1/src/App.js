import React, { Component } from 'react';
// import logo from './logo.svg';
import styled from "styled-components";
import { Route } from "react-router-dom";
import Home from "./views/Home";
import './App.css';


const AppContainer = styled.div`
width: 100%;
height: 100%vh;
`;
class App extends Component {
  render() {
    return (
      <AppContainer>
          <Route exact path="/" render={() => <Home /> } />
        </AppContainer>
      
    );
  }
}

export default App;
