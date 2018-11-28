import deepmerge from 'deepmerge';
import defaultSettings from '../theme';

export default customSettings => {
  return customSettings ? deepmerge(defaultSettings, customSettings) : defaultSettings;
};
