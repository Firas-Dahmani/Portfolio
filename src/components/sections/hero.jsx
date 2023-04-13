import React from 'react'
import styled from 'styled-components';
import backgroundImagePhone from '../../assets/images/hero-phone.png';
import backgroundImageTablet from '../../assets/images/hero-tablet.png';
import backgroundImageDesktop from '../../assets/images/hero-desktop.png';

const StyleHeroSection = styled.section`
  position: relative;
  padding: 0;
  width: 100%;
  height: 165px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 600px) {
    height: 300px;
  }

  @media screen and (min-width: 1024px) {
    height: 400px;
  }
`;

const HeroImage = styled.div`
  background-image: url(${backgroundImagePhone});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  opacity: 35%;

  @media screen and (min-width: 768px) {
    background-image: url(${backgroundImageTablet});
  }

  @media screen and (min-width: 1024px) {
    background-image: url(${backgroundImageDesktop});
  }
`;

function Hero() {
  return (
    <StyleHeroSection>
      <h1>Full Stack Developer</h1>
      <HeroImage />
    </StyleHeroSection>
  )
}

export default Hero