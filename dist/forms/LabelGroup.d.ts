import React from 'react';
import './LabelGroup.css';
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
export declare const LabelGroup: React.FC<Props>;
export {};
