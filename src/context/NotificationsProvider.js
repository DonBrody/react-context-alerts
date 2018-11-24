import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Notification from '../components/Notification';

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

  createNotificationObject = (status, header, message) => {
    return {
      id: count++, status, header, message
    };
  };

  onNotificationClose = (notification) => {
    this.setState({ notifications: this.state.notifications.filter((current) => (
      notification !== current
    ))});
  };

  render() {
    const { classes } = this.props;
    console.log(this.state);
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
              status={notification.status}
              onClose={() => this.onNotificationClose(notification)}
            />
          ))}
        </aside>
      </NotificationsContext.Provider>
    );
  }
};

export default withStyles(styles)(NotificationsProvider);
