import React from 'react';
import { PropTypes } from 'prop-types';
import { AlertsConsumer } from '../../context/AlertsProvider';
import utils from '../utils';

const defaultStyle = {
  display: 'block',
  maxWidth:  '100%',
  maxHeight: '100%',
  padding: 10,
  wordWrap: 'break-word',
  background: 'cyan',
};

const position = settings => ({
  width: `${utils.bodyWidth + settings.showActionButton ? utils.actionButtonWidth : 0}%`,
  marginLeft: `${settings.showAdornment ? utils.adornmentWidth : 0}%`,
});

const BodyWrapper = props => (
  <AlertsConsumer>
    {alerts => (
      <div
        style={{
            ...defaultStyle,
            // ...position(alerts.state.settings),
            ...props.style
        }}
      >
      {props.header}
      {props.message}
      </div>
    )}
  </AlertsConsumer>
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
