import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

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
      backgroundColor: theme.palette.info.light,
    },
  },
  success: {
    ...baseButtonStyles,
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.success.light,
    },
  },
  warning: {
    ...baseButtonStyles,
    backgroundColor: theme.palette.warning.main,
    '&:hover': {
      backgroundColor: theme.palette.warning.light,
    },
  },
  error: {
    ...baseButtonStyles,
    backgroundColor: theme.palette.error.main,
    '&:hover': {
      backgroundColor: theme.palette.error.light,
    },
  },
});

class Main extends Component {
  state = {};

  render() {
    const { classes } = this.props;

    return (
      <section className={classes.buttonGroup}>
        <Button className={classes.info} variant="contained">Info</Button>
        <Button className={classes.success} variant="contained">Success</Button>
        <Button className={classes.warning} variant="contained">Warning</Button>
        <Button className={classes.error} variant="contained">Error</Button>
      </section>
    );
  }
};

export default withStyles(styles)(Main);
