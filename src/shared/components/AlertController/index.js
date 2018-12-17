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

class AlertController extends Component {  
  static determineValue = (globalValue, typeValue) => {
    return (typeValue || typeValue === false) ? typeValue : globalValue;
  };

  static settingValue = (key, type, settings) => {
    return AlertController.determineValue(settings[key], settings[type][key]);
  };

  state = {
    timedOut: false,
    collapse: false,
  };

  componentDidMount() {
    const { type, settings } = this.props;
    const timeout = AlertController.settingValue(
      settingsKeys.timeout, type, settings);
    if (timeout) {
      this.timeoutFunction = setTimeout(() => {
        this.onClose();
      }, timeout);
    }
  };

  onClose = () => {
    clearTimeout(this.timeoutFunction);
    this.setState({ timedOut: true, timeoutFunction: null });
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

  headerStyles = () => {
    const { type, theme } = this.props;
    return {
      color: theme[type].body.headerColor,
    };
  };

  messageStyles = () => {
    const { type, theme } = this.props;
    return {
      color: theme[type].body.messageColor,
    };
  };

  bodyContent = (header, message) => {
    const { type, theme } = this.props;
    const content = theme[type].body.content;
    return content(
      theme[type].body.header(header, this.headerStyles()),
      theme[type].body.message(message, this.messageStyles()),
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
    const { type, theme, settings } = this.props;
    const styles = {
      background: theme[type].adornment.background,
      color: theme[type].adornment.color,
    };
    if (this.showProgress(settings)) {
      styles.borderBottomLeftRadius = 0;
    }
    return styles;
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
    const text = AlertController.settingValue(
      settingsKeys.actionText, type, settings);
    const onClick = AlertController.settingValue(
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

  progressWrapper = (settings) => {
    const { type, theme } = this.props;
    const wrapper = theme[type].progress.wrapper;
    const timeout = AlertController.settingValue(
      settingsKeys.timeout, type, settings);
    return wrapper(
      theme[type].progress.containerColor,
      theme[type].progress.bar(
        theme[type].progress.barColor, timeout));
  };

  mouseEventType = (settings) => {
    const { type } = this.props;
    const enableClickAwayListener = AlertController.settingValue(
      settingsKeys.enableClickAwayListener, type, settings);
    return enableClickAwayListener ? 'onMouseUp' : false;
  };

  touchEventType = (settings) => {
    const { type } = this.props;
    const enableClickAwayListener = AlertController.settingValue(
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
    return AlertController.settingValue(
      settingsKeys.showAdornment, type, settings);
  };

  showAction = (settings) => {
    const { type } = this.props;
    return AlertController.settingValue(settingsKeys.showActionButton, type, settings) &&
      AlertController.settingValue(settingsKeys.actionText, type, settings) &&
      AlertController.settingValue(settingsKeys.actionClickListener, type, settings);
  };

  showClose = (settings) => {
    const { type } = this.props;
    return AlertController.settingValue(
      settingsKeys.showCloseButton, type, settings);
  };

  showProgress = (settings) => {
    const { type } = this.props;
    return AlertController.settingValue(
      settingsKeys.showProgressBar, type, settings);
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
              {this.showProgress(settings) &&
                this.progressWrapper(settings)
              }
            </Paper>
          </Slide>
        </Collapse>
      </ClickAwayListener>
    );
  }
};

AlertController.propTypes = {
  id: PropTypes.number.isRequired,
  onClose: PropTypes.func,
  header: PropTypes.string,
  message: PropTypes.string,
  type: PropTypes.oneOf([types.info, types.success, types.warning, types.error]),
  theme: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

AlertController.defaultProps = {
  onClose: () => {},
  header: null,
  message: '',
  type: types.info,
};

export default withStyles(styles)(AlertController);
