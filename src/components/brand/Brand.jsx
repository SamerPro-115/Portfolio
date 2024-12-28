import React from "react";
import styled from "styled-components";
import brandLight from './samerPro.png';
import brandDark from './samerPro.png';

const MainBrand = styled.div`
   img{
    width : ${props => props.width};
    max-width: 100%;
    height: ${props => props.height};
   }
   .v-light & , & {
        .logo-dark{
           display : block ;     
        }
        .logo-light{
            display : none;    
        }
   }
    
   .v-dark & {
       .logo-dark{
           display : none ;     
        }
        .logo-light{
            display : block;    
        }
   }
   
`;

const Brand = ({width, height, alt}) => {
    return (
        <MainBrand className="main-brand"  width={"100px"} height={"50px"}>
            <img className="logo-light" src={brandLight} alt={`${alt} - logo light`} width={"100px"} height={"50px"}/>
            <img className="logo-dark" src={brandDark} alt={`${alt} - logo dark`} width={"100px"} height={"50px"}/>
        </MainBrand>
    );
}

MainBrand.defaultProps = {width: '100%', height: 'auto'}
Brand.defaultProps = {alt: "SamerPro"}

export default React.memo(Brand);