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

  bodyWrapper = (header, message) => {
    const { theme, settings } = this.props;
  
    let wrapper;
    switch(this.props.type) {
      case 'info':
      wrapper = theme.info.body.wrapper;
      if (wrapper && typeof wrapper === 'function') {
        return wrapper(
          theme.info.body.header(header), theme.info.body.message(message), this.textStyles(), settings);
      } break;
      case 'success':
        wrapper = theme.success.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.success.body.header(header), theme.success.body.message(message), this.textStyles());
        } break;
      case 'warning':
        wrapper = theme.warning.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.warning.body.header(header), theme.warning.body.message(message), this.textStyles());
        } break;
      case 'error':
        wrapper = theme.error.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.error.body.header(header), theme.error.body.message(message), this.textStyles());
        } break;
      default:
        wrapper = theme.info.body.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.info.body.header(header), theme.info.body.message(message), this.textStyles());
        } break;
    }
    return null;
  };

  adornmentWrapper = () => {
    const { theme } = this.props;
  
    let wrapper;
    switch(this.props.type) {
      case 'info':
      wrapper = theme.info.adornment.wrapper;
      if (wrapper && typeof wrapper === 'function') {
        return wrapper(
          theme.info.adornment.icon, this.textStyles());
      } break;
      case 'success':
        wrapper = theme.success.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.success.adornment.icon, this.textStyles());
        } break;
      case 'warning':
        wrapper = theme.warning.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.warning.adornment.icon, this.textStyles());
        } break;
      case 'error':
        wrapper = theme.error.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.error.adornment.icon, this.textStyles());
        } break;
      default:
        wrapper = theme.info.adornment.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.info.adornment.icon, this.textStyles());
        } break;
    }
    return null;
  };

  buttonWrapper = (text, onClick) => {
    const { theme } = this.props;
  
    let wrapper;
    switch(this.props.type) {
      case 'info':
      wrapper = theme.info.action.wrapper;
      if (wrapper && typeof wrapper === 'function') {
        return wrapper(
          theme.info.action.button(text, onClick), this.textStyles());
      } break;
      case 'success':
        wrapper = theme.success.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.success.action.button(text, onClick), this.textStyles());
        } break;
      case 'warning':
        wrapper = theme.warning.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.warning.action.button(text, onClick), this.textStyles());
        } break;
      case 'error':
        wrapper = theme.error.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.error.action.button(text, onClick), this.textStyles());
        } break;
      default:
        wrapper = theme.info.action.wrapper;
        if (wrapper && typeof wrapper === 'function') {
          return wrapper(
            theme.info.action.button(text, onClick), this.textStyles());
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
    return settings.showCloseButton ? 1 : 0;
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
            {/* <Paper className={classes.componentWrapper} style={{ background: 'cyan' }} elevation={4}>  */}
              {/* <IndicatorIcon type={type} theme={theme} /> */}
              <Grid container spacing={0}>
                <Grid item xs={this.adornmentColumns(settings)}>
                  {showAdornment && this.adornmentWrapper()}
                </Grid>
                <Grid item xs={this.bodyColumns(settings)}>
                  {this.bodyWrapper(header, message)}
                </Grid>
                <Grid item xs={this.actionButtonColumns(settings)}>
                {showActionButton && actionText && actionClickListener &&
                  this.buttonWrapper(actionText, actionClickListener)
                }
                </Grid>
                <Grid item xs={this.closeButtonColumns(settings)}>
                  {showCloseButton &&
                    <IconButton
                      className={classes.closeButton}
                      style={this.textStyles()}
                      onClick={this.onClose}
                    >
                      <Close className={classes.closeIcon} color="inherit" />
                    </IconButton>
                  }
                </Grid>
              </Grid>
              {/* <div className={classes.textWrapper} style={this.textStyles()}>
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
              </div> */}
              {/* {showBody && this.bodyWrapper(header, message)} */}
              {/* {showCloseButton &&
                <IconButton
                  className={classes.closeButton}
                  style={this.textStyles()}
                  onClick={this.onClose}
                >
                  <Close className={classes.closeIcon} color="inherit" />
                </IconButton>
              } */}
              {/* {showActionButton && actionText && actionClickListener &&
                this.buttonWrapper(actionText, actionClickListener)
              } */}
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
