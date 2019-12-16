import React from 'react';
export interface PopoverProps {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    hide?: boolean;
    title?: string;
    arrow?: 'auto' | 'top' | 'left' | 'right' | 'bottom';
    style?: any;
    for?: string | any;
    children?: any | Array<any>;
}
export declare const Popover: React.FC<PopoverProps>;
