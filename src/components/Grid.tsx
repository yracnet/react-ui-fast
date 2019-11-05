import React, { ReactElement } from "react";
import "./Grid.scss";
import Help from "./Help";
import { LabelText } from "./Label";

export interface GridProps {
    className?: string,
    cols: Array<number>,
    colsLg?: Array<number>,
    colsMd?: Array<number>,
    mode?: "bottom" | "top" | "inline",
    children: ReactElement | Array<ReactElement>
}

export const Grid: React.FC<GridProps> = (props) => {
    let mode = props.mode || "top";
    let cols: Array<number> = props.cols;
    let colsMd: Array<number> = Help.parseCols(props.colsMd || cols);
    let colsLg: Array<number> = Help.parseCols(props.colsLg || cols);
    let children: ReactElement[] = Help.parseArray(props.children);
    children = children.map(it => {
        if (it.type === LabelText && mode) {
            it = <LabelText mode={mode} {...it.props} />
        }
        return it;
    });
    let contentHtml = children.map((it, i) => {
        let col = cols[i % cols.length];
        let colMd = colsMd[i % colsMd.length];
        let colLg = colsLg[i % colsLg.length];
        let className = "col-" + col + " col-md-" + colMd + " col-lg-" + colLg;
        return <span key={i} className={className}>{it}</span>
    });
    let className = "Grid row form-" + mode + " no-gutters " + (props.className || "");
    return <span className={className}>{contentHtml}</span>;
}