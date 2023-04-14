import { css } from 'styled-components';

import MistoNormaWoff from '../fonts/Misto/Misto.woff';
import MonteserratMediam from '../fonts/Montserrat/Montserrat-Medium.woff';

const Misto = {
  name: 'Misto',
  fontFile: MistoNormaWoff
}

const Monteserrat = {
  name: 'Monteserrat',
  fontFile: MonteserratMediam
}

const createFontFaces = (family) => {
  return `
    @font-face {
      font-family: '${family.name}';
      src: url(${family.fontFile}) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  `
}

const mistoFont = createFontFaces(Misto);
const monteserratFont = createFontFaces(Monteserrat);

const Fonts = css`
  ${mistoFont + monteserratFont}
`;

export default Fonts 