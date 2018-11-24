import deepmerge from 'deepmerge';
import defaultTheme from '../theme';

export default customTheme => {
  return customTheme ? deepmerge(defaultTheme, customTheme) : defaultTheme;
};
