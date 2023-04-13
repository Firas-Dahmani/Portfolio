import { css } from 'styled-components';

import MistoNormalTff from '@/assets/fonts/misto.ttf';
import MonteserratNormalTff from '@/assets/fonts/monteserrat.ttf';

const Misto = {
  name: 'Misto',
  fontFile: MistoNormalTff
}

const Monteserrat = {
  name: 'Monteserrat',
  fontFile: MonteserratNormalTff
}

const createFontFaces = (family) => {
  return `
    @font-face {
      font-family: '${family.name}';
      src: url(${family.fontFile}) format('truetype');
      font-weight: normal;
      font-style: normal;
    }
  `
}

const mistoFont = createFontFaces(Misto)
const monteserratFont = createFontFaces(Monteserrat)

const Fonts = css`
  ${mistoFont + monteserratFont}
`;

export default Fonts 