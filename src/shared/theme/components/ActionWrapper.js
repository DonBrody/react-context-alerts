import React from 'react';
import { PropTypes } from 'prop-types';
import utils from '../utils';

const defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyItem: 'center',
  minWidth:  '100%',
  minHeight: '100%',
  background: 'purple',
};

const position = {
  width: `${utils.actionButtonWidth}%`,
  marginRight: `${utils.closeButtonWidth}%`,
};

const ButtonWrapper = props => (
  <div
    style={{ ...defaultStyle, ...position, ...props.style }}
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
