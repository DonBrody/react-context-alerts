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

export default {
  info: {
    body: {
      background: 'white',
      color: '#51525d',
      ...baseElements.body,
    },
    adornment: {
      background: '#1976d2',
      color: 'white',
      icon: <Info />,
      ...baseElements.adornment,
    },
    action: {
      ...baseElements.action,
    },
  },
  success: {
    body: {
      background: 'white',
      color: '#51525d',
      ...baseElements.body,
    },
    adornment: {
      background: '#388e3c',
      color: 'white',
      icon: <CheckCircle />,
      ...baseElements.adornment,
    },
    action: {
      ...baseElements.action,
    },
  },
  warning: {
    body: {
      background: 'white',
      color: '#51525d',
      ...baseElements.body,
    },
    adornment: {
      background: '#f57c00',
      color: 'white',
      icon: <Warning />,
      ...baseElements.adornment,
    },
    action: {
      ...baseElements.action,
    },
  },
  error: {
    body: {
      background: 'white',
      color: '#51525d',
      ...baseElements.body,
    },
    adornment: {
      background: '#d32f2f',
      color: 'white',
      icon: <Error />,
      ...baseElements.adornment,
    },
    action: {
      ...baseElements.action,
    },
  },
};
