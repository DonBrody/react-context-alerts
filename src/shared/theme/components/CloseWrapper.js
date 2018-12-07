import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  position: 'relative',
  display: 'flex',
  minWidth:  '100%',
  minHeight: '100%',
};

const CloseWrapper = ({ child, style }) => (
  <div
    style={{ ...defaultStyle, ...style }}
  >
    {child}
  </div>
);

CloseWrapper.propTypes = {
  child: PropTypes.element,
  style: PropTypes.object,
};

CloseWrapper.defaultProps = {
  child: null,
  style: {},
};

export default CloseWrapper;
