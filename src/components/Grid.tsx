import React, { ReactElement } from "react";
import help from "./Help";
import { LabelText } from "./Label";

export interface GridProps {
    className?: string,
    cols: string | Array<number>,
    mdcols?: string | Array<number>,
    mode?: "bottom" | "top",
    children: ReactElement | Array<ReactElement>
}

export const Grid: React.FC<GridProps> = (props) => {
    let mode = props.mode;
    let cols: Array<number> = help.parseCols(props.cols);
    let mdcols: Array<number> = help.parseCols(props.mdcols || cols);
    let children: ReactElement[] = help.parseArray(props.children);
    children = children.map(it => {
        if (it.type === LabelText && mode) {
            it = <LabelText mode={mode} {...it.props} />
        }
        return it;
    });
    let contentHtml = children.map((it, i) => {
        let col = cols[i % cols.length];
        let mdcol = mdcols[i % mdcols.length];
        let className = "col-" + col + " col-md-" + mdcol;
        return <span key={i} className={className}>{it}</span>
    });
    let className = "row form-inline " + (props.className || "");
    return <span className={className}>{contentHtml}</span>;
}