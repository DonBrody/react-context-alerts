import React from 'react';
import { Info, CheckCircle, Warning, Error } from '@material-ui/icons';
import ButtonWrapper from './components/ButtonWrapper';
import ActionButton from './components/ActionButton';

const createButtonWrapper = (child, style) => (
  <ButtonWrapper child={child} style={style} />
);

const createActionButton = (text, onClick, style) => (
  <ActionButton text={text} onClick={onClick} style={style} />
);

export default {
  info: {
    background: 'white',
    color: '#51525d',
    button: createActionButton,
    buttonWrapper: createButtonWrapper,
    adornment: {
      background: '#1976d2',
      color: 'white',
      icon: <Info />,
    },
  },
  success: {
    background: 'white',
    color: '#51525d',
    button: createActionButton,
    buttonWrapper: createButtonWrapper,
    adornment: {
      background: '#388e3c',
      color: 'white',
      icon: <CheckCircle />,
    },
  },
  warning: {
    background: 'white',
    color: '#51525d',
    button: createActionButton,
    buttonWrapper: createButtonWrapper,
    adornment: {
      background: '#f57c00',
      color: 'white',
      icon: <Warning />,
    },
  },
  error: {
    background: 'white',
    color: '#51525d',
    button: createActionButton,
    buttonWrapper: createButtonWrapper,
    adornment: {
      background: '#d32f2f',
      color: 'white',
      icon: <Error />,
    },
  },
};
