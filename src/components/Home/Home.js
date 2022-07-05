import React from 'react';
import styled from 'styled-components';
import Particle from './particles';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
`;

const ParticleZone = styled.div`
    position: absolute;
    top: 0;
    left: 0;
`;

const Typography = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
`;

const Title = styled.h1`
    font-size: 4rem;
    color: #fff;

    @media screen and (max-width: 700px) {
        font-size: 3rem;
    }
`;

const Span = styled.span`
    font-size: 4rem;
    color: #057fff;

    @media screen and (max-width: 700px) {
        font-size: 3rem;
    }
`;

const Paragraph = styled.p`
    margin-top: 20px;
    color: #fff;
    font-size: 1.1rem;

    @media screen and (max-width: 700px) {
        font-size: 0.9rem;
    }
`;

const IconZone = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1rem;
`;

const LinkDiv = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all .4s ease-in-out;
    font-size: 2em;
    cursor: pointer;

    &:not(:last-child){
        margin-right: 1rem;
    }

    &.github {
        color: #fff;

        &:hover {
            color: #5F4687;
        }
    }

    &.linkedin {
        color: #0A66C2;

        &:hover {
            color: #fff;
        }
    }
`;

const Home = () => {
    return (
        <HomePageStyled>
            <ParticleZone>
                <Particle />
            </ParticleZone>
            <Typography>
                <Title>Welcome to <Span>Yeonfolio!</Span></Title>
                <Paragraph>안녕하세요, 끊임없이 노력하고 도전하는 프론트엔드 개발자 연호진입니다.</Paragraph>
            <IconZone>
                <LinkDiv href="https://github.com/Yeonlisa" blank="_target" className='github'>
                    <FaGithub />
                </LinkDiv>
                <LinkDiv href="https://www.linkedin.com/in/hojin-yeon-66988522b/" blank="_target" className='linkedin'>
                    <FaLinkedin />
                </LinkDiv>
            </IconZone>
            </Typography>
        </HomePageStyled>
    )
}

export default Home