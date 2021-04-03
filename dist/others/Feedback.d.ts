import React from 'react';
declare type Value = {
    type: 'info' | 'error' | 'warning' | 'success' | '';
    message: string;
};
interface Props extends React.HTMLAttributes<HTMLDivElement> {
    hide?: boolean;
    value?: Value;
    type?: 'info' | 'error' | 'warning' | 'success' | '';
    message?: string;
    className?: string;
    icon?: string;
    color?: string;
    children?: any;
}
export declare const Feedback: React.FC<Props>;
export {};
