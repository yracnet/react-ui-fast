import React from 'react';
import help from './Help';

export interface PopoverProps {
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    hide?: boolean,
    title?: string,
    arrow?: 'auto' | 'top' | 'left' | 'right' | 'bottom',
    style?: any,
    for?: string | any,
    children?: any | Array<any>
}

export const Popover: React.FC<PopoverProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let arrow = props.arrow || 'top';
    let variant = props.variant || 'default';
    let inlineStyle = props.style;
    let children = help.parseArray(props.children);
    let header = children.find(it => it.type === 'header');
    let title = props.title ? <div>{props.title}</div> : children.find(it => it.type === 'title');
    let footer = children.find(it => it.type === 'footer');
    let body = children.filter(it => it !== header && it !== footer && it !== title);

    let headerHtml = header ? <header className={'popover-header bg-' + variant + ' text-white'}>{header.props.children}</header> : null;
    let titleHtml = title ? <strong className={'popover-title'}>{title.props.children}</strong> : null;
    let bodyHtml = body ? <div className={'popover-body'}>{titleHtml}{body}</div> : null;
    let footerHtml = footer ? <footer className={'popover-footer bg-' + variant}>{footer.props.children}</footer> : null;
    let id = help.generateId('popover_');
    let onPositionRelative = function () {
        let popover = document.getElementById(id);
        if (!popover) {
            console.warn('Popover element ' + id + ' not detect reference');
            return false;
        }
        let type = typeof props.for;
        let element = type === 'string' ? document.getElementById(props.for) : type === 'object' ? props.for : popover.parentElement;
        if (!element) {
            console.log('Popover element ' + id + ' not detect reference');
            return false;
        }
        arrow = help.popoverAling(arrow, element, popover);
        popover.className = 'popover fade show bs-popover-' + arrow;
    }
    setTimeout(onPositionRelative, 25);

    return (
        <div className="popover fade hide bs-popover-top" style={inlineStyle} id={id}>
            <div className="arrow"></div>
            {headerHtml}
            {bodyHtml}
            {footerHtml}
        </div>
    );
}