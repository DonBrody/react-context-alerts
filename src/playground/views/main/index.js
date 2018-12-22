import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { Alert, AlertsConsumer } from '../../../shared';
import types from '../../../shared/utils/types';

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

const infoSettings = {
  // info : {
  //   timeout: null,
  //   showCloseButton: true,
  //   showActionButton: true,
  //   showProgressBar: true,
  //   enableClickAwayListener: true,
  //   actionText: 'Click Me!!!',
  //   actionClickListener: () => { console.log('Listener triggered!'); },
  // },
};

// const longText = 'This is a little longer than normal message to the user!';

class Main extends Component {
  state = {
    open: false,
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {/* <Alert
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          type={types.success}
          header={'Header!'}
          message={'message'}
          timeout={null}
          showAdornment={false}
          showActionButton
          showCloseButton
          showProgressBar
          enableClickAwayListener
          actionText={'text'}
          actionClickListener={() => {}}
        /> */}
        <AlertsConsumer>
          {context => {
            return (
              <section className={classes.buttonGroup}>
                <Button
                  className={classes.info}
                  variant="contained"
                  onClick={() =>
                    context.info(
                      'Info Header',
                      'Info message! -- default theme and settings')}
                >
                  Info
                </Button>
                <Button
                  className={classes.success}
                  variant="contained"
                  onClick={() => 
                    context.success(
                    'Yellow Success Header',
                    'White success message! -- no adornment, green body background, 7 second timeout')}
                  // onClick={() => this.setState({ open: true })}
                >
                  Success
                </Button>
                <Button
                  className={classes.warning}
                  variant="contained"
                  onClick={() => 
                    context.warning(
                      null,
                      'White warning message! -- null header, orange body background, click away listener enabled, 10 second timeout')}
                >
                  Warning
                </Button>
                <Button
                  className={classes.error}
                  variant="contained"
                  onClick={() =>
                    context.error(
                      'Error Header',
                      'Error message! -- progress bar enabled, 10 second timeout, close button enabled')}
                >
                  Error
                </Button>
              </section>
          )}}
        </AlertsConsumer>
      </div>
    );
  }
};

export default withStyles(styles)(Main);
