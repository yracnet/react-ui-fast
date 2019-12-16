import React, { ReactElement } from "react";
import "./Grid.scss";
export interface GridProps {
    className?: string;
    cols: Array<number>;
    colsSm?: Array<number>;
    colsMd?: Array<number>;
    colsLg?: Array<number>;
    colsXl?: Array<number>;
    narrow?: boolean;
    mode?: "bottom" | "top" | "inline";
    children: ReactElement | Array<ReactElement>;
}
export declare const Grid: React.FC<GridProps>;
