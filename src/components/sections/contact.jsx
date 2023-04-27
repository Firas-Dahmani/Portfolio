import React from 'react'
import styled from 'styled-components';
import  IconGitHub  from '../icons/github.jsx';
import IconResume from '../icons/resume.jsx';
import  IconLinkedin from '../icons/linkedin.jsx';

const StyledContactSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    text-align: center;
    width: 90%;
  }
`;

const ContactIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`;

const StyledIcon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  text-decoration: none;
  color: inherit;

  svg {
    width: 32px;
    height: 32px;
  }

  svg:hover {
    opacity: 0.58;
  }

  @media (min-width: 1024px) {
    /* for desktops */
    svg { width: 48px; height: 48px; }
  }
`;

function contact() {
  return (
    <StyledContactSection>
      <h2>Get in touch</h2>
      <p>Looking forward to hearing from you soon! Let's connect and discuss how my skills and experience can contribute to your team.</p>
      <ContactIcon>
        <StyledIcon href="https://github.com/Firas-Dahmani" target="_blank" >
          <IconGitHub />
          <p>Gtihub</p>
        </StyledIcon>

        <StyledIcon href="#" >
          <IconResume />
          <p>Resume</p>
        </StyledIcon>

        <StyledIcon href="https://www.linkedin.com/in/firas-dahmani/" target="_blank">
          <IconLinkedin />
          <p>Linkedin</p>
        </StyledIcon>
      </ContactIcon>
    </StyledContactSection>
  )
}

export default contact