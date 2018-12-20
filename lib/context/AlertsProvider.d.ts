import * as React from 'react';
import RcaTheme from '../theme';
import RcaSettings from '../settings';

export interface AlertsProviderProps {
    theme?: RcaTheme;
    settings?: RcaSettings;
    style?: React.CSSProperties;
}

declare const AlertsProvider: React.ComponentType<AlertsProviderProps>;
export const AlertsContext: React.ComponentType<{}>;
export const AlertsConsumer: React.ComponentType<{}>;

export default AlertsProvider;
