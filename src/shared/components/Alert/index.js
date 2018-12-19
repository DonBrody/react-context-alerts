import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { AlertsContext } from '../../context/AlertsProvider';
import { createRcaSettings } from '../..';
import types from '../../utils/types';

// info: {
//   body: {
//     background: colors.body.background,
//     color: colors.body.color,
//     headerColor: colors.body.color,
//     messageColor: colors.body.color,
//     ...baseElements.body,
//   },
//   adornment: {
//     background: colors.info.primary,
//     color: colors.adornment.color,
//     icon: <Info />,
//     ...baseElements.adornment,
//   },
//   action: {
//     background: colors.body.background,
//     color: colors.info.primary,
//     ...baseElements.action,
//   },
//   close: {
//     ...closePalette,
//     ...baseElements.close,
//   },
//   progress: {
//     containerColor: colors.info.light,
//     barColor: colors.info.primary,
//     ...baseElements.progress,
//   },
// },

class Alert extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    const { info, success, warning, error } = this.context;
    const { open, onClose, type, header, message } = this.props;

    const settings = createRcaSettings(
      this.extractInstanceSettingsFromProps(),
      this.context.globalSettings()
    );

    if (open && !prevProps.open) {
      switch(type) {
        case types.info:
          info(header, message, onClose, settings);
          break;
        case types.success:
          success(header, message, onClose, settings);
          break;
        case types.warning:
          warning(header, message, onClose, settings);
          break;
        case types.error:
          error(header, message, onClose, settings);
          break;
        default:
          info(header, message, onClose, settings);
      }
    }
  }

  extractInstanceSettingsFromProps = () => {
    const { type } = this.props;
    const instanceSettings = { [type]: {} };
    
    if (this.props.timeout !== undefined) {
      instanceSettings.timeout = this.props.timeout;
      instanceSettings[type].timeout = this.props.timeout;
    }
    if (this.props.showAdornment !== undefined) {
      instanceSettings.showAdornment = this.props.showAdornment;
      instanceSettings[type].showAdornment = this.props.showAdornment;
    }
    if (this.props.showActionButton !== undefined) {
      instanceSettings.showActionButton = this.props.showActionButton;
      instanceSettings[type].showActionButton = this.props.showActionButton;
    }
    if (this.props.showCloseButton !== undefined) {
      instanceSettings.showCloseButton = this.props.showCloseButton;
      instanceSettings[type].showCloseButton = this.props.showCloseButton;
    }
    if (this.props.showProgressBar !== undefined) {
      instanceSettings.showProgressBar = this.props.showProgressBar;
      instanceSettings[type].showProgressBar = this.props.showProgressBar;
    }
    if (this.props.enableClickAwayListener !== undefined) {
      instanceSettings.enableClickAwayListener = this.props.enableClickAwayListener;
      instanceSettings[type].enableClickAwayListener = this.props.enableClickAwayListener;
    }
    if (this.props.actionText !== undefined) {
      instanceSettings.actionText = this.props.actionText;
      instanceSettings[type].actionText = this.props.actionText;
    }
    if (this.props.actionClickListener !== undefined) {
      instanceSettings.actionClickListener = this.props.actionClickListener;
      instanceSettings[type].actionClickListener = this.props.actionClickListener;
    }

    return instanceSettings;
  };

  render() {
    return null;
  }
};
Alert.contextType = AlertsContext;

Alert.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  type: PropTypes.oneOf([types.info, types.success, types.warning, types.error]),
  header: PropTypes.string,
  message: PropTypes.string,
  timeout: PropTypes.number,
  showAdornment: PropTypes.bool,
  showActionButton: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  showProgressBar: PropTypes.bool,
  enableClickAwayListener: PropTypes.bool,
  actionText: PropTypes.string,
  actionClickListener: PropTypes.func,
};

Alert.defaultProps = {
  open: false,
  onClose: () => {},
  type: types.info,
  header: null,
  message: null,
  timeout: undefined,
  showAdornment: undefined,
  showActionButton: undefined,
  showCloseButton: undefined,
  showProgressBar: undefined,
  enableClickAwayListener: undefined,
  actionText: undefined,
  actionClickListener: undefined,
};

export default Alert;
