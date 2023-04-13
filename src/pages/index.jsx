import React from 'react';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Projects, Contact } from '@/components';

const StyledLine = styled.div`
  position: relative;
  width: 100%;
  border: 0.5px solid rgba(247, 244, 228, 0.35);

  @media (max-width: 768px) {
    border: 1px solid rgba(247, 244, 228, 0.35);
  }

  @media (min-width: 1024px) {
    border: 1.5px solid rgba(247, 244, 228, 0.35);
  }
`;

const Index = () => {
  return (
    <Layout className="fillHeight">
      <StyledLine />
      <Hero />
      <StyledLine />
      <About />
      <StyledLine />
      <Jobs />
      <StyledLine />
      <Projects />
      <StyledLine />
      <Contact />
    </Layout>
  );
};

export default Index;