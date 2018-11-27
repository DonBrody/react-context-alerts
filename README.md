# react-context-alerts
Simple and configurable alert library utilizing React Context

## Demo
Demo utilizes alerts with default theming only. The demo will be updated shortly to include custom theming.  
[react-context-alerts demo](https://react-context-alerts.herokuapp.com/)

## Prerequisites
`react-context-alerts` utilizes the React context api, which relies on peer dependencies `react` and `react-dom` v16.3.0 or greater.

## Getting Started
Install `react-context-alerts`:
```
npm i -S react-context-alerts
```
Wrap all components that will be utilizing these alerts with the `AlertsProvider`. For example, you could wrap your entire application with the `AlertsProvider`:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { AlertsProvider } from 'react-context-alerts';
import App from './App';

ReactDOM.render(<AlertsProvider><App /></AlertsProvider>, document.getElementById('root'));
```
Wrap any component (or group of components) that will create an alert event with the `AlertsConsumer`:
```
import { AlertsConsumer } from 'react-context-alerts';

export default () => (
  <AlertsConsumer>
    {alerts => (
      <section>
        <button onClick={() => alerts.info('Info Header', 'Info message')}>Info Alert</button>
        <button onClick={() => alerts.success('Success Header', 'Success message')}>Success Alert</button>
        <button onClick={() => alerts.warning('Warning Header', 'Warning message')}>Warning Alert</button>
        <button onClick={() => alerts.error('Error Header', 'error message')}>Error Alert</button>
      </section>
    )}
  </AlertsConsumer>
};
```
And that's it! The above code is all you need to get up and running with default styling.

## Customization
### Theming
The `AlertsProvider` exposes a `theme` prop that expects an object. You can override the default theme by using the provided `createRcaTheme` function. Here is how we can customize the theme for the example above:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { AlertsProvider, createRcaTheme } from 'react-context-alerts';
import App from './App';

const rcaTheme = createRcaTheme({
  palette: {
    info: {
      background: '#1976d2',
      color: 'white',
    },
  },
});

ReactDOM.render(<AlertsProvider theme={rcaTheme}><App /></AlertsProvider>, document.getElementById('root'));
```
The example above will set the background of the info alert body to the same color as the adornment (The adornment background is blue by default and the body background is white. The above code overrides the background and text color of the body to match the adornment).
#### Full Default Theme
```
palette: {
  info: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#1976d2',
      color: 'white',
    },
  },
  success: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#388e3c',
      color: 'white',
    },
  },
  warning: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#f57c00',
      color: 'white',
    },
  },
  error: {
    background: 'white',
    color: '#51525d',
    adornment: {
      background: '#d32f2f',
      color: 'white',
    },
  },
},
```
## Future Updates
This is a new and evolving library. There are currently very limited options for customizing your alerts. Future updates will allow you to add default settings and individual settings for alerts. Settings that will be exposed shortly:
* Timeout duration (including no timeout option)
* Manual close option (close button in corner of alert)
* Action button (with onClick even exposed to the user)
* Timeout progress (along bottom of alert)

## Next Steps
Add `react-context-alerts` to any (and hopefully all :) of your projects, customize the alerts in any way that fits your needs, and enjoy!

## Main Dependencies
* [React](https://github.com/facebook/react)
* [Material UI](https://github.com/mui-org/material-ui)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
