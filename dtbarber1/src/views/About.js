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

const ContentDiv = styled.div`
margin: 0 15%;
`;

const Content = styled.div`
font-size: 1.3rem;
font-weight: bold;
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
            <ContentDiv>
                <Content>Lorem ipsum dolor sit amet, consectetur 
                    adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Cras semper auctor 
                    neque vitae. Fringilla ut morbi tincidunt augue 
                    interdum velit euismod in pellentesque. Hendrerit 
                    gravida rutrum quisque non. Mattis ullamcorper velit 
                    sed ullamcorper morbi tincidunt. Congue mauris rhoncus 
                    aenean vel elit scelerisque mauris pellentesque. 
                    Augue eget arcu dictum varius duis at consectetur lorem. 
                    Semper risus in hendrerit gravida rutrum quisque non. 
                    Senectus et netus et malesuada fames. 
                    Sagittis id consectetur purus ut faucibus pulvinar 
                    elementum integer. Ut ornare lectus sit amet est placerat 
                    in egestas. Ullamcorper a lacus vestibulum sed. Enim sit 
                    amet venenatis urna cursus eget. Justo eget magna fermentum 
                    iaculis eu non diam phasellus vestibulum. Vel pharetra vel 
                    turpis nunc eget lorem. Commodo quis imperdiet massa 
                    tincidunt nunc pulvinar sapien et ligula. Orci eu lobortis 
                    elementum nibh tellus molestie nunc non blandit. Feugiat 
                    vivamus at augue eget arcu dictum. Volutpat maecenas 
                    volutpat blandit aliquam etiam erat.</Content>
            </ContentDiv>

        </AboutDiv>
    )

}


export default About;