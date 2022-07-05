import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../Layout/InnerLayout';
import SkillCard from './SkillCard';
import html from '../../Image/html5.svg';
import css from '../../Image/css3.svg';
import javascript from '../../Image/javascript.svg';
import react from '../../Image/react.svg';
import redux from '../../Image/redux.svg';
import styledcomponents from '../../Image/styledcomponents.svg';

const SkillsSectionStyled = styled.section``;
const SkillsZone= styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
        
    @media screen and (max-width:1000px){
        flex-direction: column;
    }
        
    @media screen and (max-width:950px){
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width:650px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

const SkillsSection = () => {
    return (
        <InnerLayout>
            <SkillsSectionStyled>
                <SkillsZone>
                    <SkillCard 
                        image={html}
                        title={'HTML'}
                    />
                    <SkillCard 
                        image={css}
                        title={'CSS'}
                    />
                    <SkillCard 
                        image={javascript}
                        title={'JavaScript'}
                    />
                    <SkillCard 
                        image={react}
                        title={'React'}
                    />
                    <SkillCard 
                        image={redux}
                        title={'Redux'}
                    />
                    <SkillCard 
                        image={styledcomponents}
                        title={'Styled-Components'}
                    />
                </SkillsZone>
            </SkillsSectionStyled>
        </InnerLayout>
    )
}

export default SkillsSection