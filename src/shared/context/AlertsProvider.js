import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Alert from '../components/Alert';
import DefaultTheme from '../theme';
import DefaultSettings from '../settings';

const styles = {
  alertWrapper: {
    width: '80%',
    maxWidth: 450,
    position: 'fixed',
    top: 75,
    right: 16,
    zIndex: 100000,
  },
};

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});

const DEFAULT_STATE = {
  alerts: [],
};

const AlertsContext = React.createContext(DEFAULT_STATE);
export const AlertsConsumer = AlertsContext.Consumer;

let count = 0;
class AlertsProvider extends Component {
  state = DEFAULT_STATE;

  createAlertObject = (type, header, message) => {
    return {
      id: count++, type, header, message
    };
  };

  onAlertClose = (alert) => {
    this.setState({ alerts: this.state.alerts.filter((current) => (
      alert !== current
    ))});
  };

  render() {
    const { classes, theme, settings } = this.props;
    return (
      <AlertsContext.Provider
        value={{
          state: this.state,
          info: (header, message) => {
            const info = this.createAlertObject('info', header, message);
            this.setState({ alerts: [...this.state.alerts, info ] });
          },
          success: (header, message) => {
            const success = this.createAlertObject('success', header, message);
            this.setState({ alerts: [...this.state.alerts, success ] });
          },
          warning: (header, message) => {
            const warning = this.createAlertObject('warning', header, message);
            this.setState({ alerts: [...this.state.alerts, warning ] });
          },
          error: (header, message) => {
            const error = this.createAlertObject('error', header, message);
            this.setState({ alerts: [...this.state.alerts, error ] });
          },
        }}
      >
        {this.props.children}
        <MuiThemeProvider theme={muiTheme}>
          <aside className={classes.alertWrapper}>
            {this.state.alerts.map((alert) => (
              <Alert
                key={alert.id}
                id={alert.id}
                header={alert.header}
                message={alert.message}
                type={alert.type}
                timeout={settings.timeout}
                onClose={() => this.onAlertClose(alert)}
                theme={theme}
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
};

AlertsProvider.defaultProps = {
  theme: DefaultTheme,
  settings: DefaultSettings,
};

export default withStyles(styles)(AlertsProvider);
