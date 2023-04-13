import React from 'react'
import styled from 'styled-components';
import { Nav } from '@/components';
import { GlobalStyle } from '@/assets/styles';


const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  margin: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Layout({children}) {
  return (
    <StyledLayout>
      <GlobalStyle />
      <Nav />
      <MainContent>{children}</MainContent>
    </StyledLayout>
  )
}

export default Layout