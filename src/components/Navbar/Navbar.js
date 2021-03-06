import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../Navbar/Yeonfolio.png';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa'; 

const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    z-index: 100000;

    @media (min-width: 700px) {
        height: 50px;
    }
`;

const LeftContainer = styled.div`
    flex: 70%;
    display: flex;
    align-items: center;
    padding-left: 5%;
    background-color: black;
`;

const RightContainer = styled.div`
    flex: 30%;
    display: flex;
    justify-content: center;
    margin-top: 15px;
    padding-right: 30px;
    background-color: black;
`;

const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

const NavbarLinkContainer = styled.div`
    display: flex;
`;

const NavbarLink = styled(Link)`
    color: white;
    font-size: large;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    margin: 15px;

    @media (max-width: 700px) {
        display: none;
    }
`;

const NavbarLinkExtended = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
    margin: 15px;
`;

const Logo = styled.img`
    margin: 0;
    max-width: 200px;
    height: 80px;
`;

const OpenLinksButton = styled.button`
    width: 0;
    height: 50px;
    background: none;
    border: none;
    color: white;
    font-size: 35px;
    cursor: pointer;

    @media (min-width: 700px) {
        display: none;
    }
`;

const NavbarExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 700px) {
        display: none;
    }
`;

const Bars = styled(FaBars)`
    display: none;
    color: #fff;
    
    @media screen and (max-width: 700px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

const CloseBars = styled(FaTimes)`
    display: none;
    color: #fff;
    
    @media screen and (max-width: 700px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

const Navbar = () => {

    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={LogoImg} alt="" />
                </LeftContainer>
                <RightContainer>
                    <NavbarLinkContainer>
                        <NavbarLink to='/'>Home</NavbarLink>
                        <NavbarLink to='/about'>About</NavbarLink>
                        <NavbarLink to='/project'>Project</NavbarLink>
                        <NavbarLink to='/contact'>Contact</NavbarLink>
                        <OpenLinksButton
                            onClick={() => {
                                setExtendNavbar((curr) => !curr);
                            }}
                        >
                        {extendNavbar ? <CloseBars /> : <Bars />}
                        </OpenLinksButton>
                    </NavbarLinkContainer>
                </RightContainer>
            </NavbarInnerContainer>
            {extendNavbar && (
                <NavbarExtendedContainer>
                    <NavbarLinkExtended to='/'> Home</NavbarLinkExtended>
                    <NavbarLinkExtended to='/about'>About</NavbarLinkExtended>
                    <NavbarLinkExtended to='/project'>Project</NavbarLinkExtended>
                    <NavbarLinkExtended to='/contact'>Contact</NavbarLinkExtended>
                </NavbarExtendedContainer>
            )}
        </NavbarContainer>
    )
}

export default Navbar