import React, { ReactElement } from "react";
import "./Grid.scss";
import Help from "./Help";
import { LabelText } from "./Label";

export interface GridProps {
    className?: string,
    cols: Array<number>,
    colsSm?: Array<number>,
    colsMd?: Array<number>,
    colsLg?: Array<number>,
    colsXl?: Array<number>,
    narrow?: boolean,
    mode?: "bottom" | "top" | "inline",
    children: ReactElement | Array<ReactElement>
}

let appendCol = function (cols: undefined | Array<number>, index: number, type: string, className: string) {
    return cols ? className + " col-" + type + "-" + cols[index % cols.length] : className;
}

export const Grid: React.FC<GridProps> = (props) => {
    let mode = props.mode || "top";
    let { cols, colsSm, colsMd, colsLg, colsXl } = props;
    let children: ReactElement[] = Help.parseArray(props.children);
    children = children.map(it => {
        if (it.type === LabelText && mode) {
            it = <LabelText mode={mode} {...it.props} />
        }
        return it;
    });

    let contentHtml = children.map((it, i) => {
        let className = "col-" + cols[i % cols.length];
        className = appendCol(colsSm, i, 'sm', className);
        className = appendCol(colsMd, i, 'md', className);
        className = appendCol(colsLg, i, 'lg', className);
        className = appendCol(colsXl, i, 'xl', className);
        return <span key={i} className={className}>{it}</span>
    });
    let className = "Grid row form-" + mode + " " + (props.narrow ? "no-gutters" : " ") + " " + (props.className || "");
    return <span className={className}>{contentHtml}</span>;
}