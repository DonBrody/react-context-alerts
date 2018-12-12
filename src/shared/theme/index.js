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
import ProgressBar from './components/ProgressBar';
import ProgressWrapper from './components/ProgressWrapper';
import colors from '../utils/colors';

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

const createProgressBar = (progressColor, timeout, style = {}) => (
  <ProgressBar progressColor={progressColor} timeout={timeout} style={style} />
);

const createProgressWrapper = (containerColor, child, style = {}) => (
  <ProgressWrapper containerColor={containerColor} child={child} style={style} />
);

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
    bar: createProgressBar,
  },
};

const closePalette = {
  background: colors.body.background,
  color: colors.body.color,
};

export default {
  info: {
    body: {
      background: colors.body.background,
      color: colors.body.color,
      headerColor: colors.body.color,
      messageColor: colors.body.color,
      ...baseElements.body,
    },
    adornment: {
      background: colors.info.primary,
      color: colors.adornment.color,
      icon: <Info />,
      ...baseElements.adornment,
    },
    action: {
      background: colors.body.background,
      color: colors.info.primary,
      ...baseElements.action,
    },
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      containerColor: colors.info.light,
      barColor: colors.info.primary,
      ...baseElements.progress,
    },
  },
  success: {
    body: {
      background: colors.body.background,
      color: colors.body.color,
      headerColor: colors.body.color,
      messageColor: colors.body.color,
      ...baseElements.body,
    },
    adornment: {
      background: colors.success.primary,
      color: colors.adornment.color,
      icon: <CheckCircle />,
      ...baseElements.adornment,
    },
    action: {
      background: colors.body.background,
      color: colors.success.primary,
      ...baseElements.action,
    },
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      containerColor: colors.success.light,
      barColor: colors.success.primary,
      ...baseElements.progress,
    },
  },
  warning: {
    body: {
      background: colors.body.background,
      color: colors.body.color,
      headerColor: colors.body.color,
      messageColor: colors.body.color,
      ...baseElements.body,
    },
    adornment: {
      background: colors.warning.primary,
      color: colors.adornment.color,
      icon: <Warning />,
      ...baseElements.adornment,
    },
    action: {
      background: colors.body.background,
      color: colors.warning.primary,
      ...baseElements.action,
    },
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      containerColor: colors.warning.light,
      barColor: colors.warning.primary,
      ...baseElements.progress,
    },
  },
  error: {
    body: {
      background: colors.body.background,
      color: colors.body.color,
      headerColor: colors.body.color,
      messageColor: colors.body.color,
      ...baseElements.body,
    },
    adornment: {
      background: colors.error.primary,
      color: colors.adornment.color,
      icon: <Error />,
      ...baseElements.adornment,
    },
    action: {
      background: colors.body.background,
      color: colors.error.primary,
      fontWeight: 'bold',
      ...baseElements.action,
    },
    close: {
      ...closePalette,
      ...baseElements.close,
    },
    progress: {
      containerColor: colors.error.light,
      barColor: colors.error.primary,
      ...baseElements.progress,
    },
  },
};
