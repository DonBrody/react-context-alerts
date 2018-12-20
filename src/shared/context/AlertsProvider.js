import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import AlertController from '../components/AlertController';
import DefaultTheme from '../theme';
import DefaultSettings from '../settings';
import createRcaSettings from '../settings/createRcaSettings';
import createRcaTheme from '../theme/createRcaTheme';
import types from '../utils/types';

const defaultStyles = {
  width: '80%',
  maxWidth: 450,
  minWidth: 320,
  position: 'fixed',
  top: 75,
  right: 16,
  zIndex: 100000,
};

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const DEFAULT_STATE = {
  alerts: [],
  theme: DefaultTheme,
  settings: DefaultSettings,
};

export const AlertsContext = React.createContext(DEFAULT_STATE);
export const AlertsConsumer = AlertsContext.Consumer;

let count = 0;
class AlertsProvider extends Component {
  state = DEFAULT_STATE;

  componentDidMount() {
    this.onThemePropsUpdated(null, this.props.theme);
    this.onSettingsPropsUpdated(null, this.props.settings);
  }

  componentDidUpdate(prevProps) {
    this.onThemePropsUpdated(prevProps.theme, this.props.theme);
    this.onSettingsPropsUpdated(prevProps.settings, this.props.settings);
  }

  onThemePropsUpdated = (prevTheme, theme) => {
    if (theme !== prevTheme) {
      this.setState({ theme: this.createCustomTheme(theme) });
    }
  };

  onSettingsPropsUpdated = (prevSettings, settings) => {
    if (settings !== prevSettings) {
      this.setState({ settings: this.createCustomSettings(settings) });
    }
  };

  onAlertClose = (alert) => {
    this.setState({ alerts: this.state.alerts.filter((current) => (
      alert !== current
    ))}, alert.callback);
  };

  createAlertObject = (type, header, message, callback, instanceSettings) => {
    return {
      id: count++,
      type,
      header,
      message,
      callback,
      settings: this.createCustomSettings(instanceSettings),
    };
  };

  createCustomTheme = (overrides) => {
    return createRcaTheme(overrides, this.state.theme);
  };

  createCustomSettings = (overrides) => {
    return createRcaSettings(overrides, this.state.settings);
  };

  render() {
    const { theme } = this.state;
    return (
      <AlertsContext.Provider
        value={{
          info: (header, message, callback = null, settings = {}) => {
            const info = this.createAlertObject(types.info, header, message, callback, settings);
            this.setState({ alerts: [...this.state.alerts, info ] });
          },
          success: (header, message, callback = null, settings = {}) => {
            const success = this.createAlertObject(types.success, header, message, callback, settings);
            this.setState({ alerts: [...this.state.alerts, success ] });
          },
          warning: (header, message, callback = null, settings = {}) => {
            const warning = this.createAlertObject(types.warning, header, message, callback, settings);
            this.setState({ alerts: [...this.state.alerts, warning ] });
          },
          error: (header, message, callback = null, settings = {}) => {
            const error = this.createAlertObject(types.error, header, message, callback, settings);
            this.setState({ alerts: [...this.state.alerts, error ] });
          },
          updateGlobalTheme: (theme = {}, callback = () => {}) => {
            this.setState({ theme: this.createCustomTheme(theme) }, () => {
              callback();
            });
          },
          updateGlobalSettings: (settings = {}, callback = () => {}) => {
            this.setState({ settings: this.createCustomSettings(settings) }, () => {
              callback();
            });
          },
          globalTheme: () => {
            return this.state.theme;
          },
          globalSettings: () => {
            return this.state.settings;
          },
        }}
      >
        {this.props.children}
        <MuiThemeProvider theme={muiTheme}>
          <aside style={{ ...defaultStyles, ...this.props.style }}>
            {this.state.alerts.map((alert) => (
              <AlertController
                key={alert.id}
                id={alert.id}
                header={alert.header}
                message={alert.message}
                type={alert.type}
                onClose={() => this.onAlertClose(alert)}
                theme={theme}
                settings={alert.settings}
              />
            ))}
          </aside>
        </MuiThemeProvider>
      </AlertsContext.Provider>
    );
  }
};

AlertsProvider.propTypes = {
  theme: PropTypes.object,
  settings: PropTypes.object,
  style: PropTypes.object,
};

AlertsProvider.defaultProps = {
  theme: DefaultTheme,
  settings: DefaultSettings,
  style: {},
};

export default AlertsProvider;
