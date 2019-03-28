import React from "react";
import styled from "styled-components";
import anthonyimg from "../assets/anthonyg.jpg";

const BarbersDiv = styled.div`
width: 100%;
height: 100vh;
`;

const HeaderDiv = styled.div`
height: 10vh;
display: flex;
justify-content: center;
`;

const Header = styled.div`
font-size: 3rem;
font-weight: bold;
`;

const BarbersContainer = styled.div`
display: flex;
`;

const Ladies = styled.div`

`;

const Gents = styled.div`

`;

const BarbersBox = styled.div`
width: 100vw;
height: 85vh;
display: block;
text-align: center;
margin: 20px;
`;

const Name = styled.h1`
height: min-content;
text-decoration: underline;
margin-top: 0;
`;

const InfoDiv = styled.div`
display: none;
`;

// const AnotherDiv = styled.div`
// margin: 0 auto;
// `;

const Days = styled.div`
font-size: 1.5rem;
font-weight: bold;
`;

const ImageDiv = styled.div`
background-image: url(${anthonyimg});
width: 230px;
height: 175px;
margin: auto;
background-position: -312px -342px;
border-radius: 50%;
&:hover + ${InfoDiv} {
    display: block;
}
&:hover {
    width: 300px;
    height: 225px;
}

`;


const Schedules = () => {
    return (
        <BarbersDiv>
            <HeaderDiv><Header>Meet Our Talented Staff</Header></HeaderDiv>
            <BarbersContainer>
                
                    <BarbersBox>
                        
                       
                        <ImageDiv/>
                            <InfoDiv>
                            <Name>Jodi</Name>
                            <Days>
                                S - 8-4 <br/>
                                M - off<br/>
                                T - off<br/>
                                W - off<br/>
                                Th - 10-6<br/>
                                F - 10-6<br/>
                                Sa - 8-4
                            </Days>
                            </InfoDiv>
                        
                        
                    </BarbersBox>
                    <BarbersBox>
                        <ImageDiv/>
                        <InfoDiv>
                            <Name>Natalie</Name>
                            <Days>
                                S - 8-4 <br/>
                                M - off<br/>
                                T - off<br/>
                                W - off<br/>
                                Th - 10-6<br/>
                                F - 10-6<br/>
                                Sa - 8-4
                            </Days>
                        </InfoDiv>                         
                    </BarbersBox>
                
                    <BarbersBox>
                        <ImageDiv/>
                        <InfoDiv>
                            <Name>Robbie</Name>
                            <Days>
                                S - 8-4 <br/>
                                M - off<br/>
                                T - off<br/>
                                W - off<br/>
                                Th - 10-6<br/>
                                F - 10-6<br/>
                                Sa - 8-4
                            </Days>
                        </InfoDiv>                         
                    </BarbersBox>
                    <BarbersBox>
                        <ImageDiv/>
                        <InfoDiv>
                            <Name>Rob</Name>
                            <Days>
                                S - 8-4 <br/>
                                M - off<br/>
                                T - off<br/>
                                W - off<br/>
                                Th - 10-6<br/>
                                F - 10-6<br/>
                                Sa - 8-4
                            </Days>
                        </InfoDiv>                         
                    </BarbersBox>
               
            </BarbersContainer>

        </BarbersDiv>
    )

}


export default Schedules;