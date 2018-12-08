import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Slide, Collapse, Paper, Grid, ClickAwayListener } from '@material-ui/core';
import { keys as settingsKeys } from '../../settings';
import types from '../../utils/types';

const styles = {
  componentWrapper: {
    width: '100%',
    marginBottom: 15,
    display: 'block',
  },
};

class Alert extends Component {  
  static determineValue = (globalValue, typeValue) => {
    return (typeValue || typeValue === false) ? typeValue : globalValue;
  };

  static settingValue = (key, type, settings) => {
    return Alert.determineValue(settings[key], settings[type][key]);
  };

  state = {
    timedOut: false,
    collapse: false,
    timeoutFunction: null,
  };

  componentDidMount() {
    const { type, settings } = this.props;
    const timeout = Alert.settingValue(
      settingsKeys.timeout, type, settings);
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
    const { timeoutFunction } = this.state;
    if (timeoutFunction) {
      clearTimeout(timeoutFunction);
    }
  };

  onSlideExited = () => {
    this.setState({ collapse: true });
  };

  onCollapsed = () => {
    this.props.onClose();
  };

  wrapperStyles = () => {
    const { type, theme } = this.props;
    return {
      background: theme[type].body.background,
    };
  };

  bodyWrapperStyles = () => {
    const { type, theme } = this.props;
    return {
      background: theme[type].body.background,
      color: theme[type].body.color,
    };
  };

  bodyContentStyles = () => {
    const { settings } = this.props;
    const paddingLeft = this.showAdornment(settings) ? 0 : 16;
    return {
      paddingLeft,
    };
  };

  bodyContent = (header, message) => {
    const { type, theme } = this.props;
    const content = theme[type].body.content;
    return content(
      theme[type].body.header(header),
      theme[type].body.message(message),
      this.bodyContentStyles());
  };

  bodyWrapper = (header, message) => {
    const { type, theme } = this.props;
    const wrapper = theme[type].body.wrapper;
    return wrapper(
      this.bodyContent(header, message),
      this.bodyWrapperStyles());
  };

  adornmentStyles = () => {
    const { type, theme } = this.props;
    return {
      background: theme[type].adornment.background,
      color: theme[type].adornment.color,
    };
  };

  adornmentWrapper = () => {
    const { type, theme } = this.props;
    const wrapper = theme[type].adornment.wrapper;
    return wrapper(theme[type].adornment.icon, this.adornmentStyles());
  };
  
  actionStyles = () => {
    const { type, theme } = this.props;
    return {
      background: theme[type].action.background,
      color: theme[type].action.color,
      fontWeight: theme[type].action.fontWeight,
    };
  };

  actionWrapper = (settings) => {
    const { type, theme } = this.props;
    const wrapper = theme[type].action.wrapper;
    const text = Alert.settingValue(
      settingsKeys.actionText, type, settings);
    const onClick = Alert.settingValue(
      settingsKeys.actionClickListener, type, settings);
    return wrapper(
      theme[type].action.button(text, onClick),
      this.actionStyles());
  };

  closeStyles = () => {
    const { type, theme } = this.props;
    return {
      background: theme[type].close.background,
      color: theme[type].close.color,
    };
  };

  closeWrapper = (onClick) => {
    const { type, theme } = this.props;
    const wrapper = theme[type].close.wrapper;
    const icon = theme[type].close.icon;
    return wrapper(
      theme[type].close.button(icon, onClick),
      this.closeStyles());
  };

  mouseEventType = (settings) => {
    const { type } = this.props;
    const enableClickAwayListener = Alert.settingValue(
      settingsKeys.enableClickAwayListener, type, settings);
    return enableClickAwayListener ? 'onMouseUp' : false;
  };

  touchEventType = (settings) => {
    const { type } = this.props;
    const enableClickAwayListener = Alert.settingValue(
      settingsKeys.enableClickAwayListener, type, settings);
    return enableClickAwayListener ? 'onTouchEnd' : false;
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
    return this.showAdornment(settings) ? 2 : false;
  };

  actionButtonColumns = (settings) => {
    return this.showAction(settings) ? 3 : false;
  };

  closeButtonColumns = (settings) => {
    return this.showClose(settings) ? 1 : false;
  };

  showAdornment = (settings) => {
    const { type } = this.props;
    return Alert.settingValue(
      settingsKeys.showAdornment, type, settings);
  };

  showAction = (settings) => {
    const { type } = this.props;
    return Alert.settingValue(settingsKeys.showActionButton, type, settings) &&
      Alert.settingValue(settingsKeys.actionText, type, settings) &&
      Alert.settingValue(settingsKeys.actionClickListener, type, settings);
  };

  showClose = (settings) => {
    const { type } = this.props;
    return Alert.settingValue(
      settingsKeys.showCloseButton, type, settings);
  };

  render() {
    const { timedOut, collapse } = this.state;
    const { classes, header, message, settings } = this.props;
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
                  {this.showAdornment(settings) && 
                    this.adornmentWrapper()
                  }
                </Grid>
                <Grid item xs={this.bodyColumns(settings)}>
                  {// always show body
                    this.bodyWrapper(header, message)
                  }
                </Grid>
                <Grid item xs={this.actionButtonColumns(settings)}>
                  {this.showAction(settings) &&
                    this.actionWrapper(settings)
                  }
                </Grid>
                <Grid item xs={this.closeButtonColumns(settings)}>
                  {this.showClose(settings) &&
                    this.closeWrapper(this.onClose)
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
  type: PropTypes.oneOf([types.info, types.success, types.warning, types.error]),
  theme: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

Alert.defaultProps = {
  onClose: () => {},
  header: null,
  message: '',
  type: types.info,
};

export default withStyles(styles)(Alert);
