import React from "react";
import styled from "styled-components";


const AboutDiv = styled.div`
width: 100%;
height: 100vh;
`;

const HeaderDiv = styled.div`
display: flex;
justify-content: center;
`;



const Header = styled.h1`
height: min-content;
`;


const About = () => {
    return (
        <AboutDiv>
            <HeaderDiv>
            <Header>About Us</Header>
            </HeaderDiv>

        </AboutDiv>
    )

}


export default About;