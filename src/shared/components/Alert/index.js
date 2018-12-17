import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { AlertsContext } from '../../context/AlertsProvider';
import types from '../../utils/types';
 
class Alert extends Component {
  state = {};

  componentDidUpdate(prevProps) {
    const { open, onClose, type, header, message } = this.props;
    const { info, success, warning, error } = this.context;
    if (open && !prevProps.open) {
      switch(type) {
        case types.info:
          info(header, message, onClose);
          break;
        case types.success:
          success(header, message, onClose);
          break;
        case types.warning:
          warning(header, message, onClose);
          break;
        case types.error:
          error(header, message, onClose);
          break;
        default:
          info(header, message, onClose);
      }
    }
  }

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
};

Alert.defaultProps = {
  open: false,
  onClose: () => {},
  type: types.info,
  header: null,
  message: null,
};

export default Alert;
