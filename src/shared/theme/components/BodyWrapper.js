import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  minWidth:  '100%',
  minHeight: '100%',
  wordWrap: 'break-word',
  background: 'yellow',
};

const wrapperSpacing = {
  paddingTop: 16,
  paddingBottom: 16,
};

const textSpacing = {
  paddingTop: 1,
  paddingBottom: 1,
};

const BodyWrapper = ({ header, message, style }) => (
  <div
    style={{
      ...defaultStyle,
      ...style
    }}
  >
    <div style={wrapperSpacing}>
      {header && <div style={textSpacing}>{header}</div>}
      {message && <div style={textSpacing}>{message}</div>}
    </div>
  </div>
);

BodyWrapper.propTypes = {
  header: PropTypes.element,
  message: PropTypes.element,
  style: PropTypes.object,
};

BodyWrapper.defaultProps = {
  header: null,
  message: null,
  style: {},
};

export default BodyWrapper;
