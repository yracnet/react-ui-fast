import React from "react";
import "./Label.scss";

export interface LabelTextProps {
    value?: string,
    title?: string,
    help?: string,
    mode?: "bottom" | "top" | "start",
    align?: "left" | "right" | "center",
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    hide?: boolean,
    children?: any | Array<any>
}

export const LabelText: React.FC<LabelTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, align, variant, mode, children, title, help } = props;
    mode = mode || "bottom";
    align = align || "left";
    variant = variant || "default";
    let helpHtml = help ? (
        <span className="Help">
            <i className="fa fa-info-circle"></i>
            <div className="popover fade bs-popover-top">
                <div className="arrow"></div>
                <div className="popover-body">
                    {help}
                </div>
            </div>
        </span>
    ) : null;


    let valueHtml = value ? <label className={"Text label-text-" + align + ' text-' + variant} title={title}>{value}</label> : null;
    let childrenHtml = children ? <span className="Reference">{children}</span> : null;

    return mode === "bottom" ?
        <span className="Label-Bottom">
            {childrenHtml}
            {valueHtml}
            {helpHtml}
        </span>
        :
        mode === "top" ?
            <span className="Label-Top">
                {valueHtml}
                {helpHtml}
                {childrenHtml}
            </span>
            :
            <span className="Label-Start">
                {valueHtml}
                {helpHtml}
                {childrenHtml}
            </span>;
}