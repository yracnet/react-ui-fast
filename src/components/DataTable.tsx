import React from 'react';
import help from './Help';
import './DataTable.scss';
import { Icon } from './Icon';
import { Pager, PagerValue } from './Pager';

export interface ConfigValue {
    column?: string,
    sort?: 'asc' | 'desc' | 'none',
    index?: number,
    size?: number
}

export interface TableProps {
    pk: string,
    values: Array<any>,
    select?: any | Array<any>,
    onSelect?: (e: any) => void,
    config?: ConfigValue,
    onConfig?: (e: ConfigValue) => void,
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    hide?: boolean,
    children: any | Array<any>
}

export class DataTable extends React.PureComponent<TableProps, ConfigValue> {
    constructor(props: TableProps) {
        super(props);
        this.state = {};
        this.onSelectRow = this.onSelectRow.bind(this);
        this.onPagerData = this.onPagerData.bind(this);
    }

    onSortColumn(column: string) {
        let { onConfig: onSort } = this.props;
        if (onSort) {
            let sort = this.state.sort;
            let configValue: ConfigValue = {
                column,
                sort: sort === 'none' ? 'asc' : sort === 'asc' ? 'desc' : 'none'
            };
            this.setState(configValue);
            onSort(configValue);
        }
    }

    onPagerData(value: PagerValue) {
        let { onConfig } = this.props;
        if (onConfig) {
            let configValue: ConfigValue = {
                index: value.index,
                size: value.size,
            };
            this.setState(configValue);
            onConfig(configValue);
        }
    }

    onSelectRow(value: any) {
        let { onSelect } = this.props;
        if (onSelect) {
            onSelect(value);
        }
    }

    render(): React.ReactNode {
        let { hide, values, pk, variant, select, config, onConfig } = this.props;
        if (hide === true) {
            return null;
        }
        let pagerValue: PagerValue = Object.assign({ index: 1, size: 10 }, config);
        let children: Array<any> = help.parseArray(this.props.children);
        let columns: Array<ColumnProps> = children.map(it => it.props);
        let state = this.state;

        let headRows = columns.map((it, i) => {
            let { align, title, attr, width } = it;
            let className = 'col-header text-' + (align || 'left');
            let sort = !onConfig ? 'none' : attr !== state.column || state.sort === 'none' ? 'sort' : state.sort === 'desc' ? 'sort-down' : 'sort-up';
            return (
                <th key={i}
                    style={{ width: width + '%' }}
                    className={className}>
                    <span className="Sort"
                        onClick={o => this.onSortColumn(it.attr)}>
                        <Icon name={sort} />
                        {title}
                    </span>
                </th>
            );
        });
        let selectPks = help.parseArray(select).map(it => it[pk]);


        let dataRows = values.map((valueData, i) => {
            let valuePk = valueData[pk];
            let dataRow = columns.map((it, j) => {
                let { attr, align, title, onFormat, className } = it;
                let valueAttr = valueData[attr];
                valueAttr = onFormat ? onFormat(valueAttr) : valueAttr;
                let classNameTD = 'col-data text-' + (align || 'left') + ' ' + className;
                return <td key={i + '-' + j} className={classNameTD} title={title + ': ' + valueAttr}>{valueAttr}</td>
            });
            let className = selectPks.includes(valuePk) ? 'table-active row-select' : '';
            return <tr key={i} className={className} onClick={o => this.onSelectRow(valueData)} >{dataRow}</tr>;
        });

        let diff = pagerValue.size - dataRows.length;
        let emptyRows: Array<any> = [];
        while (0 < --diff) {
            //http://localhost:3000/
            emptyRows.push(<tr key={'row-empty-' + diff}><td colSpan={20}>&nbsp;</td></tr>);
        }
        dataRows = dataRows.concat(emptyRows);

        let className = 'table table-striped table-sm table-hover table-' + variant;
        return (
            <div className="table-responsive-sm DataTable">
                <table className={className}>
                    <thead className='thead-dark'>
                        <tr>{headRows}</tr>
                    </thead>
                    <tbody>
                        {dataRows}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={20} className="Pager">
                                <Pager value={pagerValue} onPager={this.onPagerData} size="sm" />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        );
    };


};

export interface ColumnProps {
    title: string,
    attr: string,
    align?: "right" | "left" | "center",
    width?: string,
    className?: string,
    onFormat?: (o: any) => string
}

export const Column: React.FC<ColumnProps> = () => {
    return null;
}