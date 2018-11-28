import deepmerge from 'deepmerge';
import rcaDefaults from './index';

export default (customSettings, defaultSettings = rcaDefaults) => {
  return customSettings ? deepmerge(defaultSettings, customSettings) : defaultSettings;
};
