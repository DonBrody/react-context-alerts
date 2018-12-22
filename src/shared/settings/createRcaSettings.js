import deepmerge from 'deepmerge';
import rcaDefaults from './index';

export default (customSettings, defaultSettings = rcaDefaults) => {
  const settings = customSettings ? deepmerge(defaultSettings, customSettings) : defaultSettings;
  return settings;
};
