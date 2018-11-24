import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Notification from '../components/Notification';
import DefaultTheme from '../theme';

const styles = {
  notificationWrapper: {
    width: '80%',
    maxWidth: 450,
    position: 'fixed',
    top: 75,
    right: 16,
    zIndex: 100000,
  },
};

const DEFAULT_STATE = {
  notifications: [],
};

const NotificationsContext = React.createContext(DEFAULT_STATE);
export const NotificationsConsumer = NotificationsContext.Consumer;

let count = 0;
class NotificationsProvider extends Component {
  state = DEFAULT_STATE;

  createNotificationObject = (type, header, message) => {
    return {
      id: count++, type, header, message
    };
  };

  onNotificationClose = (notification) => {
    this.setState({ notifications: this.state.notifications.filter((current) => (
      notification !== current
    ))});
  };

  render() {
    const { classes, theme } = this.props;
    return (
      <NotificationsContext.Provider
        value={{
          state: this.state,
          info: (header, message) => {
            const info = this.createNotificationObject('info', header, message);
            this.setState({ notifications: [...this.state.notifications, info ] });
          },
          success: (header, message) => {
            const success = this.createNotificationObject('success', header, message);
            this.setState({ notifications: [...this.state.notifications, success ] });
          },
          warning: (header, message) => {
            const warning = this.createNotificationObject('warning', header, message);
            this.setState({ notifications: [...this.state.notifications, warning ] });
          },
          error: (header, message) => {
            const error = this.createNotificationObject('error', header, message);
            this.setState({ notifications: [...this.state.notifications, error ] });
          },
        }}
      >
        {this.props.children}
        <aside className={classes.notificationWrapper}>
          {this.state.notifications.map((notification) => (
            <Notification
              key={notification.id}
              id={notification.id}
              header={notification.header}
              message={notification.message}
              type={notification.type}
              onClose={() => this.onNotificationClose(notification)}
              theme={theme}
            />
          ))}
        </aside>
      </NotificationsContext.Provider>
    );
  }
};

NotificationsProvider.propTypes = {
  theme: PropTypes.object,
};

NotificationsProvider.defaultProps = {
  theme: DefaultTheme,
};

export default withStyles(styles)(NotificationsProvider);
