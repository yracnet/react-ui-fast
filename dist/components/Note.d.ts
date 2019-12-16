import React from 'react';
import './Note.scss';
export interface NoteMessage {
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'none';
    icon?: string;
    message: string;
}
export interface NoteProps {
    className?: string;
    type: 'note-input' | 'note-a';
    hide?: boolean;
    message?: string | NoteMessage | Array<NoteMessage | string>;
}
export declare const Note: React.FC<NoteProps>;
