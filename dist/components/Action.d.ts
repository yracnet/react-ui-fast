import React from 'react';
export interface ActionProps {
    className?: string;
    hide?: boolean;
    children: any | Array<any>;
}
export declare const Action: React.FC<ActionProps>;
