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
    backgroundColor: theme.info.main,
    '&:hover': {
      backgroundColor: theme.info.darker,
    },
  },
  success: {
    ...baseButtonStyles,
    backgroundColor: theme.success.main,
    '&:hover': {
      backgroundColor: theme.success.darker,
    },
  },
  warning: {
    ...baseButtonStyles,
    backgroundColor: theme.warning.main,
    '&:hover': {
      backgroundColor: theme.warning.darker,
    },
  },
  error: {
    ...baseButtonStyles,
    backgroundColor: theme.error.main,
    '&:hover': {
      backgroundColor: theme.error.darker,
    },
  },
});

class Main extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AlertsConsumer>
        {context => {
          return (
            <section className={classes.buttonGroup}>
              <Button
                className={classes.info}
                variant="contained"
                onClick={() => context.info('Header', 'message!')}
              >
                Info
              </Button>
              <Button
                className={classes.success}
                variant="contained"
                onClick={() => context.success('Header', 'message!')}
              >
                Success
              </Button>
              <Button
                className={classes.warning}
                variant="contained"
                onClick={() => context.warning(null, 'message!')}
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
        )}}
      </AlertsConsumer>
    );
  }
};

export default withStyles(styles)(Main);
