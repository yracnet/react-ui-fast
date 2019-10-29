import React from 'react';
import Help from './Help';
const OPTION = {
    number: [
        { value: '', label: '' },
        { value: 'eq', label: '=' },
        { value: 'neq', label: '!=' },
        { value: 'lt', label: '<' },
        { value: 'gt', label: '>' },
        { value: 'lte', label: '<=' },
        { value: 'gte', label: '>=' }
    ],
    string: [
        { value: '', label: '' },
        { value: 'eq', label: '=' },
        { value: 'neq', label: '!=' },
        { value: 'like', label: '%' },
        { value: 'start', label: 'inicia' },
        { value: 'end', label: 'termina' },
        { value: 'isNull', label: 'Es NULL' },
        { value: 'notNull', label: 'No es NULL' },
    ],
    date: [
        { value: '', label: '' },
        { value: 'eq', label: '=' },
        { value: 'neq', label: '!=' },
        { value: 'lt', label: '<' },
        { value: 'gt', label: '>' },
        { value: 'lte', label: '<=' },
        { value: 'gte', label: '>=' },
        { value: 'isNull', label: 'Es NULL' },
        { value: 'notNull', label: 'No es NULL' },
    ],
    all: [
        { value: '', label: '' },
        { value: 'eq', label: '=' },
        { value: 'neq', label: '!=' },
        { value: 'lt', label: '<' },
        { value: 'gt', label: '>' },
        { value: 'lte', label: '<=' },
        { value: 'gte', label: '>=' },
        { value: 'like', label: '%' },
        { value: 'start', label: 'inicia' },
        { value: 'end', label: 'termina' },
        { value: 'isNull', label: 'Es NULL' },
        { value: 'notNull', label: 'No es NULL' }
    ]
};


export interface FilterTextValue {
    operator?: string,
    value?: any
}

export interface FilterTextProps {
    name: string,
    value?: FilterTextValue,
    onChange: (name: string, value: FilterTextValue) => void,
    option?: 'all' | 'number' | 'string' | 'date',
    onConvert?: (value?: string) => any,
    onFormat?: (value?: any) => string,
    label?: string,
    hide?: boolean
}

export const FilterText: React.FC<FilterTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let filter: FilterTextValue = props.value || {
        operator: '',
        value: ''
    };
    let inputChange = function (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
        let { name, value } = event.currentTarget;
        let filterValue = Help.appendAttr(name, value, props.value);
        onChangeInvoke(filterValue);
    }
    let removeClick = function () {
        onChangeInvoke({ value: '', operator: 'none' });
    }
    let onChangeInvoke = function (filterValue: FilterTextValue) {
        if (props.onChange) {
            if (props.onConvert) {
                filterValue.value = props.onConvert(filterValue.value);
            }
            props.onChange(props.name, filterValue);
        }
    }
    let option = props.option || 'string';
    let htmlOptions = OPTION[option].map((it, i) => <option key={i} value={it.value} >{it.label}</option>);
    let htmlLabel = props.label ? <div className="input-group-append"><label className="input-group-text">{props.label}:</label></div> : null;
    let htmlInput = null;
    let htmlButton = null;
    let className = 'custom-select';
    if (filter && filter.operator && filter.operator !== 'none') {
        htmlButton = <button className="btn btn-sm  btn-danger" onClick={removeClick}> X</button>;
        if (filter.operator !== 'isNull' && filter.operator !== 'notNull') {
            className = className + ' col-3';
            let valueText = filter.value ? filter.value.toString() : '';
            if (props.onFormat) {
                valueText = props.onFormat(filter.value);
            }
            htmlInput = <input className="form-control" value={valueText} name="value" onChange={inputChange} />;
        }
    }
    return (
        <div className="input-group input-group-sm input-filter">
            {htmlLabel}
            <select className={className} value={filter.operator} name="operator" onChange={inputChange}>
                {htmlOptions}
            </select>
            {htmlInput}
            {htmlButton}
        </div>
    );
}