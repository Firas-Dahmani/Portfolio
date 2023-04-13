import React from 'react'
import styled from 'styled-components';

const StyledAboutSection = styled.section`
  width: 100%;
  min-height: 300px;
  display: flex;
  padding: 0;
  flex-direction: unset;
`;

const AboutTitle = styled.h2`
  transform: rotate(-90deg);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutText = styled.div`
  padding: 40px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeparatorLine = styled.div`
  border: 1px solid rgba(247, 244, 228, 0.35);
`;

function About() {
  return (
    <StyledAboutSection>
      <AboutTitle>ABOUT ME</AboutTitle>
      <SeparatorLine />
      <AboutText>
        <p>
          As a Full Stack Developer, I specialize in writing clean and functional code that delivers great performance. With advanced skills in JavaScript and frameworks such as React, Node.js, and Express, I have built a strong foundation in web development. I am a strong communicator, work well in teams, and excel at problem-solving. I have experience with Redux-Toolkit state management, SQL and NoSQL databases, REST API development, Socket.io, and DevOps, as well as unit testing. I am committed to delivering high-quality work that exceeds expectations, and I am eager to take on new challenges to continue to grow my skills.
        </p>
      </AboutText>
    </StyledAboutSection>
  )
}

export default About