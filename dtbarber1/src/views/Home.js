import React from "react";
import styled from "styled-components";
import dtbimg from "../assets/dtbpic2.jpg";
import Schedules from "./Schedules";
import About from "./About";


const HomeViewContainer = styled.div`
width: 100%;
// height: 100vh;
// background: url(${dtbimg});
// background-size: cover;


`;

const HomeDiv = styled.div`
width: 100%;
height: 100vh;
background: url(${dtbimg});
background-size: cover;
display: flex;
justify-content: center;
`;

const Header = styled.h1`
height: min-content;
`;

const Home = props => {
    return (
      <HomeViewContainer>
        <HomeDiv>
            <Header>DownTown Barber</Header>
        </HomeDiv>
        <Schedules/>
        <About/>
      </HomeViewContainer>

          
      
    );
  }


export default Home;