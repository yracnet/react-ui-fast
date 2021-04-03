import React from 'react';
import './TextGroup.css';
declare type Props = {
    label?: string;
    title?: string;
    className?: string;
    mode?: 'top' | 'left' | 'botton';
    children?: any;
};
export declare const TextGroup: React.FC<Props>;
export {};
