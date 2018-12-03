import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  display: 'flex',
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 30,
  alignItems: 'center',
  justifyItem: 'center',
};

const ButtonWrapper = props => (
  <div
    style={{ ...defaultStyle, ...props.style}}
    onClick={props.onClick}
  >
  {props.child}
  </div>
);

ButtonWrapper.propTypes = {
  child: PropTypes.element,
  style: PropTypes.object,
};

ButtonWrapper.defaultProps = {
  child: null,
  style: {},
};

export default ButtonWrapper;
