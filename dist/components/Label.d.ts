import React from "react";
import "./Label.scss";
export interface LabelTextProps {
    value?: string;
    title?: string;
    help?: string;
    mode?: "bottom" | "top" | "start";
    align?: "left" | "right" | "center";
    hide?: boolean;
    children?: any | Array<any>;
}
export declare const LabelText: React.FC<LabelTextProps>;
