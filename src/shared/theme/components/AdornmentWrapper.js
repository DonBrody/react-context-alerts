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

const AdornmentWrapper = ({ child, style }) => (
  <div
    style={{ ...defaultStyle, ...style}}
  >
  {child}
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
