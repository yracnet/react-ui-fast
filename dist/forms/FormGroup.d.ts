import React from 'react';
import './FormGroup.css';
declare type Props = {
    hide?: boolean;
    value?: string;
    title?: string;
    help?: string;
    size?: string;
    col?: number;
    mode?: 'top' | 'left' | 'botton';
    align?: "left" | "right" | "center";
    color?: string;
    className?: string;
    children?: any;
};
export declare const FormGroup: React.FC<Props>;
export {};
