import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import createRcaTheme from '../shared/components/createRcaTheme';
import AlertsProvider from '../shared/context/AlertsProvider';
import Main from './views/main';

const muiTheme = createMuiTheme({
  palette: {
    primary: { main: '#2196F3' },
    secondary: { main: '#FFF' },
    info: { light: '#2196f3', main: '#1976d2', darker: '#0d47a1' },
    success: { light: '#4caf50', main: '#388e3c', darker: '#1b5e20' },
    warning: { light: '#ff9800', main: '#f57c00', darker: '#e65100' },
    error: { light: '#f44336', main: '#d32f2f', darker: '#b71c1c' },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    useNextVariants: true,
  },
});

const rcaTheme = createRcaTheme({
  palette: {
  },
});

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
          <AlertsProvider theme={rcaTheme}>
            <main role="main">
              <BrowserRouter>
                <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route path="/" component={AppBase} />
                </Switch>
              </BrowserRouter>
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
