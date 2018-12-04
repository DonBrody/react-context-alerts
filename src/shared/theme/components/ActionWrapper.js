import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyItem: 'center',
  minWidth:  '100%',
  minHeight: '100%',
};

const ButtonWrapper = props => (
  <div
    style={{ ...defaultStyle, ...props.style }}
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
