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
justify-content: space-around;
margin-top: .6%;
// background-color: gold;
`;

const ContentDiv = styled.div`
margin: 0 15%;
`;

const Content = styled.div`
font-size: 1.3rem;
font-weight: bold;
`;






const Products = () => {
    return (
        <ProductDiv>
            <HeaderDiv>
                <img src={boy} width={200} height={200}/>
                <img src={logo} width={400} height={200}/>
                <img src={girl} width={200} height={200}/>
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

        </ProductDiv>
    )

}


export default Products;