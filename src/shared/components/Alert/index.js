import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import { Slide, Collapse, Paper, IconButton, Typography } from '@material-ui/core';
import IndicatorIcon from './IndicatorIcon';

const styles = {
  componentWrapper: {
    width: '100%',
    marginBottom: 15,
    display: 'block',
  },
  textWrapper: {
    padding: 10,
    marginLeft: 60,
    marginRight: 10,
    wordWrap: 'break-word',
  },
  closeButton: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  closeIcon: {
    width: 15,
    height: 15,
  },
};

class Alert extends Component {
  state = {
    timedOut: false,
    collapse: false,
    timeoutFunction: null,
  };

  componentDidMount() {
    const timeout = this.props.settings.timeout;
    if (timeout) {
      const timeoutFunction = setTimeout(() => {
        this.onClose();
      }, timeout);
      this.setState({ timeoutFunction });
    }
  };

  onClose = () => {
    this.clearCurrentTimeout();
    this.setState({ timedOut: true, timeoutFunction: null });
  };

  clearCurrentTimeout = () => {
    if (this.state.timeoutFunction) {
      clearTimeout(this.state.timeoutFunction);
    }
  };

  onSlideExited = () => {
    this.setState({ collapse: true });
  };

  onCollapsed = () => {
    this.props.onClose();
  };

  wrapperStyles = () => {
    const { palette } = this.props.theme;
    switch(this.props.type) {
      case 'info': return { background: palette.info.background };
      case 'success': return { background: palette.success.background };
      case 'warning': return { background: palette.warning.background };
      case 'error': return { background: palette.error.background };
      default: return { background: palette.info.background };
    }
  };

  textStyles = () => {
    const { palette } = this.props.theme;
    switch(this.props.type) {
      case 'info': return { color: palette.info.color };
      case 'success': return { color: palette.success.color };
      case 'warning': return { color: palette.warning.color };
      case 'error': return { color: palette.error.color };
      default: return { color: palette.info.color };
    }
  };

  headerStyles = () => {
    return this.props.settings.showCloseButton ? { marginRight: 10 } : {};
  };

  render() {
    const { timedOut, collapse } = this.state;
    const { classes, header, message, type, theme, settings } = this.props;
    return (
      <Collapse in={!collapse} onExited={this.onCollapsed} unmountOnExit>
        <Slide direction={'left'} in={!timedOut} onExited={this.onSlideExited}>
          <Paper className={classes.componentWrapper} style={this.wrapperStyles()} elevation={4}>
            <IndicatorIcon type={type} theme={theme} />
            <div className={classes.textWrapper} style={this.textStyles()}>
              {header && header.length > 0 &&
                <Typography
                  style={this.headerStyles()}
                  component="h5"
                  variant="h6"
                  color="inherit"
                >
                  {header}
                </Typography>
              }
              <Typography
                component="p"
                variant="body1"
                color="inherit"
              >
                {message}
              </Typography>
            </div>
            {settings.showCloseButton &&
              <IconButton className={classes.closeButton} onClick={this.onClose}>
                <Close className={classes.closeIcon} />
              </IconButton>
            }
          </Paper>
        </Slide>
      </Collapse>
    );
  }
};

Alert.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func,
  header: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf(['info', 'success', 'warning', 'error']).isRequired,
  theme: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

Alert.defaultProps = {
  onClose: () => {},
  header: null,
  message: '',
  type: 'success',
};

export default withStyles(styles)(Alert);
