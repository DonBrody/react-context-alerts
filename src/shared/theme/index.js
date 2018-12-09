import React from 'react';
import { Info, CheckCircle, Warning, Error, Close } from '@material-ui/icons';
import Header from './components/Header';
import Message from './components/Message';
import Body from './components/Body';
import BodyWrapper from './components/BodyWrapper';
import AdornmentWrapper from './components/AdornmentWrapper';
import ActionWrapper from './components/ActionWrapper';
import ActionButton from './components/ActionButton';
import CloseWrapper from './components/CloseWrapper';
import CloseButton from './components/CloseButton';
import ProgressWrapper from './components/ProgressWrapper';

const createHeader = (text, style = {}) => (
  <Header text={text} style={style} />
);

const createMessage = (text, style = {}) => (
  <Message text={text} style={style} />
);

const createBodyContent = (header, message, style = {}) => (
  <Body header={header} message={message} style={style} />
);

const createBodyWrapper = (child, style = {}) => (
  <BodyWrapper child={child} style={style} />
);

const createAdornmentWrapper = (child, style = {}) => (
  <AdornmentWrapper child={child} style={style} />
);

const createActionWrapper = (child, style = {}) => (
  <ActionWrapper child={child} style={style} />
);

const createActionButton = (text, onClick, style = {}) => (
  <ActionButton text={text} onClick={onClick} style={style} />
);

const createCloseWrapper = (child, style = {}) => (
  <CloseWrapper child={child} style={style} />
);

const createCloseButton = (icon, onClick, style = {}) => (
  <CloseButton icon={icon} onClick={onClick} style={style} />
);

const createProgressWrapper = (barColor, progressColor, timeout, style = {}) => (
  <ProgressWrapper
    barColor={barColor}
    progressColor={progressColor}
    timeout={timeout}
    style={style}
  />
);

const bodyColor = '#51525D';
const bodyBackground = '#FFF';
const adornmentColor = '#FFF';
const info = '#1976D2';
const success = '#388E3C';
const warning = '#F57C00';
const error = '#D32F2F';

const baseElements = {
  body: {
    wrapper: createBodyWrapper,
    content: createBodyContent,
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
  close: {
    wrapper: createCloseWrapper,
    button: createCloseButton,
    icon: <Close style={{ width: 15, height: 15 }} />,
  },
  progress: {
    wrapper: createProgressWrapper,
  },
};

const closePalette = {
  background: bodyBackground,
  color: bodyColor,
};

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
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      barColor: '#90CAF9',
      progressColor: info,
      ...baseElements.progress,
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
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      barColor: '#A5D6A7',
      progressColor: success,
      ...baseElements.progress,
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
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      barColor: '#FFCC80',
      progressColor: warning,
      ...baseElements.progress,
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
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      barColor: '#EF9A9A',
      progressColor: error,
      ...baseElements.progress,
    },
  },
};
