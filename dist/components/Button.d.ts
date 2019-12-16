import React from 'react';
import './Button.scss';
import * as H from 'history';
declare type confirmType = () => string | undefined;
declare type refuseType = () => string | Array<string> | undefined;
export interface ButtonProps {
    name: string;
    history?: H.History;
    to?: string;
    onClick?: (name: string, params?: Array<any>) => void;
    params?: Array<any>;
    hide?: boolean;
    mode?: 'link' | 'button';
    disabled?: boolean;
    confirm?: string | confirmType;
    refuse?: string | Array<string> | refuseType;
    icon?: string;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    size?: 'none' | 'sm' | 'lg';
    text?: string;
    children?: string;
}
export declare const Button: React.SFC<ButtonProps>;
export {};
