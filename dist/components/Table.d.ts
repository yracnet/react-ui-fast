import React from 'react';
import './Table.scss';
import { PagerValue } from './Pager';
export interface TableConfig {
    column?: string;
    sort?: 'asc' | 'desc' | 'none';
    index?: number;
    size?: number;
}
export interface TableProps {
    pk: string;
    values: Array<any>;
    select?: any | Array<any>;
    onSelect?: (e: any) => void;
    config?: TableConfig;
    onConfig?: (e: TableConfig) => void;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
    hide?: boolean;
    hidePager?: boolean;
    children: any | Array<any>;
}
export declare class Table extends React.PureComponent<TableProps, TableConfig> {
    constructor(props: TableProps);
    onSortColumn(column: string): void;
    onPagerData(value: PagerValue): void;
    onSelectRow(value: any): void;
    render(): React.ReactNode;
}
export interface ColumnProps {
    title: string;
    attr: string;
    align?: "right" | "left" | "center";
    width?: string;
    className?: string;
    onContent?: (o: any, i?: number) => any;
    onFormat?: (o: any) => string;
}
export declare const Column: React.FC<ColumnProps>;
