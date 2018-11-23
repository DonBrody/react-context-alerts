import React, { Component } from 'react';

const DEFAULT_STATE = {};

const NotificationsContext = React.createContext(DEFAULT_STATE);
export const NotificationsConsumer = NotificationsContext.Consumer;

class NotificationsProvider extends Component {
  state = DEFAULT_STATE;

  render() {
    return (
      <NotificationsContext.Provider
        value={{
          state: this.state,
        }}
      >
        {this.props.children}
      </NotificationsContext.Provider>
    );
  }
};

export default NotificationsProvider;
