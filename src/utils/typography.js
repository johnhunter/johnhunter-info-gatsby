import Typography from "typography";
import CodePlugin from 'typography-plugin-code';

const themeHue = 200;
const slh = (s, l, h = themeHue) => `hsl(${h},${s}%,${l}%)`;

const theme = {
  baseFontSize: `18px`,
  baseLineHeight: 1.5,
  scaleRatio: 2,
  rhythmUnit: `px`,
  headerFontFamily: [`Aleo`, `sans-serif`],
  bodyFontFamily: [`Aleo`, `sans-serif`],
  headerWeight: `400`,
  headerColor: slh(0, 20),
  bodyColor: slh(0, 30),
};

theme.overrideStyles = ({ adjustFontSizeTo, rhythm }) => {
  const linkColor = slh(50, 80);
  return {
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(1),
      marginBottom: rhythm(0.5),
    },
    'time': {
      ...adjustFontSizeTo(`15px`),
      display: `block`,
      fontWeight: `normal`,
      fontStyle: `italic`,
    },
    a: {
      color: `inherit`,
      textDecoration: `none`,
      transition: `all 100ms cubic-bezier(0.4, 0, 0.2, 1)`,
      borderBottom: `1px solid ${linkColor}`,
      boxShadow: `inset 0 -6px 0px 0px ${linkColor}`,
      fontWeight: `bold`,
    },
    'a:hover,a:active': {
      color: slh(100, 5)
    },
    pre: {
      // avoid hscroll on mobile
      marginLeft: rhythm(-1),
      marginRight: rhythm(-1)
    }
  };
};

theme.plugins = [
  new CodePlugin()
];


const typography = new Typography(theme);
const { rhythm, scale } = typography;
export {
  rhythm,
  scale,
  slh,
  typography as default
};