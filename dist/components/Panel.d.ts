import React from 'react';
import './Panel.scss';
declare type TypeCol = undefined | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface PanelProps {
    title?: string;
    className?: string;
    hide?: boolean;
    colXl?: TypeCol;
    colLg?: TypeCol;
    colMd?: TypeCol;
    colSm?: TypeCol;
    col?: TypeCol;
    align?: 'center' | 'left' | 'right';
    icon?: string;
    mode?: 'card' | 'panel' | 'subpanel' | 'modal';
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    children?: any | Array<any>;
}
export declare const Panel: React.FC<PanelProps>;
export {};
