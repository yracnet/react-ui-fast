import React from 'react';
import help from './Help';
import './Panel.scss';
import { Icon } from './Icon';


export interface PanelProps {
    title?: string,
    className?: string,
    hide?: boolean,
    width?: '50' | '60' | '80' | '90',
    icon?: string,
    mode?: 'card' | 'panel' | 'subpanel' | 'modal',
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    children?: any | Array<any>
}

export const Panel: React.FC<PanelProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let width = props.width || 'NONE';
    let mode = props.mode || 'card';
    let variant = props.variant || 'default';
    let children = help.parseArray(props.children);
    let header = children.find(it => it.type === 'header');
    let title = props.title ? <div>{props.title}</div> : children.find(it => it.type === 'title');
    let footer = children.find(it => it.type === 'footer');
    let body = children.filter(it => it !== header && it !== footer && it !== title);
    let headerHtml = header ? <header className={mode + '-header bg-' + variant + ' text-white h6'}><Icon name={props.icon} size="lg" />{header.props.children}</header> : null;
    let titleHtml = title ? <strong className={mode + '-title'}>{title.props.children}</strong> : null;
    let bodyHtml = body ? <div className={mode + '-body'}>{titleHtml}{body}</div> : null;
    let footerHtml = footer ? <footer className={mode + '-footer'}>{footer.props.children}</footer> : null;
    return mode === 'modal' ?
        <div className="modal fade show modal-open">
            <div className="modal-dialog modal-lg">
                <div className={'modal-content w' + width}>
                    {headerHtml}
                    {bodyHtml}
                    {footerHtml}
                </div>
            </div>
            <div className="modal-background"></div>
        </div>
        :
        <div className={mode + ' mb-1 border-' + variant + ' w' + width}>
            {headerHtml}
            {bodyHtml}
            {footerHtml}
        </div>;
}