import React from "react";
import "./Label.scss";

export interface LabelTextProps {
    value?: string,
    mode?: "bottom" | "top" | "start",
    align?: "left" | "right" | "center",
    hide?: boolean,
    children?: any | Array<any>
}

export const LabelText: React.FC<LabelTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, align, mode, children } = props;
    mode = mode || "bottom";
    align = align || "left";
    let valueHtml = value ? <label className={"Text label-text-" + align}>{value}</label> : null;
    let childrenHtml = children ? <span className="Reference">{children}</span> : null;

    return mode === "bottom" ?
        <span className="Label-Bottom">
            {childrenHtml}
            {valueHtml}
        </span>
        :
        mode === "top" ?
            <span className="Label-Top">
                {valueHtml}
                {childrenHtml}
            </span>
            :
            <span className="Label-Start">
                {valueHtml}
                {childrenHtml}
            </span>;
}