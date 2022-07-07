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
                스크롤 또는 마우스 움직임에 따라 입체적으로 변화하는 웹페이지를 접하면서 웹개발에 관심을 가져 뛰어들었습니다.<br/>
                직접 웹페이지 구현을 하는 일은 제 꿈의 실현이기에 작업하는 매 순간 성취감을 느낍니다.<br/><br/>
                이후 웹개발을 공부하기 위해 코드스테이츠 소프트웨어 엔지니어링 부트캠프에 참여하였고, 20주 과정을 수료하였습니다.<br/> 
                수강 중에는 React에 Styled-Components를 활용한 서비스를 개발 경험이 있으며 수료 후에는 HTML에 CSS, Vanilla JavaScript를 활용한 서비스를 추가적으로 개발하여 유능한 개발자가 되기 위해 개발 역량을 강화하고 있습니다.<br/><br/>
                뿌리 깊은 나무는 흔들리지 않습니다. 기본을 제일 중요하게 생각하며 웹 사이트를 개발할 때, 필요한 기본 바탕을 다지고 이를 기반으로 이슈 발생 시 적극적으로 문제를 해결하기 위해 노력합니다. <br/>
                이슈를 해결하기 위해 팀원과 함께 머리를 맞대고 논의하며 해답을 찾아가는 과정은 늘 즐겁습니다.<br/>
            </Introduce>
        </AboutSectionStyled>
    )
}

export default AboutSection