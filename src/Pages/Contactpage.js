import React from 'react';
import styled from 'styled-components';
import { MainLayout } from '../Components/Layout/MainLayout';
import { InnerLayout } from '../Components/Layout/InnerLayout';
import Title from '../Components/Title/Title';
import Button from '../Components/Button/Button';
import ContactItem from '../Components/Contact/ContactItem';

const ContactPageStyled = styled.section`
    &.contact-section{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-column-gap: 2rem;

        @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

const ContactForm = styled.div`
    width: 100%;

    @media screen and (max-width: 502px){
        width: 100%;
    }
`;

const ContactFiend = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    position: relative;
    width: 100%;
`;

const ContactLabel = styled.label`
    position: absolute;
    left: 20px;
    top: -25px;
    display: inline-block;
    background-color: #10121A;
    padding:0 0.5rem;
    color: #fff;
`;

const ContactInput = styled.input`
    border: 1px solid #2e344e;
    outline: none;
    background: transparent;
    height: 50px;
    padding: 0 15px;
    width: 100%;
    color: #fff;
`;

const ContactTextarea = styled.textarea`
    background-color: transparent;
    border: 1px solid #2e344e;
    outline: none;
    color: #fff;
    width: 100%;
    padding: 0.8rem 1rem;
`;

const RightContent = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
            
    @media screen and (max-width: 502px){
        width: 70%;
    }
`;

const Contactpage = () => {
    return (
        <MainLayout>
            <Title title={'Contact Me'} />
            <ContactPageStyled>
            <InnerLayout className={'contact-section'}>
                <ContactForm>
                    <ContactFiend>
                        <ContactLabel htmlFor='name'>Enter your name</ContactLabel>
                        <ContactInput type='text' />
                    </ContactFiend>
                    <ContactFiend>
                        <ContactLabel htmlFor='email'>Enter your email</ContactLabel>
                        <ContactInput type='email' />
                    </ContactFiend>
                    <ContactFiend>
                        <ContactLabel htmlFor='text-area'>Enter your Message</ContactLabel>
                        <ContactTextarea name='textarea' id='textarea' cols='30' row='10' />
                    </ContactFiend>
                    <ContactFiend>
                        <Button title={'Send Email'} />
                    </ContactFiend>
                </ContactForm>
                <RightContent>
                    <ContactItem title={'Email'} con={'tkzw4869@gmail.com'} />
                </RightContent>
            </InnerLayout>
            </ContactPageStyled>
        </MainLayout>
    )
}

export default Contactpage