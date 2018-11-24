import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Slide, Collapse, Paper, Typography } from '@material-ui/core';
import IndicatorIcon from './IndicatorIcon';

const styles = {
  componentWrapper: {
    width: '100%',
    marginBottom: 15,
    display: 'block',
  },
  textWrapper: {
    padding: 5,
    marginLeft: 60,
    wordWrap: 'break-word',
  },
};

class Notification extends Component {
  state = {
    timedOut: false,
    slideOutComplete: false,
    timeoutFunction: null,
  };

  componentDidMount() {
    const timeoutFunction = setTimeout(() => {
      this.onClose();
    }, this.props.timeout);
    this.setState({ timeoutFunction });
  };

  onClose = () => {
    this.clearCurrentTimeout();
    this.setState({ timedOut: true, timeoutFunction: null }, () => {
      setTimeout(() => {
        this.setState({ slideOutComplete: true }, () => {
          setTimeout(() => {
            this.props.onClose();
          }, 250);
        });
      }, 150);
    });
  };

  clearCurrentTimeout = () => {
    if (this.state.timeoutFunction) {
      clearTimeout(this.state.timeoutFunction);
    }
  };

  render() {
    const { timedOut, slideOutComplete } = this.state;
    const { classes, header, message, status } = this.props;
    return (
      <Collapse in={!slideOutComplete} unmountOnExit>
        <Slide direction={'left'} in={!timedOut}>
          <Paper className={classes.componentWrapper} elevation={10}>
            <IndicatorIcon status={status}/>
            <div className={classes.textWrapper}>
              {header && <Typography component="h5" variant="h6">{header}</Typography>}
              <Typography component="p" variant="body1">{message}</Typography>
            </div>
          </Paper>
        </Slide>
      </Collapse>
    );
  }
};

Notification.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func,
  header: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  timeout: PropTypes.number,
};

Notification.defaultProps = {
  onClose: () => {},
  header: null,
  message: '',
  status: 'success',
  timeout: 3000,
};

export default withStyles(styles)(Notification);
