"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Help_1 = __importDefault(require("./Help"));
require("./Filter.scss");
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
    ],
    equals: [
        { value: 'eq', label: '=' }
    ],
    like: [
        { value: 'like', label: '%' }
    ]
};
exports.FilterTextFactory = {
    createValue: (inputState) => {
        return {
            operator: inputState.operator,
            value: inputState.value
        };
    }
};
exports.FilterText = (props) => {
    if (props.hide === true) {
        return null;
    }
    let filter = props.value || {
        operator: '',
        value: ''
    };
    let inputChangeSingle = function (event) {
        let { name, value } = event.currentTarget;
        let filterValue = Help_1.default.appendAttr(name, value, props.value);
        filterValue.operator = props.option === 'equals' ? 'eq' : 'like';
        onChangeInvoke(filterValue);
    };
    let inputChange = function (event) {
        let { name, value } = event.currentTarget;
        let filterValue = Help_1.default.appendAttr(name, value, props.value);
        onChangeInvoke(filterValue);
    };
    let removeClick = function () {
        onChangeInvoke({ value: '', operator: 'none' });
    };
    let onChangeInvoke = function (filterValue) {
        if (props.onChange) {
            if (props.onConvert) {
                filterValue.value = props.onConvert(filterValue.value);
            }
            props.onChange(Object.assign({ name: props.name }, filterValue));
        }
    };
    let option = props.option || 'string';
    let htmlOptions = OPTION[option].map((it, i) => react_1.default.createElement("option", { key: i, value: it.value }, it.label));
    let htmlLabel = props.label ? react_1.default.createElement("div", { className: "input-group-append" },
        react_1.default.createElement("label", { className: "input-group-text" },
            props.label,
            ":")) : null;
    let htmlInput = null;
    let htmlButton = null;
    let className = 'custom-select';
    if (filter && filter.operator && filter.operator !== 'none') {
        htmlButton = react_1.default.createElement("button", { className: "btn btn-sm  btn-danger", onClick: removeClick }, " X");
        if (filter.operator !== 'isNull' && filter.operator !== 'notNull') {
            className = className + ' Option';
            let valueText = filter.value ? filter.value.toString() : '';
            if (props.onFormat) {
                valueText = props.onFormat(filter.value);
            }
            let type = option in ['all', 'equals', 'like', 'string'] ? 'text' : option;
            let ph = type === 'date' ? 'dd/MM/yyyy' : '';
            htmlInput = react_1.default.createElement("input", { className: "form-control", value: valueText, type: type, placeholder: ph, name: "value", onChange: inputChange });
        }
    }
    else if (htmlOptions.length === 1) {
        let valueText = filter.value ? filter.value.toString() : '';
        if (props.onFormat) {
            valueText = props.onFormat(filter.value);
        }
        htmlInput = react_1.default.createElement("input", { className: "form-control", value: valueText, name: "value", onChange: inputChangeSingle });
    }
    if (htmlOptions.length === 1) {
        className = className + ' Hiden';
    }
    return (react_1.default.createElement("div", { className: "Filter input-group input-group-sm input-filter" },
        htmlLabel,
        react_1.default.createElement("select", { className: className, value: filter.operator, name: "operator", onChange: inputChange }, htmlOptions),
        htmlInput,
        htmlButton));
};
