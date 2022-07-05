import React from 'react';
import styled from 'styled-components';

const AboutSectionStyled = styled.div`
    margin-top: 1rem;
    display: flex;

    @media screen and (max-width:1000px){
        flex-direction: column;
    }
`;

const Introduce = styled.p`
    color: #fff;
    padding: 1rem;
    margin-bottom: 2rem;
`;

const AboutSection = () => {
    return (
        <AboutSectionStyled>
            <Introduce>
                안녕하세요, 주니어 프론트엔드 개발자 연호진 입니다.<br/>
                스크롤 또는 마우스의 움직임에 따라 역동적으로 변화하는 인터렉티브 웹페이지를 접한 후 웹개발에 관심이 생겨 코드스테이츠 20주 과정에 지원, 합류하여
                수료하였습니다.<br/>
                수강중에는 React와 Styled-Components를 적용한 서비스를 2번 개발한 경험이 있으며, 수료후에는 HTML과 CSS, Vanilla JavaScript를 적용한 서비스를 2번 개발한 경험이 있습니다.<br/>
                현재는 TypeScript를 학습중에 있으며, Next.js 또한 학습 예정에 있습니다.<br/>
                꾸준한 개발과 학습을 바탕으로 더 빛나가면서 경청하고, 준비되어 있는 개발자가 되겠습니다.<br/>
            </Introduce>
        </AboutSectionStyled>
    )
}

export default AboutSection