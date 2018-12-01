import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  icon: {
    width: 30,
    height: 30,
  },
};

const IndicatorIcon = props => {
  const { theme } = props;
  const info = theme.info.adornment;
  const success = theme.success.adornment;
  const warning = theme.warning.adornment;
  const error = theme.error.adornment;

  let icon;
  let styles;
  switch(props.type) {
    case 'info':
      styles= { background: info.background, color: info.color };
      icon = info.icon;
    break;
    case 'success':
    styles= { background: success.background, color: success.color };
      icon = success.icon;
    break;
    case 'warning':
      styles= { background: warning.background, color: warning.color };
      icon = warning.icon;
    break;
    case 'error':
      styles= { background: error.background, color: error.color };
      icon = error.icon;
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
