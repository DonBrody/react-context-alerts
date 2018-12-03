import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import { Slide, Collapse, Paper, IconButton, Typography, ClickAwayListener } from '@material-ui/core';
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
    top: 2,
    right: 2,
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
    const { theme } = this.props;
    switch(this.props.type) {
      case 'info': return { background: theme.info.background };
      case 'success': return { background: theme.success.background };
      case 'warning': return { background: theme.warning.background };
      case 'error': return { background: theme.error.background };
      default: return { background: theme.info.background };
    }
  };

  textStyles = () => {
    const { theme } = this.props;
    switch(this.props.type) {
      case 'info': return { color: theme.info.color };
      case 'success': return { color: theme.success.color };
      case 'warning': return { color: theme.warning.color };
      case 'error': return { color: theme.error.color };
      default: return { color: theme.info.color };
    }
  };

  buttonWrapper = (text, onClick) => {
    const { theme } = this.props;
  
    let wrapper;
    switch(this.props.type) {
      case 'info':
      wrapper = theme.info.buttonWrapper
      if (wrapper && typeof wrapper === 'function') {
        return theme.info.buttonWrapper(
          theme.info.button(text, onClick), this.textStyles());
      } break;
      case 'success':
        wrapper = theme.success.buttonWrapper
        if (wrapper && typeof wrapper === 'function') {
          return theme.success.buttonWrapper(
            theme.success.button(text, onClick), this.textStyles());
        } break;
      case 'warning':
        wrapper = theme.warning.buttonWrapper
        if (wrapper && typeof wrapper === 'function') {
          return theme.warning.buttonWrapper(
            theme.warning.button(text, onClick), this.textStyles());
        } break;
      case 'error':
        wrapper = theme.error.buttonWrapper
        if (wrapper && typeof wrapper === 'function') {
          return theme.error.buttonWrapper(
            theme.error.button(text, onClick), this.textStyles());
        } break;
      default:
        wrapper = theme.info.buttonWrapper
        if (wrapper && typeof wrapper === 'function') {
          return theme.succeinfoss.buttonWrapper(
            theme.info.button(text, onClick), this.textStyles());
        } break;
    }
    return null;
  };

  headerStyles = () => {
    return this.props.settings.showCloseButton ? { marginRight: 10 } : {};
  };

  mouseEventType = (settings) => {
    return settings.enableClickAwayListener ? 'onMouseUp' : false;
  };

  touchEventType = (settings) => {
    return settings.enableClickAwayListener ? 'onTouchEnd' : false;
  };

  onClickAway = () => {
    this.onClose();
  };

  render() {
    const { timedOut, collapse } = this.state;
    const { classes, header, message, type, theme, settings } = this.props;
    const { actionText, actionClickListener } = settings;
    return (
      <ClickAwayListener
        mouseEvent={this.mouseEventType(settings)}
        touchEvent={this.touchEventType(settings)}
        onClickAway={this.onClickAway}
      >
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
                <IconButton
                  className={classes.closeButton}
                  style={this.textStyles()}
                  onClick={this.onClose}
                >
                  <Close className={classes.closeIcon} color="inherit" />
                </IconButton>
              }
              {settings.showActionButton && actionText && actionClickListener &&
                this.buttonWrapper(actionText, actionClickListener)
              }
            </Paper>
          </Slide>
        </Collapse>
      </ClickAwayListener>
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
