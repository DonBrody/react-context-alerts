# Change Log

## 1.0.3
- [new] Move example app to GitHub pages.

## 1.0.2
- [fix] Update README.md with important details needed to avoid build issues.

## 1.0.1
- [fix] Optimize Babel build process.

## 1.0.0
- [fix] Remove unnecessary dependencies from exporting as part of npm build.
- [fix] Lock down dependency versions.
- [fix] Reduce @material-ui/core peer version requirement.
- [fix] Reduce @material-ui/icons dependency version requirement.

## 0.7.3
- [fix] Make @material-ui/core a peer dependency.

## 0.7.2
- [fix] Add padding to body when no action or close button present.
- [fix] Add border radius to body when no adornment is present.
- [fix] Body color specificity.

## 0.7.1
- [fix] Update TypeScript definitions for new wrapper.
- [fix] Update README for new wrapper.

## 0.7.0
- [new] Alert wrapper component (obfuscates context functions).
- [fix] Merge null timeout instance setting values.

## 0.6.3
- [new] Optionally style header and message colors individually.

## 0.6.2
- [fix] Build/install process infinite loop.

## 0.6.0
- [new] Optional progress bar theme and setting.

## 0.5.2
- [new] Add developer playground for shared components.

## 0.5.1
- [fix] Decouple example application.

## 0.5.0
- [new] Global type settings.
- [new] Decouple body content and expose through theme.
- [fix] Add type index file to root (causes warning without one).
- [fix] Add padding to body when adornment is hidden.

## 0.4.3
- [new] Attach close components to theme object.
- [new] Add basic TypeScript definitions.

## 0.4.2
- [fix] Center alert body vertically.

## 0.4.1
- [fix] README.md updated to match current project configuration.

## 0.4.0
- [new] Remove 'palette' wrapper object from theme object (simplify theme object).
- [new] Optional click away listener setting.
- [new] Optional action button theme and settings.
- [new] Attach adornment components to theme object.
- [new] Attach body components to theme object.
- [new] Attach action button components to theme object.
- [new] Expose alerts wrapper styles through AlertsProvider props.

## 0.3.2
- [fix] Update global theme through context.
- [fix] Update global settings through context.
- [new] Optional callback added to global theme updates.
- [new] Optional callback added to global settings updates.
- [fix] updateDefaultTheme renamed to updateGlobalTheme.
- [fix] updateDefaultSettings renamed to updateGlobalSettings.

## 0.3.1
- [new] Settings exposed to user.
- [new] Timeout configurable.
- [new] Optional close button.

## 0.2.4
- [fix] createRcnTheme function renamed to createRcaTheme.
- [fix] Border radius added to left top and bottom alert corners.
- [new] Reduced alert elevation to 4 and increased default timeout to 5 seconds.

## 0.2.1
- [new] Fully functional alerts with some theming customization available.