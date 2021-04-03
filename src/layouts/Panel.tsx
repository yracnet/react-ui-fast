import React, { CSSProperties } from 'react'
import { Grid } from './Grid';

interface Props {
    hide?: boolean,
    title?: string,
    align?: 'center' | 'left' | 'right',
    mode?: 'card' | 'panel' | 'subpanel' | 'modal',
    color?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    className?: string,
    style?: CSSProperties
}

const mainContentTransform = (childrenRoot: any, panelProps: any) => {
    let { mode } = panelProps;
    return React.Children.map(childrenRoot, (child: any) => {
        let { type, props = {} } = child;
        let { className = '' } = props;

        switch (type) {
            case 'title':
                return React.cloneElement({ ...child, type: 'h5' }, { ...props, className: `${mode}-title ${className}` });
            case 'h5':
                return React.cloneElement(child, { ...props, className: `${mode}-title ${className}` });
            case 'h6':
                return React.cloneElement(child, { ...props, className: `${mode}-subtitle ${className}` });
            case 'p':
                return React.cloneElement(child, { ...props, className: `${mode}-text ${className}` });
            case 'a':
                return React.cloneElement(child, { ...props, className: `${mode}-link ${className}` });
        }
        return child;
    })
}

const panelContentTransform = (childrenRoot: any, panelProps: any) => {
    let { mode, color, title } = panelProps;
    return React.Children.map(childrenRoot, (child: any) => {
        let { type, props = {} } = child;
        let { className = '' } = props;

        let _children, _title;
        switch (type) {
            case 'header':
                return React.cloneElement({ ...child, type: 'div' }, { ...props, className: `${mode}-header font-weight-bold bg-${color} ${className}` });
            case 'footer':
                return React.cloneElement({ ...child, type: 'div' }, { ...props, className: `${mode}-footer ${className}` });
            case 'main':
                _children = mainContentTransform(child.props.children, panelProps);
                _title = title ? <h4 className={`${mode}-title`}>{title}</h4> : null;
                return React.cloneElement({ ...child, type: 'div' }, { ...props, className: `${mode}-body ${className}` }, _title, _children);
            case Grid:
                _title = title ? <h4 className={`${mode}-title`}>{title}</h4> : null;
                return <div className={`${mode}-body`} >{_title}{child}</div>
        }
        return child;
    })

}

export const Panel: React.FC<Props> = (props) => {
    let {
        hide = false,
        title = '',
        align = 'center',
        mode = 'card',
        color = 'primary',
        className = '',
        children = [],
        ...others
    } = props;
    if (hide === true) {
        return null;
    }
    let _children = panelContentTransform(children, { mode, color, title });
    return (
        <div className={`${mode} border-${color} ${className}`} {...others}>
            {_children}
        </div>
    )
}