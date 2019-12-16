import React from 'react';
import './Icon.scss';
export declare type IconVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export declare type IconSize = 'normal' | 'lg' | '2x' | '3x' | '4x' | '5x';
export declare type IconShape = 'none' | 'circle' | 'square';
export interface IconProps {
    name?: string;
    hide?: boolean;
    variant?: IconVariant;
    size?: IconSize;
    shape?: IconShape;
    text?: string;
}
export declare const Icon: React.SFC<IconProps>;
