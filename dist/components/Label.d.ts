import React from "react";
import "./Label.scss";
export interface LabelTextProps {
    value?: string;
    title?: string;
    help?: string;
    mode?: "bottom" | "top" | "start";
    align?: "left" | "right" | "center";
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    hide?: boolean;
    children?: any | Array<any>;
}
export declare const LabelText: React.FC<LabelTextProps>;
