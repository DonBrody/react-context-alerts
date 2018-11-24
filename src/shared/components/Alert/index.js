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

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timedOut: false,
      collapse: false,
      timeoutFunction: null,
    };
    this.onClose = this.onClose.bind(this);
    this.clearCurrentTimeout = this.clearCurrentTimeout.bind(this);
    this.onSlideExited = this.onSlideExited.bind(this);
    this.onCollapsed = this.onCollapsed.bind(this);
    this.wrapperStyles = this.wrapperStyles.bind(this);
    this.textStyles = this.textStyles.bind(this);
  }

  componentDidMount() {
    const timeoutFunction = setTimeout(() => {
      this.onClose();
    }, this.props.timeout);
    this.setState({ timeoutFunction });
  };

  onClose() {
    this.clearCurrentTimeout();
    this.setState({ timedOut: true, timeoutFunction: null });
  };

  clearCurrentTimeout() {
    if (this.state.timeoutFunction) {
      clearTimeout(this.state.timeoutFunction);
    }
  };

  onSlideExited() {
    this.setState({ collapse: true });
  };

  onCollapsed() {
    this.props.onClose();
  };

  wrapperStyles() {
    const { palette } = this.props.theme;
    switch(this.props.type) {
      case 'info': return { background: palette.info.background };
      case 'success': return { background: palette.success.background };
      case 'warning': return { background: palette.warning.background };
      case 'error': return { background: palette.error.background };
      default: return { background: palette.info.background };
    }
  };

  textStyles() {
    const { palette } = this.props.theme;
    switch(this.props.type) {
      case 'info': return { color: palette.info.color };
      case 'success': return { color: palette.success.color };
      case 'warning': return { color: palette.warning.color };
      case 'error': return { color: palette.error.color };
      default: return { color: palette.info.color };
    }
  };

  render() {
    const { timedOut, collapse } = this.state;
    const { classes, header, message, type, theme } = this.props;
    return (
      <Collapse in={!collapse} onExited={this.onCollapsed} unmountOnExit>
        <Slide direction={'left'} in={!timedOut} onExited={this.onSlideExited}>
          <Paper className={classes.componentWrapper} style={this.wrapperStyles()} elevation={10}>
            <IndicatorIcon type={type} theme={theme} />
            <div className={classes.textWrapper} style={this.textStyles()}>
              {header && <Typography component="h5" variant="h6" color="inherit">{header}</Typography>}
              <Typography component="p" variant="body1" color="inherit">{message}</Typography>
            </div>
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
  timeout: PropTypes.number,
  theme: PropTypes.object.isRequired,
};

Alert.defaultProps = {
  onClose: () => {},
  header: null,
  message: '',
  type: 'success',
  timeout: 3000,
};

export default withStyles(styles)(Alert);