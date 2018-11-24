import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Info, CheckCircle, Warning, Error } from '@material-ui/icons';

const styles = {
  wrapper: {
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    width: 50,
    textAlign: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
};

const IndicatorIcon = props => {
  const { palette } = props.theme;
  const info = palette.info.adornment;
  const success = palette.success.adornment;
  const warning = palette.warning.adornment;
  const error = palette.error.adornment;

  let icon;
  let styles;
  switch(props.type) {
    case 'info':
      styles= { background: info.background, color: info.color };
      icon = <Info className={props.classes.icon} />;
    break;
    case 'success':
    styles= { background: success.background, color: success.color };
      icon = <CheckCircle className={props.classes.icon} />;
    break;
    case 'warning':
      styles= { background: warning.background, color: warning.color };
      icon = <Warning className={props.classes.icon} />;
    break;
    case 'error':
      styles= { background: error.background, color: error.color };
      icon = <Error className={props.classes.icon} />;
    break;
    default:
      styles= { background: info.background, color: info.color };
      icon = null;
  }

  return (
    <div style={styles} className={props.classes.wrapper}>
      {icon}
    </div>
  );
};

IndicatorIcon.propTypes = {
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(IndicatorIcon);
