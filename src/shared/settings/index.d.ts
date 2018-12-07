import * as React from 'react';

declare interface RcaSettings {
  timeout: number,
  showAdornment: boolean,
  showActionButton: boolean,
  showCloseButton: boolean,
  enableClickAwayListener: boolean,
  actionText: string,
  actionClickListener: any,
}

export default RcaSettings;
