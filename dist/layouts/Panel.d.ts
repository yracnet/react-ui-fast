import React, { CSSProperties } from 'react';
interface Props {
    hide?: boolean;
    title?: string;
    align?: 'center' | 'left' | 'right';
    mode?: 'card' | 'panel' | 'subpanel' | 'modal';
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    className?: string;
    style?: CSSProperties;
}
export declare const Panel: React.FC<Props>;
export {};
