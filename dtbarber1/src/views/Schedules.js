import React from "react";
import styled from "styled-components";
import anthonyimg from "../assets/anthonyg.jpg";

const BarbersDiv = styled.div`
width: 100%;
height: 100vh;
`;

const BarbersContainer = styled.div`
display: flex;
`;

const Ladies = styled.div`

`;

const Gents = styled.div`

`;

const BarbersBox = styled.div`
width: 50vw;
height: 50vh;
border: 2px solid black;
display: flex;
`;

const Name = styled.h1`
height: min-content;
text-decoration: underline;
`;

const ScheduleDiv = styled.div`
margin-left: 5%;
`;

const Days = styled.div`
font-size: 1.5rem;
font-weight: bold;
`;

const ImageDiv = styled.div`
background-image: url(${anthonyimg});
width: 300px;
background-position: -312px -342px;
margin-left: auto;
`;


const Schedules = () => {
    return (
        <BarbersDiv>
            <BarbersContainer>
                <Ladies>
                    <BarbersBox>
                    <ScheduleDiv>
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
                        </ScheduleDiv>
                        <ImageDiv/>
                    </BarbersBox>
                    <BarbersBox>
                        <ScheduleDiv>
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
                        </ScheduleDiv>
                        <ImageDiv/>
                    </BarbersBox>
                </Ladies>
                <Gents>
                    <BarbersBox>
                    <ScheduleDiv>
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
                        </ScheduleDiv>
                        <ImageDiv/>
                    </BarbersBox>
                    <BarbersBox>
                    <ScheduleDiv>
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
                        </ScheduleDiv>
                        <ImageDiv/>
                    </BarbersBox>
                </Gents>
            </BarbersContainer>

        </BarbersDiv>
    )

}


export default Schedules;