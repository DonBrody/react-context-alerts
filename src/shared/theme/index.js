import React from 'react';
import { Info, CheckCircle, Warning, Error } from '@material-ui/icons';

export default {
  info: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#1976d2',
      color: 'white',
      icon: <Info />,
    },
  },
  success: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#388e3c',
      color: 'white',
      icon: <CheckCircle />,
    },
  },
  warning: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#f57c00',
      color: 'white',
      icon: <Warning />,
    },
  },
  error: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#d32f2f',
      color: 'white',
      icon: <Error />,
    },
  },
};
