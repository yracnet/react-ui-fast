import React from "react";
import "./Output.scss";
export interface OutputTextProps {
    name: string;
    value?: any;
    onFormat?: (value: any) => string;
    align?: "left" | "right" | "center";
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    hide?: boolean;
}
export declare const OutputText: React.FC<OutputTextProps>;
