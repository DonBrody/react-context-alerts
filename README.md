# react-context-alerts
Simple and configurable alert library utilizing React Context

## Example
The demo below can be found [here](https://donbrody.github.io/react-context-alerts).
<img src="/rca_demo.gif?raw=true" width="700px">  

## Prerequisites
`react-context-alerts` utilizes the React context api, which relies on peer dependencies `react` and `react-dom` v16.3.0 or greater. `@material-ui/core` v 3.0.0 or greater is also a peer dependency.

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
import App from './App'; // your application

ReactDOM.render(
  <AlertsProvider>
    <App />
  </AlertsProvider>, document.getElementById('root'));
```
**IMPORTANT**: If you are using `@material-ui/core` and `jss` in your application, you must place the `AlertsProvider` inside of your existing `MuiThemeProvider`. `react-context-alerts` uses its own `MuiThemeProvider` internally. Placing the `AlertsProvider` outside of your existing `MuiThemeProvider` will cause unexpected UI behavior/styling because the two providers must work together to generate `jss` class names.

Next, add the `Alert` component (or multiple `Alert` components) anywhere inside of the component tree that is wrapped by `AlertsProvider`. Trigger the `Alert` by setting its `open` prop to `true`. And, that's all it takes to get the default `Alert` to render!
```
import React, { Component } from 'react';
import { Alert } from 'react-context-alerts';

class SampleComponent extends Component {
  state = { open: false };
  
  render() {
    return (
      <div>
        <button
          onClick={() => this.setState({ open: true })}
        >
          Trigger alert!
        </button>
        <Alert
          open={this.state.open}
        />
      </div>   
    );
  }
}
```

## Alert Props
|Prop|Type|Default|Description|
|---|---|---|---|
|open|bool|`false`|`Alert` is triggered when this prop changes from `false` to `true`. Make sure to utilize the `onClose` callback to set this prop back to `false`, otherwise the `Alert` may only be triggered one time.|
|onClose|func|() => {}|Fired once the `Alert` slide out animation completes.|
|type|oneOf(['info','success','warning','error'])|'info'|Indicates the `Alert` theme to be rendered.|
|header|string|''|`h5` title|
|message|string|''|`p` body|
|timeout|number|5000|Time in ms that the `Alert` will display. You may pass `null` to disable the timeout (make sure to provide a close button or click away listener if disabled).|
|showAdornment|bool|`true`|If `true` the `Alert` will contain an adornment on its left side with the color and icon that correspond to its type theme (Themes discussed below).|
|showActionButton|bool|`false`|If `true` a button will appear on the right side of the `Alert` (**IMPORTANT:** The action button will only display if this prop is `true`, and both the `actionText` and `actionClickListener` contain truthy values).|
|showCloseButton|bool|`false`|If `true` a close button will appear in the upper right corner of the `Alert`.|
|showProgressBar|bool|`false`|If `true` a progress bar will display and animate along the bottom of the `Alert`. Its color will correspond to the color of the adornment (or type theme of the `Alert`).|
|enableClickAwayListener|bool|`false`|If `true` clicking anywhere in the browser (away from the `Alert`) will cause the `Alert` to close.|
|actionText|string|`null`|Text to display in the action button.|
|actionClickListener|func|`null`|Click listener attached to the action button click event.|

## AlertsProvider Props 
|Prop|Type|Description|
|---|---|---|
|theme|object|Override default theming. Check below for more information on overriding the default theme.|
|settings|object|Override default settings. Check below for more information on overriding the default settings.|
|style|object|Override the `Alert` wrapper styles (i.e. { top: 0, right: 0 } will adjust the absolute positioning of the `Alert` wrapper to the very top right corner of the screen.) Any styles you add will be merged with the [default styles][1].|

## Theming
`react-context-alerts` are **fully customizable**. You can set the coloring of the text/icon and background of the adornment, body, action button, and close button. Or, you can replace them with your own custom components! The simplest way to do this is by using the provided `createRcaTheme` function:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { AlertsProvider, createRcaTheme } from 'react-context-alerts';
import App from './App'; // your application

const rcaTheme = createRcaTheme({
  info: {
    body: {
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
The example above will set the background color of the info `Alert` body to the same shade of blue as the default info `Alert` adornment, and will set its text color to white.  

The theme object is fairly large, so I encourage you to take a look at the [source][2] if you are interested in making advanced theming overrides.

## Settings
`react-context-alerts` allows you to override the default `Alert` settings for all of your `Alert` components. The simplest way to do this is by using the provided `createRcaSettings` function:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { AlertsProvider, createRcaSettings } from 'react-context-alerts';
import App from './App'; // your application

const rcaSettings = createRcaSettings({
  timeout: null,
  showCloseButton: true,
  info: {
    timeout: 10000,
    showProgressBar: true,
  },
  error: {
    enableClickAwayListener: true,
  },
});

ReactDOM.render(
  <AlertsProvider settings={rcaSettings}>
    <App />
  </AlertsProvider>, document.getElementById('root'));
```
The example above will first disable the timeout for all `Alert`s, and enable/show the close button for all `Alert`s. Then the settings with higher specificity (the `info` and `error` objects) will override the new default settings for their specified types (i.e. all info `Alert`s will have a timeout of 10 seconds and enable/show a progress bar, and all error `Alert`s will enable a click away listener).  

**It's important to understand specificity here:** The top level object properties override the default settings for all `Alert`s. Then the more specific type named objects will override the default settings for all `Alert`s of their specified type. Then any props that are passed into an `Alert` component (these are considered the most specific settings) will override all other overrides, but only for that instance of the `Alert`.

Although there are not nearly as many settings options as theming options, I encourage you to take a look at the [source][3] if you are interested in making advanced settings overrides.

## Advanced Use
The `Alert` component obfuscates the use of the React context consumer. Obfuscating this functionality somewhat limits the potential uses of this library, however, the context consumer is exposed if you decide you need more control over the functionality of this library. If you get to this point, it is probably best to read through the full [source][4] to understand what's going on and how to use all of the available features (it's a relatively small set of files).  

In addition to reading through the source, there is a [developers playground][5] available. Just run `npm run start:playground` once all of your dependencies are installed. It'll pop up a simple app that can be used to play around with any of the features you want. It utilizes [react-scripts][6], so you'll get hot reloads as well.

## Next Steps
Add `react-context-alerts` to any (and hopefully all :) of your projects, customize the alerts in any way that fits your needs, and enjoy!

## Peer Dependencies
* [React](https://github.com/facebook/react)
* [Material UI](https://github.com/mui-org/material-ui)

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

[1]:https://github.com/DonBrody/react-context-alerts/blob/master/src/shared/context/AlertsProvider.js
[2]:src/shared/theme/index.js
[3]:src/shared/settings/index.js
[4]:src/shared
[5]:src/playground
[6]:https://github.com/facebook/create-react-app#readme
