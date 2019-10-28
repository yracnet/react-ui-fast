import React from 'react';
import help from './Help';

export interface GridProps {
    className?: string,
    cols: string | Array<number>,
    mdcols?: string | Array<number>,
    children: any | Array<any>
}

export const Grid: React.FC<GridProps> = (props) => {
    let cols: Array<number> = help.parseCols(props.cols);
    let mdcols: Array<number> = help.parseCols(props.mdcols || cols);
    let children = help.parseArray(props.children);
    let contentHtml = children.map((it, i) => {
        let col = cols[i % cols.length];
        let mdcol = mdcols[i % mdcols.length];
        let className = 'col-' + col + ' col-md-' + mdcol;
        return <span key={i} className={className}>{it}</span>
    });
    let className = 'row form-inline ' + (props.className || '');
    return <span className={className}>{contentHtml}</span>;
}