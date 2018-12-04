import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Close } from '@material-ui/icons';
import { Slide, Collapse, Paper, Grid,
  IconButton, ClickAwayListener } from '@material-ui/core';

const styles = {
  componentWrapper: {
    width: '100%',
    marginBottom: 15,
    display: 'block',
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

  bodyStyles = () => {
    const { theme } = this.props;
    return {
      color: theme[this.props.type].body.color,
      background: theme[this.props.type].body.background,
    };
  };

  bodyWrapper = (header, message) => {
    const { type, theme } = this.props;
    const wrapper = theme[type].body.wrapper;
    return wrapper(
      theme[type].body.header(header),
      theme[type].body.message(message),
      this.bodyStyles());
  };

  adornmentStyles = () => {
    const { theme } = this.props;
    return {
      color: theme[this.props.type].adornment.color,
      background: theme[this.props.type].adornment.background,
    };
  };

  adornmentWrapper = () => {
    const { type, theme } = this.props;
    const wrapper = theme[type].adornment.wrapper;
    return wrapper(theme[type].adornment.icon, this.adornmentStyles());
  };
  
  actionStyles = () => {
    const { theme } = this.props;
    return {
      color: theme[this.props.type].action.color,
      background: theme[this.props.type].action.background,
    };
  };

  actionWrapper = (text, onClick) => {
    const { type, theme } = this.props;
    const wrapper = theme[type].action.wrapper;
    return wrapper(
      theme[type].action.button(text, onClick),
      this.actionStyles());
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
    const { classes, header, message, settings } = this.props;
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
