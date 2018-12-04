# react-context-alerts
Simple and configurable alert library utilizing React Context

## Demo
Demo utilizes alerts with default theming on all alers except the info alert. The info alert demonstrates an alert with a close button, action button, click away listener, and disabled timeout. Future updates to the demo will allow for custom configuration in the browser.
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

ReactDOM.render(
  <AlertsProvider>
    <App />
  </AlertsProvider>, document.getElementById('root'));
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
  info: {
    background: '#1976d2',
    color: 'white',
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
const themeOverride = { error: { adornment: { color: 'yellow' } } };
<AlertsConsumer>
  {alerts => {
    alerts.updateGlobalTheme(themeOverride, () => {
      // optional callback
    });
    return null; 
  }}
</AlertsConsumer>
```
#### Default Theme
```
// These base elements can be overriden, and proivded with a function
// that takes in the parameters in the signatures below and returns an element/component.
const baseElements = {
  body: {
    wrapper: createBodyWrapper, // const createBodyWrapper = (header, message, style) => ...
    header: createHeader, // const createHeader = (text, style) => ...
    message: createMessage, // const createMessage = (text, style) => ...
  },
  adornment: {
    wrapper: createAdornmentWrapper, // const createAdornmentWrapper = (child, style) => ...
  },
  action: {
    wrapper: createActionWrapper, // const createActionWrapper = (child, style) => ...
    button: createActionButton, // const createActionButton = (text, onClick, style) => ...
  },
};

const bodyColor = '#51525D';
const bodyBackground = '#FFF';
const adornmentColor = '#FFF';
const info = '#1976D2';
const success = '#388E3C';
const warning = '#F57C00';
const error = '#D32F2F';

{
  info: {
    body: {
      background: bodyBackground,
      color: bodyColor,
      ...baseElements.body,
    },
    adornment: {
      background: info,
      color: adornmentColor,
      icon: <Info />,
      ...baseElements.adornment,
    },
    action: {
      background: bodyBackground,
      color: info,
      ...baseElements.action,
    },
  },
  success: {
    ...
  },
  warning: {
    ...
  },
  error: {
    ...
  },
}
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
  info: {
    background: '#1976d2',
    color: 'white',
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
    alerts.updateGlobalSettings({ showCloseButton: true }, () => {
      // optional callback
    });
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
#### Default Settings
```
{
  timeout: 5000,
  showAdornment: true,
  showActionButton: false,
  showCloseButton: false,
  enableClickAwayListener: false,
  actionText: null,
  actionClickListener: null,
}
```
More settings will be added soon!

## In the Pipeline
This is a new and evolving library. Here are some of the upcoming updates being worked on:
* Timeout progress (along bottom of alert)
* Alerts component (will obfuscate the use of the AlertsConsumer -- this will not depreacte the current option to trigger alerts through funciton calls)

## Next Steps
Add `react-context-alerts` to any (and hopefully all :) of your projects, customize the alerts in any way that fits your needs, and enjoy!

## Main Dependencies
* [React](https://github.com/facebook/react)
* [Material UI](https://github.com/mui-org/material-ui)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
