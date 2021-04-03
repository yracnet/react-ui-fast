import React, { CSSProperties } from 'react';
import './FormItem.css';
declare type Props = {
    hide?: boolean;
    label?: string | any;
    title?: string;
    size?: string;
    col?: number;
    helpFeedback?: any;
    invalidFeedback?: any;
    validFeedback?: any;
    children?: any;
    className?: string;
    style?: CSSProperties;
};
export declare const FormItem: React.FC<Props>;
export {};
