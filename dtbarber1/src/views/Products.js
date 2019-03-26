import React from "react";
import styled from "styled-components";
import logo from "../assets/suavelogo.png";
import boy from "../assets/suaveboy.jpg";
import girl from "../assets/suavegirl.jpg";

const ProductDiv = styled.div`
width: 100%;
height: 100vh;
`;

const HeaderDiv = styled.div`
display: flex;
justify-content: space-between;
margin-top: 1%;
`;



const Header = styled.h1`
height: min-content;
`;


const Products = () => {
    return (
        <ProductDiv>
            <HeaderDiv>
                <img src={boy} width={200} height={200}/>
                <img src={logo} width={400} height={200}/>
                <img src={girl} width={200} height={200}/>
            </HeaderDiv>

        </ProductDiv>
    )

}


export default Products;