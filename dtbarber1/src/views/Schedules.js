import React from "react";
import styled from "styled-components";

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
                        <h1>Natalie</h1>
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