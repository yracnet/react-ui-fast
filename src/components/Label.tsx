import React from "react";
import "./Label.scss";

export interface LabelTextProps {
    value?: string,
    title?: string,
    help?: string,
    mode?: "bottom" | "top" | "start",
    align?: "left" | "right" | "center",
    hide?: boolean,
    children?: any | Array<any>
}

export const LabelText: React.FC<LabelTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, align, mode, children, title, help } = props;
    mode = mode || "bottom";
    align = align || "left";
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


    let valueHtml = value ? <label className={"Text label-text-" + align} title={title}>{value} {helpHtml}</label> : null;
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