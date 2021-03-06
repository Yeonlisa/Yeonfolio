import React from 'react';
import styled from 'styled-components';

const TitleStyled = styled.div`
    position: relative;

    @media screen and (max-width: 700px){
        margin-top: 3rem;
        font-size: 2.8rem;
    }
`;

const TitleName = styled.h2`
    color: #fff;
    font-size: 3.1rem;
    font-weight: 600;
    text-transform: uppercase;
    position: relative;
    padding-bottom: 0.5rem;
    margin-left: 1rem;
    
    @media screen and (max-width: 700px){
        margin-top: 3rem;
        font-size: 2.8rem;
    }
`;

const Title = ({title}) => {
    return (
        <TitleStyled>
            <TitleName>{title}</TitleName>
        </TitleStyled>
    )
}

export default Title