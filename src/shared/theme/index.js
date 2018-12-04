import React from 'react';
import { Info, CheckCircle, Warning, Error } from '@material-ui/icons';
import Header from './components/Header';
import Message from './components/Message';
import BodyWrapper from './components/BodyWrapper';
import AdornmentWrapper from './components/AdornmentWrapper';
import ActionWrapper from './components/ActionWrapper';
import ActionButton from './components/ActionButton';

const createHeader = (text, style) => (
  <Header text={text} style={style} />
);

const createMessage = (text, style) => (
  <Message text={text} style={style} />
);

const createBodyWrapper = (header, message, style) => (
  <BodyWrapper header={header} message={message} style={style} />
);

const createAdornmentWrapper = (child, style) => (
  <AdornmentWrapper child={child} style={style} />
);

const createActionWrapper = (child, style) => (
  <ActionWrapper child={child} style={style} />
);

const createActionButton = (text, onClick, style) => (
  <ActionButton text={text} onClick={onClick} style={style} />
);

const baseElements = {
  body: {
    wrapper: createBodyWrapper,
    header: createHeader,
    message: createMessage,
  },
  adornment: {
    wrapper: createAdornmentWrapper,
  },
  action: {
    wrapper: createActionWrapper,
    button: createActionButton,
  },
};

const bodyColor = '#51525D';
const bodyBackground = '#FFF';
const adornmentColor = '#FFF';
const info = '#1976D2';
const success = '#388E3C';
const warning = '#F57C00';
const error = '#D32F2F';

export default {
  info: {
    body: {
      background: bodyBackground,
      color: bodyColor,
      ...baseElements.body,
    },
    adornment: {
      background: info,
      color: adornmentColor,
      icon: <Info />,
      ...baseElements.adornment,
    },
    action: {
      background: bodyBackground,
      color: info,
      ...baseElements.action,
    },
  },
  success: {
    body: {
      background: bodyBackground,
      color: bodyColor,
      ...baseElements.body,
    },
    adornment: {
      background: success,
      color: adornmentColor,
      icon: <CheckCircle />,
      ...baseElements.adornment,
    },
    action: {
      background: bodyBackground,
      color: success,
      ...baseElements.action,
    },
  },
  warning: {
    body: {
      background: bodyBackground,
      color: bodyColor,
      ...baseElements.body,
    },
    adornment: {
      background: warning,
      color: adornmentColor,
      icon: <Warning />,
      ...baseElements.adornment,
    },
    action: {
      background: bodyBackground,
      color: warning,
      ...baseElements.action,
    },
  },
  error: {
    body: {
      background: bodyBackground,
      color: bodyColor,
      ...baseElements.body,
    },
    adornment: {
      background: error,
      color: adornmentColor,
      icon: <Error />,
      ...baseElements.adornment,
    },
    action: {
      background: bodyBackground,
      color: error,
      fontWeight: 'bold',
      ...baseElements.action,
    },
  },
};
