import React, { CSSProperties } from 'react'
import './FormItem.css'
import { Icon } from './Icon';
type Props = {
    hide?: boolean,
    label?: string | any,
    title?: string,
    size?: string,
    col?: number,
    helpFeedback?: any,
    invalidFeedback?: any,
    validFeedback?: any,
    children?: any,
    className?: string,
    style?: CSSProperties
}
export const FormItem: React.FC<Props> = (
    {
        hide = false,
        label,
        title,
        size = 'sm',
        col = 2,
        helpFeedback,
        invalidFeedback,
        validFeedback,
        children,
        className = '',
        style
    }
) => {
    if (hide) {
        return null;
    }
    let colLabel = label ? col : 0;
    let colInput = colLabel == 12 ? 12 : (12 - colLabel)
    helpFeedback = helpFeedback ? <div className="help">{helpFeedback}</div> : null;
    invalidFeedback = invalidFeedback ? <div className="invalid-feedback">{invalidFeedback}</div> : null;
    validFeedback = validFeedback ? <div className="valid-feedback">{validFeedback}</div> : null;
    children = itemContentTransform(children, {});
    return (
        <div className={`row ${className}`} title={title} style={style}>
            <label className={` col-${colLabel} col-form-label col-form-label-${size}`}>
                {label}
                {helpFeedback}
            </label>
            <span className={`input-group input-group-${size} col-${colInput} form-check`}>
                {children}
                {invalidFeedback}
                {validFeedback}
            </span>
        </div>
    )
}


const itemContentTransform = (childrenRoot: any, itemProps: any) => {
    let {
        size
    } = itemProps;
    return React.Children.map(childrenRoot, (child: any, ix: number) => {
        let { type, props = {} } = child;
        let { className = '' } = props;
        switch (type) {
            case 'button':
                child = React.cloneElement(child, { ...props, className: `btn btn-${size} btn-outline-secondary ${className}` });
                return <div className="input-group-prepend">{child}</div>
            case 'span':
                child = React.cloneElement(child, { ...props, className: `input-group-text ${className}` });
                return <div className="input-group-prepend">{child}</div>
            case 'input':
            case 'textarea':
                return React.cloneElement(child, { ...props, className: `form-control form-control-${size}  ${className}` });
            case 'select':
                return React.cloneElement(child, { ...props, className: `custom-select form-control form-control-${size}  ${className}` });
            case Icon:
                return React.cloneElement(child, { ...props, append: true });
        }
        return child;
    })

}