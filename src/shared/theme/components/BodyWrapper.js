import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  display: 'flex',
  alignItems: 'center',
  minWidth:  '100%',
  minHeight: '100%',
  wordWrap: 'break-word',
};

const BodyWrapper = ({ child, style }) => (
  <div
    style={{
      ...defaultStyle,
      ...style
    }}
  >
    {child}
  </div>
);

BodyWrapper.propTypes = {
  child: PropTypes.element,
  style: PropTypes.object,
};

BodyWrapper.defaultProps = {
  child: null,
  style: {},
};

export default BodyWrapper;
