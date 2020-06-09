import React from "react";
import "./Output.scss";

export interface OutputTextProps {
    name: string,
    value?: any,
    onFormat?: (value: any) => string,
    align?: "left" | "right" | "center",
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    hide?: boolean
}

export const OutputText: React.FC<OutputTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, onFormat, align, variant } = props;
    align = align || "left";
    variant = variant || "default";
    let valueText = value || "";
    if (onFormat) {
        valueText = onFormat(value);
    }
    let className = "Output label-text-" + align + ' text-' + variant;
    return <label className={className}>{valueText}</label>;
}