import React from "react";
import styled from "styled-components";

const ProductDiv = styled.div`
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


const Products = () => {
    return (
        <ProductDiv>
            <HeaderDiv>
            <Header>Available Products</Header>
            </HeaderDiv>

        </ProductDiv>
    )

}


export default Products;