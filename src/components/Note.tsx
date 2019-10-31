import React from 'react';
import './Note.scss';
import { Icon } from './Icon';
import Help from './Help';

export interface NoteMessage {
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none',
    icon?: string,
    message: string
}

export interface NoteProps {
    className?: string,
    type: 'note-input' | 'note-a',
    hide?: boolean,
    message?: string | NoteMessage | Array<NoteMessage | string>
}

export const Note: React.FC<NoteProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let messages: NoteMessage[] = Help.parseArray(props.message).map(it => typeof it === 'string' ? { type: 'info', message: it, icon: 'info' } : it);
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