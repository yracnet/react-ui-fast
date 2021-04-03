import React, { CSSProperties } from 'react';
interface Props {
    hide?: boolean;
    cols?: number[];
    colsSm?: number[];
    colsMd?: number[];
    colsLg?: number[];
    colsXl?: number[];
    gutters?: boolean;
    justify?: 'start' | 'center' | 'end' | 'around' | 'between' | '';
    size?: 'sm' | '' | 'lg';
    className?: string;
    style?: CSSProperties;
}
export declare const Grid: React.FC<Props>;
export {};
