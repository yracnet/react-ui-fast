import React from 'react';
import "./Output.scss";

export interface OutputTextProps {
    name: string,
    value?: any,
    onFormat?: (value: any) => string,
    align?: "left" | "right" | "center",
    hide?: boolean
}

export const OutputText: React.FC<OutputTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, onFormat, align } = props;
    let valueText = value || '';
    if (onFormat) {
        valueText = onFormat(valueText);
    }
    let className = 'Output label-text-' + (align || 'left');
    return <label className={className}>{valueText}</label>;
}