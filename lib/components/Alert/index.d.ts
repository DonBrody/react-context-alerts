import * as React from 'react';

export interface AlertProps {
  open: boolean,
  onClose: any,
  type: string,
  header: string,
  message: string,
  timeout: number,
  showAdornment: boolean,
  showActionButton: boolean,
  showCloseButton: boolean,
  showProgressBar: boolean,
  enableClickAwayListener: boolean,
  actionText: string,
  actionClickListener: any,
}

declare const Alert: React.ComponentType<AlertProps>;
export default Alert;