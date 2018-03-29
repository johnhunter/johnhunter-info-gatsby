import Typography from "typography";
import CodePlugin from 'typography-plugin-code';
import theme from "typography-theme-lincoln";


theme.plugins = [
  new CodePlugin(),
];

theme.overrideThemeStyles = () => ({
  'a': {
    textShadow: 'none'
  }
});


const typography = new Typography(theme);
export default typography;
