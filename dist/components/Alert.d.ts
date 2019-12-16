import React from 'react';
import './Alert.scss';
export interface AlertProps {
    variant: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    message: string | Array<string>;
    icon?: string;
    cause?: string | Array<string>;
}
export declare const Alert: React.FC<AlertProps>;
