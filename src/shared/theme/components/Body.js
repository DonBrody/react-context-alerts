import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  paddingTop: 16,
  paddingBottom: 16,
};

const textSpacing = {
  paddingTop: 1,
  paddingBottom: 1,
};

const Body = ({ header, message, style }) => (
  <div
    style={{
      ...defaultStyle,
      ...style
    }}
  >
    {header && <div style={textSpacing}>{header}</div>}
    {message && <div style={textSpacing}>{message}</div>}
  </div>
);

Body.propTypes = {
  header: PropTypes.element,
  message: PropTypes.element,
  style: PropTypes.object,
};

Body.defaultProps = {
  header: null,
  message: null,
  style: {},
};

export default Body;