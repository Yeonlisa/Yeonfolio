import React from 'react';
import styled from 'styled-components';

const SkillCardStyled = styled.div`
    background-color: #191D2B;
    border-left: 1px solid #2e344e;
    border-top: 8px solid #2e344e;
    border-right: 1px solid #2e344e;
    border-bottom: 1px solid #2e344e;
    transition: all .4s ease-in-out;
    
    &:hover{
        border-top: 8px solid #007bff;
        transform: translateY(3px);
    }
`;

const CardZone = styled.div`
    padding: 0.5rem;
    text-align: center;
`;

const SkillImg = styled.img`
    object-fit: scale-down;
`;
const SkillTitle = styled.h4`
    color: #fff;
    font-size: 1.6rem;
    padding: 10px 0;
    position: relative;
`;


const SkillCard = ({image, title}) => {
    return (
        <SkillCardStyled>
            <CardZone>
                <SkillImg src={image} alt='' />
                <SkillTitle>{title}</SkillTitle>
            </CardZone>
        </SkillCardStyled>
    )
}

export default SkillCard