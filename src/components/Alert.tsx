import React from 'react';
import help from './Help';
import './Alert.scss';
import { Icon } from './Icon';

export interface AlertProps {
    variant: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    message: string | Array<string>,
    icon?: string,
    cause?: string | Array<string>
}

export const Alert: React.FC<AlertProps> = (props) => {
    let messagesHtml = <span className="Alert-Messages">{help.parseArray(props.message).map(it => <p>{it}</p>)}</span>;
    let causesHtml = props.cause ? <ul className="Alert-Causes">{help.parseArray(props.cause).map(it => <li>{it}</li>)}</ul> : null;
    let childrenHtml = props.children ? <span className="Alert-Children">{props.children}</span> : null;
    return (
        <div className={'Alert alert alert-' + (props.variant || 'default')}>
            <Icon name={props.icon} size="2x" />
            {messagesHtml}
            {causesHtml}
            {childrenHtml}
        </div>
    );
}