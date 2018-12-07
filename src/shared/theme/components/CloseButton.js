import React from 'react';
import { PropTypes } from 'prop-types';
import { IconButton } from '@material-ui/core';

const defaultStyle = {
  position: 'absolute',
  top: 1,
  right: 1,
};

const CloseButton = ({ icon, onClick, style, classes }) => (
  <IconButton
    style={{ ...defaultStyle, ...style }}
    onClick={onClick}
    color="inherit"
  >
    {icon}
  </IconButton>
);

CloseButton.propTypes = {
  icon: PropTypes.element,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

CloseButton.defaultProps = {
  icon: null,
  onClick: () => {},
  style: {},
};

export default CloseButton;
