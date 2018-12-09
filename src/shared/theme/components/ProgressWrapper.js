import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  barContainer: {
    position: 'absolute',
    top: 0, right: 0, bottom: 0, left: 0,
  },
};

const defaultStyle = {
  position: 'relative',
  width: '100%',
  height: 4,
};

const ProgressWrapper = ({ containerColor, child, style, classes }) => (
  <div
    style={{ ...defaultStyle, ...style}}
  >
    <div
      className={classes.barContainer}
      style={{ background: containerColor }}
    />
    {child}
  </div>
);

ProgressWrapper.propTypes = {
  containerColor: PropTypes.string,
  child: PropTypes.element,
  style: PropTypes.object,
};

ProgressWrapper.defaultProps = {
  containerColor: '#1976D2',
  child: null,
  style: {},
};

export default withStyles(styles)(ProgressWrapper);
