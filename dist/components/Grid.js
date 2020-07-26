"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Grid.scss");
const Help_1 = __importDefault(require("./Help"));
const Label_1 = require("./Label");
let appendCol = function (cols, index, type, className) {
    return cols ? className + " col-" + type + "-" + cols[index % cols.length] : className;
};
exports.Grid = (props) => {
    if (props.hide === true) {
        return null;
    }
    let mode = props.mode || "top";
    let { cols, colsSm, colsMd, colsLg, colsXl } = props;
    let children = Help_1.default.parseArray(props.children);
    children = children.map(it => {
        if (it.type === Label_1.LabelText && mode) {
            it = react_1.default.createElement(Label_1.LabelText, Object.assign({ mode: mode }, it.props));
        }
        return it;
    });
    let contentHtml = children.map((it, i) => {
        let className = "col-" + cols[i % cols.length];
        className = appendCol(colsSm, i, 'sm', className);
        className = appendCol(colsMd, i, 'md', className);
        className = appendCol(colsLg, i, 'lg', className);
        className = appendCol(colsXl, i, 'xl', className);
        return react_1.default.createElement("span", { key: i, className: className }, it);
    });
    let className = "Grid row form-" + mode + " " + (props.narrow ? "no-gutters" : " ") + " " + (props.className || "");
    return react_1.default.createElement("span", { className: className }, contentHtml);
};
