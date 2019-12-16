import React from 'react';
import "./Filter.scss";
export declare const FilterTextFactory: {
    createValue: (inputState: FilterTextState) => FilterTextValue;
};
export interface FilterTextValue {
    operator?: string;
    value?: any;
}
export interface FilterTextState {
    name: string;
    operator?: string;
    value?: any;
}
export declare type FnFilterTextChange = (state: FilterTextState) => void;
export interface FilterTextProps {
    name: string;
    value?: FilterTextValue;
    onChange?: FnFilterTextChange;
    option?: 'all' | 'number' | 'string' | 'date' | 'equals' | 'like';
    onConvert?: (value?: string) => any;
    onFormat?: (value?: any) => string;
    label?: string;
    hide?: boolean;
}
export declare const FilterText: React.FC<FilterTextProps>;
