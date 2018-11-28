import deepmerge from 'deepmerge';
import defaultTheme from './index';

export default customTheme => {
  return customTheme ? deepmerge(defaultTheme, customTheme) : defaultTheme;
};
