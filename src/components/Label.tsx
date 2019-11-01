import React from 'react';
import "./Label.scss";

export interface LabelTextProps {
    name: string,
    value?: string,
    align?: "left" | "right" | "center",
    hide?: boolean
}

export const LabelText: React.FC<LabelTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, align } = props;
    let className = 'Label label-text-' + (align || 'left');
    return <label className={className}>{value}</label>;
}