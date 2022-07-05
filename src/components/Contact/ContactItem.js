import React from 'react';
import styled from 'styled-components';

const ContactItemStyled = styled.div`
    padding:1.5rem 2rem;
    background-color: #191D2B;
    display: flex;
    align-items: center;
    
    &:not(:last-child){
        margin-bottom: 2.5rem;
    }
`;

const RightContent = styled.div``;

const ContactTitle = styled.h6`
    color: #fff;
    font-size: 1.2rem;
    padding-bottom: .6rem;
`;

const ContactParagraph = styled.p`
    color: #fff;
    padding: 0.1rem 0;
`;

const ContactItem = ({title, con}) => {
    return (
        <ContactItemStyled>
            <RightContent>
                <ContactTitle>{title}</ContactTitle>
                <ContactParagraph>{con}</ContactParagraph>
            </RightContent>
        </ContactItemStyled>
    )
}

export default ContactItem