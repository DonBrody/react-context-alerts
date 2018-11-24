import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { AlertsConsumer } from '../../context/AlertsProvider';

const baseButtonStyles = {
  display: 'block',
  width: 200,
  margin: '25px auto 25px 10%',
  color: 'white',
  fontWeight: 'bold',
};

const styles = theme => ({
  buttonGroup: {
    width: '50%',
  },
  info: {
    ...baseButtonStyles,
    backgroundColor: theme.palette.info.main,
    '&:hover': {
      backgroundColor: theme.palette.info.darker,
    },
  },
  success: {
    ...baseButtonStyles,
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.darker,
    },
  },
  warning: {
    ...baseButtonStyles,
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.darker,
    },
  },
  error: {
    ...baseButtonStyles,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.darker,
    },
  },
});

class Main extends Component {
  onInfo = (context, header, message) => {
    context.info(header, message);
  };

  onSuccess = (context, header, message) => {
    context.success(header, message);
  };

  onWarning = (context, header, message) => {
    context.warning(header, message);
  };

  onError = (context, header, message) => {
    context.error(header, message);
  };

  render() {
    const { classes } = this.props;

    return (
      <AlertsConsumer>
        {context => (
          <section className={classes.buttonGroup}>
            <Button
              className={classes.info}
              variant="contained"
              onClick={() => this.onInfo(context, 'Header', '')}
            >
              Info
            </Button>
            <Button
              className={classes.success}
              variant="contained"
              onClick={() => this.onSuccess(context, 'Header', 'message!')}
            >
              Success
            </Button>
            <Button
              className={classes.warning}
              variant="contained"
              onClick={() => this.onWarning(context, '', 'message!')}
            >
              Warning
            </Button>
            <Button
              className={classes.error}
              variant="contained"
              onClick={() => this.onError(context, 'Header', 'message!')}
            >
              Error
            </Button>
          </section>
        )}
      </AlertsConsumer>
    );
  }
};

export default withStyles(styles)(Main);
