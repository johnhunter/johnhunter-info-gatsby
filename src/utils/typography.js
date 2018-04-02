import Typography from "typography";
import CodePlugin from 'typography-plugin-code';

const themeHue = 200;
const slh = (s, l, h = themeHue) => `hsl(${h},${s}%,${l}%)`;

const theme = {
  scaleRatio: 2.5,
  rhythmUnit: `px`,
  googleFonts: [{
    name: `Varela Round`,
    styles: [`400`],
  }],
  headerFontFamily: [`Varela Round`, `sans-serif`],
  bodyFontFamily: [`sans-serif`],
  headerWeight: `400`,
  headerColor: slh(60, 30),
  bodyColor: slh(0, 20),
};

theme.overrideStyles = ({ rhythm }) => {
  const linkColor = slh(100, 30);
  return {
    'h1,h2,h3,h4,h5,h6': {
      marginTop: rhythm(1),
      marginBottom: rhythm(0.5),
    },
    a: {
      color: linkColor,
      textDecoration: 'none',
      backgroundImage: `linear-gradient(
        to top,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 1px,
        ${linkColor} 1px,
        ${linkColor} 2px,
        rgba(0, 0, 0, 0) 2px)`,
    },
    'a:hover,a:active': {
      backgroundImage: 'none'
    }
  };
};

theme.plugins = [
  new CodePlugin()
];

const typography = new Typography(theme);
typography.slh = slh;

export default typography;
