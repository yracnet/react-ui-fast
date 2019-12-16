"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Help_1 = __importDefault(require("./Help"));
require("./Table.scss");
const Icon_1 = require("./Icon");
const Pager_1 = require("./Pager");
class Table extends react_1.default.PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
        this.onSelectRow = this.onSelectRow.bind(this);
        this.onPagerData = this.onPagerData.bind(this);
    }
    onSortColumn(column) {
        let { onConfig: onSort } = this.props;
        if (onSort) {
            let sort = this.state.sort;
            let configValue = {
                column,
                sort: sort === 'none' ? 'asc' : sort === 'asc' ? 'desc' : 'none'
            };
            this.setState(configValue);
            onSort(configValue);
        }
    }
    onPagerData(value) {
        let { onConfig } = this.props;
        if (onConfig) {
            let configValue = {
                index: value.index,
                size: value.size,
            };
            this.setState(configValue);
            onConfig(configValue);
        }
    }
    onSelectRow(value) {
        let { onSelect } = this.props;
        if (onSelect) {
            onSelect(value);
        }
    }
    render() {
        let { hide, values, pk, variant, select, config, onConfig, hidePager } = this.props;
        if (hide === true) {
            return null;
        }
        let pagerValue = Object.assign({ index: 1, size: 10 }, config);
        let children = Help_1.default.parseArray(this.props.children);
        let columns = children.map(it => it.props);
        let state = this.state;
        let headRows = columns.map((it, i) => {
            let { align, title, attr, width } = it;
            let className = 'col-header text-' + (align || 'left');
            let sort = !onConfig ? 'none' : attr !== state.column || state.sort === 'none' ? 'sort' : state.sort === 'desc' ? 'sort-down' : 'sort-up';
            return (react_1.default.createElement("th", { key: i, style: { width: width + '%' }, className: className },
                react_1.default.createElement("span", { className: "Sort", onClick: o => this.onSortColumn(it.attr) },
                    react_1.default.createElement(Icon_1.Icon, { name: sort }),
                    title)));
        });
        let selectPks = Help_1.default.parseArray(select).map(it => it[pk]);
        let dataRows = values.map((valueData, i) => {
            let valuePk = valueData[pk];
            let dataRow = columns.map((it, j) => {
                let { attr, align, title, onFormat, onContent, className } = it;
                if (onContent) {
                    let content = onContent(valueData, j);
                    let classNameTD = 'col-data text-' + (align || 'left') + ' ' + className;
                    return react_1.default.createElement("td", { key: i + '-' + j, className: classNameTD, title: title }, content);
                }
                else {
                    let valueAttr = valueData[attr];
                    valueAttr = onFormat ? onFormat(valueAttr) : valueAttr;
                    let classNameTD = 'col-data text-' + (align || 'left') + ' ' + className;
                    return react_1.default.createElement("td", { key: i + '-' + j, className: classNameTD, title: title + ': ' + valueAttr }, valueAttr);
                }
            });
            let className = selectPks.includes(valuePk) ? 'table-active row-select' : '';
            return react_1.default.createElement("tr", { key: i, className: className, onClick: o => this.onSelectRow(valueData) }, dataRow);
        });
        let diff = pagerValue.size - dataRows.length;
        let emptyRows = [];
        while (0 < --diff) {
            emptyRows.push(react_1.default.createElement("tr", { key: 'row-empty-' + diff },
                react_1.default.createElement("td", { colSpan: 20 }, "\u00A0")));
        }
        dataRows = dataRows.concat(emptyRows);
        let className = 'table table-striped table-sm table-hover table-' + variant;
        return (react_1.default.createElement("div", { className: "table-responsive-sm Table" },
            react_1.default.createElement("table", { className: className },
                react_1.default.createElement("thead", { className: 'thead-dark' },
                    react_1.default.createElement("tr", null, headRows)),
                react_1.default.createElement("tbody", null, dataRows),
                react_1.default.createElement("tfoot", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("td", { colSpan: 20, className: "Pager" },
                            react_1.default.createElement(Pager_1.Pager, { value: pagerValue, onPager: this.onPagerData, size: "sm", hide: hidePager })))))));
    }
    ;
}
exports.Table = Table;
;
exports.Column = () => {
    return null;
};
