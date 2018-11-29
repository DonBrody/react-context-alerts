import deepmerge from 'deepmerge';
import rcaDefaults from './index';

export default (customTheme, defaultTheme = rcaDefaults) => {
  return customTheme ? deepmerge(defaultTheme, customTheme) : defaultTheme;
};
