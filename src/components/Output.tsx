import React from 'react';
import "./Output.scss";

export interface OutputProps {
    name: string,
    value?: any,
    onFormat?: (value: any) => string,
    align?: "left" | "right" | "center",
    hide?: boolean
}

export const OutputText: React.FC<OutputProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, onFormat, align } = props;
    let valueText = value || '';
    if (onFormat) {
        valueText = onFormat(valueText);
    }
    let className = 'label-text-' + (align || 'left');
    return <label className={className}>{valueText}</label>;
}