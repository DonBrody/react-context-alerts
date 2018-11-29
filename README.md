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
#### Global Theming
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

ReactDOM.render(
  <AlertsProvider theme={rcaTheme}>
    <App />
  </AlertsProvider>, document.getElementById('root'));
```
The example above will set the background of the info alert body to the same color as the adornment (The adornment background is blue by default and the body background is white. The above code overrides the background and text color of the body to match the adornment).  
  
There is also a function exposed by the `AlertsConsumer` context that allows you to update the global theme. This function will update the current global theme, not the default theme (unless you have not already overridden the default theme). The code below will update the global theme to set the color of the error icon to yellow.
```
<AlertsConsumer>
  {alerts => {
    alerts.updateDefaultTheme({ palette: { error: { adornment: { color: 'yellow' } } } });
    return null; 
  }}
</AlertsConsumer>
```
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
### Settings
#### Global Settings
The `AlertsProvider` exposes a `settings` prop that expects an object. You can override the default settings by using the provided `createRcaSettings` function. Here is how we can customize the settings for the example above:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { AlertsProvider, createRcaTheme, createRcaSettings } from 'react-context-alerts';
import App from './App';

const rcaTheme = createRcaTheme({
  palette: {
    info: {
      background: '#1976d2',
      color: 'white',
    },
  },
});

const rcaSettings = createRcaSettings({
  timeout: null,
  showCloseButton: true,
});

ReactDOM.render(
  <AlertsProvider theme={rcaTheme} settings={rcaSettings}>
    <App />
  </AlertsProvider>, document.getElementById('root'));
```
The example above will disable the default timeout (you can provide a timeout in ms - default is 5000) and enable a close button.  
  
There is also a function exposed by the `AlertsConsumer` context that allows you to update the global settings. This function will update the current global settings, not the default settings (unless you have not already overridden the default settings). The code below will update the global settings to enable the close button on all alerts.
```
<AlertsConsumer>
  {alerts => {
    alerts.updateDefaultSettings({ showCloseButton: true });
    return null; 
  }}
</AlertsConsumer>
```
#### Instance Settings
Settings may also be updated for individual alerts. There is an optional third settings parameter for all alerts. Overriding the instance settings will override the current global settings, not the default settings. Updating an alert's instance settings does not affect the global settings. The code below will override the info alert's timeout setting for this instance only.
```
<button onClick={() => alerts.info('Info Header', 'Info message', { timeout: 3000 })}>
  Info Alert
</button>
```
#### Full Default Settings
```
{
  timeout: 5000,
  showCloseButton: false,
}
```
More settings will be added soon!

## Future Updates
This is a new and evolving library. There are currently very limited options for customizing your alerts. Future updates will allow you to add default settings and individual settings for alerts. Settings that will be exposed shortly:
* Action button (with onClick exposed to the user)
* Timeout progress (along bottom of alert)
* Optional click away listener

## Next Steps
Add `react-context-alerts` to any (and hopefully all :) of your projects, customize the alerts in any way that fits your needs, and enjoy!

## Main Dependencies
* [React](https://github.com/facebook/react)
* [Material UI](https://github.com/mui-org/material-ui)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
