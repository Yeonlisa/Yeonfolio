import React from 'react';
import styled from 'styled-components';
import AboutSection from '../Components/About/AboutSection.js';
import { MainLayout } from '../Components/Layout/MainLayout.js'
import SkillsSection from '../Components/Skill/SkillsSection.js';
import Title from '../Components/Title/Title.js';

const AboutStyled = styled.section``;

const Aboutpage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About me'} />
                <AboutSection />
                <Title title={'Skills'} />
                <SkillsSection />
            </AboutStyled>
        </MainLayout>
    )
}

export default Aboutpage