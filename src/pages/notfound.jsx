import React from 'react';
import styled from 'styled-components';

const ContainerNotFound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

const Description = styled.p`
  font-size: 2rem;
`;

const NotFound = () => {
  return (
    <ContainerNotFound>
      <Title>404</Title>
      <Description>Page not found</Description>
    </ContainerNotFound>
  );
};

export default NotFound;