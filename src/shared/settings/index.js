const defaultSettings = {
  timeout: 5000,
  showAdornment: true,
  showActionButton: false,
  showCloseButton: false,
  showProgressBar: false,
  enableClickAwayListener: false,
  actionText: null,
  actionClickListener: null,
  info:    {/* Info alert overrides */},
  success: {/* Success alert overrides */},
  warning: {/* Warning alert overrides */},
  error:   {/* Error alert overrides */},
};

const keysObj = {};
Object.keys(defaultSettings).forEach(key => {
  keysObj[key] = key;
});

export const keys = Object.freeze(keysObj);
export default defaultSettings;
