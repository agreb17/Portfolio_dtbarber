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

const Hours = styled.div`

`;

const ImageDiv = styled.div`
margin-left: auto;
// background: url(${anthonyimg});
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
                        <ImageDiv>
                        <img src={anthonyimg} width={220} height={328} />
                        </ImageDiv>
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
                        <ImageDiv>
                        <img src={anthonyimg} width={220} height={328} />
                        </ImageDiv>
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
                        <ImageDiv>
                        <img src={anthonyimg} width={220} height={328} />
                        </ImageDiv>
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
                        <ImageDiv>
                        <img src={anthonyimg} width={220} height={328} />
                        </ImageDiv>
                    </BarbersBox>
                </Gents>
            </BarbersContainer>

        </BarbersDiv>
    )

}


export default Schedules;