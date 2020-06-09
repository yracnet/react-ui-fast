import React from 'react';
import help from '../Help';
import './Panel.scss';
import { Icon } from '../commons/Icon';

type TypeCol = undefined | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface PanelProps {
    title?: string,
    className?: string,
    hide?: boolean,
    colXl?: TypeCol,
    colLg?: TypeCol,
    colMd?: TypeCol,
    colSm?: TypeCol,
    col?: TypeCol,
    align?: 'center' | 'left' | 'right',
    icon?: string,
    mode?: 'card' | 'panel' | 'subpanel' | 'modal',
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    children?: any | Array<any>
}

let appendCol = function (col: undefined | number, type: string, className: string) {
    return col ? className + " col-" + type + "-" + col : className;
}

export const Panel: React.FC<PanelProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let mode = props.mode || 'card';
    let variant = props.variant || 'default';
    let children = help.parseArray(props.children);
    let header = children.find(it => it.type === 'header');
    let title = props.title ? <div>{props.title}</div> : children.find(it => it.type === 'title');
    let footer = children.find(it => it.type === 'footer');
    let body = children.filter(it => it !== header && it !== footer && it !== title);
    let headerHtml = header ? <header className={mode + '-header bg-' + variant + ' text-white h6'}><Icon name={props.icon} size="lg" />{header.props.children}</header> : null;
    let titleHtml = title ? <strong className={mode + '-title Title'}>{title.props.children}</strong> : null;
    let bodyHtml = body ? <div className={mode + '-body'}>{titleHtml}{body}</div> : null;
    let footerHtml = footer ? <footer className={mode + '-footer'}>{footer.props.children}</footer> : null;
    let classWidth = props.col ? 'col-' + props.col : '';
    classWidth = appendCol(props.colLg, 'lg', classWidth);
    classWidth = appendCol(props.colMd, 'md', classWidth);
    classWidth = appendCol(props.colSm, 'sm', classWidth);
    classWidth = appendCol(props.colXl, 'xl', classWidth);

    classWidth = props.align ? classWidth + ' col-' + props.align : classWidth;
    classWidth = classWidth + ' ' + props.className;
    return mode === "modal" ?
        <div className="Modal modal fade show modal-open">
            <div className={"modal-dialog modal-lg " + classWidth}>
                <div className="modal-content">
                    {headerHtml}
                    {bodyHtml}
                    {footerHtml}
                </div>
            </div>
            <div className="modal-background"></div>
        </div>
        :
        <div className={'Panel ' + mode + " mb-1 border-" + variant + " " + classWidth}>
            {headerHtml}
            {bodyHtml}
            {footerHtml}
        </div>;
}