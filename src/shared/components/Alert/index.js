import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import { Slide, Collapse, Paper, Grid, IconButton, Typography, ClickAwayListener } from '@material-ui/core';
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
    marginRight: 150,
    wordWrap: 'break-word',
  },
  closeButton: {
    position: 'absolute',
    top: 1,
    right: 1,
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
    return {
      background: theme[this.props.type].body.background,
    };
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

  bodyStyles = () => {
    const { theme } = this.props;
    return {
      color: theme[this.props.type].body.color,
      background: theme[this.props.type].body.background,
    };
  };

  bodyWrapper = (header, message) => {
    const { theme, settings } = this.props;
  
    let wrapper;
    switch(this.props.type) {
      case 'info':
      wrapper = theme.info.body.wrapper;
      if (wrapper && typeof wrapper === 'function') {
        return wrapper(
          theme.info.body.header(header), theme.info.body.message(message), this.bodyStyles(), settings);
      } break;
      case 'success':
        wrapper = theme.success.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.success.body.header(header), theme.success.body.message(message), this.bodyStyles());
        } break;
      case 'warning':
        wrapper = theme.warning.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.warning.body.header(header), theme.warning.body.message(message), this.bodyStyles());
        } break;
      case 'error':
        wrapper = theme.error.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.error.body.header(header), theme.error.body.message(message), this.bodyStyles());
        } break;
      default:
        wrapper = theme.info.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.info.body.header(header), theme.info.body.message(message), this.bodyStyles());
        } break;
    }
    return null;
  };

  adornmentStyles = () => {
    const { theme } = this.props;
    return {
      color: theme[this.props.type].adornment.color,
      background: theme[this.props.type].adornment.background,
    };
  };

  adornmentWrapper = () => {
    const { theme } = this.props;
  
    let wrapper;
    switch(this.props.type) {
      case 'info':
      wrapper = theme.info.adornment.wrapper;
      if (wrapper && typeof wrapper === 'function') {
        return wrapper(
          theme.info.adornment.icon, this.adornmentStyles());
      } break;
      case 'success':
        wrapper = theme.success.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.success.adornment.icon, this.adornmentStyles());
        } break;
      case 'warning':
        wrapper = theme.warning.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.warning.adornment.icon, this.adornmentStyles());
        } break;
      case 'error':
        wrapper = theme.error.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.error.adornment.icon, this.adornmentStyles());
        } break;
      default:
        wrapper = theme.info.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.info.adornment.icon, this.adornmentStyles());
        } break;
    }
    return null;
  };
  
  actionStyles = () => {
    const { theme } = this.props;
    return {
      color: theme[this.props.type].action.color,
      background: theme[this.props.type].action.background,
    };
  };

  actionWrapper = (text, onClick) => {
    const { theme } = this.props;
  
    let wrapper;
    switch(this.props.type) {
      case 'info':
      wrapper = theme.info.action.wrapper;
      if (wrapper && typeof wrapper === 'function') {
        return wrapper(
          theme.info.action.button(text, onClick), this.actionStyles());
      } break;
      case 'success':
        wrapper = theme.success.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.success.action.button(text, onClick), this.actionStyles());
        } break;
      case 'warning':
        wrapper = theme.warning.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.warning.action.button(text, onClick), this.actionStyles());
        } break;
      case 'error':
        wrapper = theme.error.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.error.action.button(text, onClick), this.actionStyles());
        } break;
      default:
        wrapper = theme.info.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.info.action.button(text, onClick), this.actionStyles());
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

  bodyColumns = (settings) => {
    let bodyCols = 6;
    if (!this.adornmentColumns(settings)) {
      bodyCols += 2;
    }
    if (!this.actionButtonColumns(settings)) {
      bodyCols += 3;
    }
    if (!this.closeButtonColumns(settings)) {
      bodyCols += 1;
    }
    return bodyCols;
  };

  adornmentColumns = (settings) => {
    return settings.showAdornment ? 2 : false;
  }

  actionButtonColumns = (settings) => {
    return settings.showActionButton && settings.actionText
      && settings.actionClickListener ? 3 : false;
  };

  closeButtonColumns = (settings) => {
    return settings.showCloseButton ? 1 : false;
  };

  render() {
    const { timedOut, collapse } = this.state;
    const { classes, header, message, type, theme, settings } = this.props;
    const { showAdornment, showActionButton,
      showCloseButton, actionText, actionClickListener } = settings;
    return (
      <ClickAwayListener
        mouseEvent={this.mouseEventType(settings)}
        touchEvent={this.touchEventType(settings)}
        onClickAway={this.onClickAway}
      >
        <Collapse in={!collapse} onExited={this.onCollapsed} unmountOnExit>
          <Slide direction={'left'} in={!timedOut} onExited={this.onSlideExited}>
            <Paper className={classes.componentWrapper} style={this.wrapperStyles()} elevation={4}>
              <Grid container spacing={0}>
                <Grid item xs={this.adornmentColumns(settings)}>
                  {showAdornment && this.adornmentWrapper()}
                </Grid>
                <Grid item xs={this.bodyColumns(settings)}>
                  {this.bodyWrapper(header, message)}
                </Grid>
                <Grid item xs={this.actionButtonColumns(settings)}>
                {showActionButton && actionText && actionClickListener &&
                  this.actionWrapper(actionText, actionClickListener)
                }
                </Grid>
                <Grid item xs={this.closeButtonColumns(settings)}>
                  {showCloseButton &&
                    <IconButton
                      className={classes.closeButton}
                      style={this.bodyStyles()}
                      onClick={this.onClose}
                    >
                      <Close className={classes.closeIcon} color="inherit" />
                    </IconButton>
                  }
                </Grid>
              </Grid>
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
