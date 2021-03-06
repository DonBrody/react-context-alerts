import React, { Component } from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { AlertsProvider, createRcaTheme, createRcaSettings } from 'react-context-alerts';
import Main from './views/main';

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFF' },
    info: { main: '#1976d2', darker: '#0d47a1' },
    success: { main: '#388e3c', darker: '#1b5e20' },
    warning: { main: '#f57c00', darker: '#e65100' },
    error: { main: '#d32f2f', darker: '#b71c1c' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const rcaTheme = createRcaTheme({
  success: {
    body: {
      background: '#388E3C',
      headerColor: 'yellow',
      messageColor: 'white',
    },
  },
  warning: {
    body: {
      background: '#F57C00',
      color: 'white',
    },
  },
});

const rcaSettings = createRcaSettings({
  success: {
    timeout: 7000,
    showAdornment: false,
  },
  warning: {
    timeout: 10000,
    enableClickAwayListener: true,
  },
  error: {
    timeout: 10000,
    showCloseButton: true,
    showProgressBar: true,
  },
});

const rcaStyles = {
};

const AppBase = () => (
  <Redirect to ="/" />
);

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <header role="banner">
            <AppBar position="static" color="primary">
              <Toolbar>
                <Typography variant="h5" component="h1" color="secondary">
                  React Context Alerts Demo
                </Typography>
              </Toolbar>
            </AppBar>
          </header>
          <AlertsProvider theme={rcaTheme} settings={rcaSettings} style={rcaStyles}>
            <main role="main">
              <HashRouter>
                <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route path="/" component={AppBase} />
                </Switch>
              </HashRouter>
            </main>
          </AlertsProvider>
          <footer style={{ marginTop: 60, textAlign: 'center' }}>
            <Typography variant="caption" component="aside">
              MIT Licensed Software
            </Typography>
          </footer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
