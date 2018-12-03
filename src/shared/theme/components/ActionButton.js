import React from 'react';
import { PropTypes } from 'prop-types';
import { Button } from '@material-ui/core';

const ActionButton = props => (
  <Button
    styles={props.styles}
    color="inherit"
    onClick={props.onClick}
  >
  {props.text}
  </Button>
);

ActionButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object,
};

ActionButton.defaultProps = {
  text: '',
  onClick: () => {},
  style: {},
};

export default ActionButton;
