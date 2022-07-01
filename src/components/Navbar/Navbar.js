import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImg from '../Navbar/Yeonfolio.png';

const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: black;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px) {
        height: 80px;
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

const Navbar = () => {

    const [extendNavbar, setExtendNavbar] = useState(false);

    return (
        <NavbarContainer extendNavbar={extendNavbar}>
            <NavbarInnerContainer>
                <LeftContainer>
                    <Logo src={LogoImg} />
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
                        {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
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