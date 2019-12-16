import React from "react";
import "./Output.scss";
export interface OutputTextProps {
    name: string;
    value?: any;
    onFormat?: (value: any) => string;
    align?: "left" | "right" | "center";
    hide?: boolean;
}
export declare const OutputText: React.FC<OutputTextProps>;
