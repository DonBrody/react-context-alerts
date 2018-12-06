import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyItem: 'center',
  minWidth:  '100%',
  minHeight: '100%',
};

const ButtonWrapper = ({ child, style }) => (
  <div
    style={{ ...defaultStyle, ...style }}
  >
    {child}
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
