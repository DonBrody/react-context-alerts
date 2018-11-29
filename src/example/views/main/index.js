import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { AlertsConsumer } from '../../../shared/context/AlertsProvider';

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

const longText = 'This is a really long message. It\'s super super super long!';

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AlertsConsumer>
        {context => (
          <section className={classes.buttonGroup}>
            <Button
              className={classes.info}
              variant="contained"
              onClick={() => context.info(
                longText, longText, { timeout: null, showCloseButton: true })
              }
            >
              Info
            </Button>
            <Button
              className={classes.success}
              variant="contained"
              onClick={() => context.success('Header', 'message!', { timeout: 1000 })}
            >
              Success
            </Button>
            <Button
              className={classes.warning}
              variant="contained"
              onClick={() => context.warning('', 'message!', { timeout: 10000 })}
            >
              Warning
            </Button>
            <Button
              className={classes.error}
              variant="contained"
              onClick={() => context.error('Header', 'message!')}
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
