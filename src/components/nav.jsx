import React from 'react'
import styled from 'styled-components';
import { ReactComponent as IconLogo } from './icons/logo.svg';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-top:58px;

  svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 768px) { /* tablet */
    svg {
      width: 273px;
    }
  }

  @media screen and (min-width: 1024px) { /* desktop */
    svg {
      width: 384px;
    }
  }
`

function Nav() {
  return (
    <StyledHeader>
      <IconLogo />
    </StyledHeader>
  )
}

export default Nav