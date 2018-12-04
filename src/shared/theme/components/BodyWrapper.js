import React from 'react';
import { PropTypes } from 'prop-types';

const defaultStyle = {
  display: 'block',
  maxWidth:  '100%',
  maxHeight: '100%',
  paddingTop: 10,
  paddingBottom: 10,
  wordWrap: 'break-word',
};

const BodyWrapper = props => (
  <div
    style={{
      ...defaultStyle,
      ...props.style
    }}
  >
    {props.header}
    {props.message}
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
