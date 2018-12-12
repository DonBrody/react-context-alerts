import * as React from 'react';

declare interface RcaSettings {
  timeout: number,
  showAdornment: boolean,
  showActionButton: boolean,
  showCloseButton: boolean,
  showProgressBar: boolean,
  enableClickAwayListener: boolean,
  actionText: string,
  actionClickListener: any,
  info: any,
  success: any,
  warning: any,
  error: any,
}

export default RcaSettings;
