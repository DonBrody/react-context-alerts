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
    color: 'white',
  },
};

const IndicatorIcon = props => {
  let background;
  let icon;
  switch(props.status) {
    case 'info':
      background = '#1976d2';
      icon = <Info className={props.classes.icon} />;
    break;
    case 'success':
      background = '#388e3c';
      icon = <CheckCircle className={props.classes.icon} />;
    break;
    case 'warning':
      background = '#f57c00';
      icon = <Warning className={props.classes.icon} />;
    break;
    case 'error':
      background = '#d32f2f';
      icon = <Error className={props.classes.icon} />;
    break;
    default:
      background = 'white';
      icon = null;
  }

  return (
    <div style={{ background }} className={props.classes.wrapper}>
      {icon}
    </div>
  );
};

IndicatorIcon.propTypes = {
  status: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,  
};

export default withStyles(styles)(IndicatorIcon);
