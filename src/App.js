import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import NotificationsProvider from './context/NotificationsProvider';
import Main from './views/main';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFF' },
    accent: { main: '#FF4081' },
    error: { main: '#F44336' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const AppBase = () => (
  <Redirect to ="/" />
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <header role="banner">
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h5" component="h1" color="secondary">
                  React Context Notifications
                </Typography>
              </Toolbar>
            </AppBar>
          </header>
          <NotificationsProvider>
            <main role="main">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route path="/" component={AppBase} />
                </Switch>
              </BrowserRouter>
            </main>
          </NotificationsProvider>
          <footer>
            Footer
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
