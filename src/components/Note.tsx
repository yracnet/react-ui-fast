import React from 'react';
import './Note.scss';
import { Icon } from './Icon';
import Help from './Help';

export interface Message {
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    icon?: string,
    message: string
}

export interface NoteProps {
    className?: string,
    type: 'note-input' | 'note-a',
    hide?: boolean,
    messages?: string | Message | Array<Message | string>
}

export const Note: React.FC<NoteProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let messages = Help.parseArray(props.messages).map(it => typeof it === 'string' ? { type: 'info', message: it } : it);
    if (!messages.length) {
        return null;
    }
    let { className, type } = props;
    let notesHtml = messages.map((it, i) =>
        <p key={i} className={'alert alert-' + it.type}>
            <Icon name={it.icon} />
            {it.message}
        </p>
    );
    className = type + ' ' + (className || '');
    return <span className={className}>{notesHtml}</span>;
}