import React, { CSSProperties } from 'react';
declare type Value = {
    type: 'info' | 'error' | 'warning' | 'success' | '';
    message: string;
};
interface Props {
    hide?: boolean;
    value?: Value;
    type?: 'info' | 'error' | 'warning' | 'success' | '';
    message?: string;
    icon?: string;
    color?: string;
    children?: any;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    style?: CSSProperties;
}
export declare const Feedback: React.FC<Props>;
export {};
