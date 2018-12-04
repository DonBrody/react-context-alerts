import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '80%',
  minHeight: '100%',
  borderTopLeftRadius: 4,
  borderBottomLeftRadius: 4,
};

const AdornmentWrapper = props => (
  <div
    style={{ ...defaultStyle, ...props.style}}
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
