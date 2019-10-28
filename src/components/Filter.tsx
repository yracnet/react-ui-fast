import React from 'react';
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
    //onConvert?: (value: any) => any,
    //onFormat?: (value: any) => string,
    label?: string,
    hide?: boolean
}

export class FilterText extends React.PureComponent<FilterTextProps> {
    constructor(props: FilterTextProps) {
        super(props);
        this.state = {
            operator: '',
            value: ''
        };
        this.inputChange = this.inputChange.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.onChangeInvoke = this.onChangeInvoke.bind(this);
    }

    inputChange(event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
        let { name, value } = event.currentTarget;
        let state = { [name]: value };
        this.onChangeInvoke(state);
    }

    removeClick() {
        this.onChangeInvoke({ value: '', operator: 'none' });
    }

    onChangeInvoke(state: FilterTextValue) {
        this.setState(state, () => {
            let { onChange, name } = this.props;
            onChange(name, this.state);
        });
    }

    render(): React.ReactNode {
        let { value, label, hide, option } = this.props;
        if (hide === true) {
            return null;
        }
        let filter: FilterTextValue = value || {
            operator: '',
            value: ''
        };
        option = option || 'string';
        let htmlOptions = OPTION[option].map((it, i) => <option key={i} value={it.value} >{it.label}</option>);
        let htmlLabel = label ? <div className="input-group-append"><label className="input-group-text">{label}:</label></div> : null;
        let htmlInput = null;
        let htmlButton = null;
        let className = 'custom-select';
        if (filter && filter.operator && filter.operator !== 'none') {
            htmlButton = <button className="btn btn-sm  btn-danger" onClick={this.removeClick}> X</button>;
            if (filter.operator !== 'isNull' && filter.operator !== 'notNull') {
                className = className + ' col-3';
                htmlInput = <input className="form-control" defaultValue={filter.value} name="value" onChange={this.inputChange} />;
            }
        }
        return (
            <div className="input-group input-group-sm input-filter">
                {htmlLabel}
                <select className={className} value={filter.operator} name="operator" onChange={this.inputChange}>
                    {htmlOptions}
                </select>
                {htmlInput}
                {htmlButton}
            </div>
        );
    };


};