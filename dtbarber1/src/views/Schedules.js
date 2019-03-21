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
border: 2px solid red;
display: flex;
`;

const Name = styled.h1`

`;

const Schedule = styled.h2`
margin-top: 10%;
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
                        <h1>Jodi</h1>
                    </BarbersBox>
                    <BarbersBox>
                        <Name>Natalie</Name>
                        <Schedule>S <br/>
                            M <br/>
                            T <br/>
                            W <br/>
                            Th <br/>
                            F <br/>
                            Sa
                        </Schedule>
                        <ImageDiv>
                        <img src={anthonyimg} width={220} height={328} />
                        </ImageDiv>
                    </BarbersBox>
                </Ladies>
                <Gents>
                    <BarbersBox>
                        <h1>Robbie</h1>
                    </BarbersBox>
                    <BarbersBox>
                        <h1>Rob</h1>
                    </BarbersBox>
                </Gents>
            </BarbersContainer>

        </BarbersDiv>
    )

}


export default Schedules;