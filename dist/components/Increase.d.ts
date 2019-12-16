import React from 'react';
import './Increase.scss';
export interface IncreaseProps {
    hide?: boolean;
    title?: string;
    className?: string;
    icon?: string;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    values?: Array<any>;
    minimum: number;
    maximum: number;
    refuseMinimum?: string;
    refuseMaximum?: string;
    appendMode: 'one' | 'row';
    confirmAppend?: string;
    confirmRemove?: string;
    onAppend: (index: number) => void;
    onRemove?: (it: any, index: number) => void;
    onContent: (it: any, index: number) => any;
    onAction?: (it: any, index: number) => any;
    children?: any | Array<any>;
}
export declare const Increase: React.FC<IncreaseProps>;
