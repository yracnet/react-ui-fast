import React, { CSSProperties } from 'react'
import { FormItem } from '../forms/FormItem';


interface Props {
    hide?: boolean,
    cols?: number[],
    colsSm?: number[],
    colsMd?: number[],
    colsLg?: number[],
    colsXl?: number[],
    gutters?: boolean,
    justify?: 'start' | 'center' | 'end' | 'around' | 'between' | '',
    size?: 'sm' | '' | 'lg',
    className?: string
    style?: CSSProperties
}
export const Grid: React.FC<Props> = (
    {
        hide = false,
        cols = [],
        colsSm = [],
        colsMd = [],
        colsLg = [],
        colsXl = [],
        size = '',
        gutters = false,
        justify = '',
        className = '',
        children = [],
        ...other
    }
) => {
    if (hide === true) {
        return null;
    }
    let _children = gridContentTransform(children, {
        cols,
        colsSm,
        colsMd,
        colsLg,
        colsXl,
        size,
    });
    const _justify = justify ? 'justify-content-' + justify : '';
    const _gutters = gutters ? 'no-gutters' : '';
    return (
        <div className={`row ${_justify} ${_gutters} ${className}`} {...other}>
            {_children}
        </div>
    )
}

const gridContentTransform = (childrenRoot: any, gridProps: any) => {
    let {
        cols,
        colsSm,
        colsMd,
        colsLg,
        colsXl,
        size
    } = gridProps;
    return React.Children.map(childrenRoot, (child: any, ix: number) => {
        let { type, props = {} } = child;
        let { className = '' } = props;
        let classNameCol = `${decodeCols('col-', ix, cols)} ${decodeCols('col-sm-', ix, colsSm)} ${decodeCols('col-md-', ix, colsMd)} ${decodeCols('col-lg-', ix, colsLg)} ${decodeCols('col-xl-', ix, colsXl)}`;
        switch (type) {
            case 'label':
                child = React.cloneElement(child, { ...props, className: `col-form-label col-form-label-${size} ${className}` });
                break;
            case 'input':
            case 'select':
            case 'textarea':
                child = React.cloneElement(child, { ...props, className: `form-control form-control-${size}  ${className}` });
                break;
            case FormItem:
                child = React.cloneElement(child, { ...props, size });
                break;
            case 'div':
                return React.cloneElement(child, { ...props, className: `${classNameCol} ${className}` });
        }
        return <div className={classNameCol}>{child}</div>
    })

}

const decodeCols = function (type: string, index: number, cols: number[]) {
    return cols && cols.length ? type + cols[index % cols.length] : '';
}
