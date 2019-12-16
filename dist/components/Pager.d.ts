import React from 'react';
export interface PagerValue {
    index: number;
    size: number;
}
export interface PagerProps {
    value?: PagerValue;
    steps?: Array<number>;
    hide?: boolean;
    limit?: number;
    margin?: number;
    onPager?: (value: PagerValue) => void;
    size?: '' | 'lg' | 'sm';
}
export declare const Pager: React.FC<PagerProps>;
