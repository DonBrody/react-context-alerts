import React from 'react';
import { PropTypes } from 'prop-types';
import utils from '../utils';

const defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth:  '100%',
  minHeight: '100%',
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
  background: '#6CC',
};

const position = {
  width: `${utils.adornmentWidth}%`,
};

const AdornmentWrapper = props => (
  <div
    style={{ ...defaultStyle, ...position, ...props.style}}
    onClick={props.onClick}
  >
  {props.child}
  </div>
);

AdornmentWrapper.propTypes = {
  child: PropTypes.element,
  style: PropTypes.object,
};

AdornmentWrapper.defaultProps = {
  child: null,
  style: {},
};

export default AdornmentWrapper;
