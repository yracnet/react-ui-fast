"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Icon.scss");
exports.Icon = (props) => {
    if (props.hide === true || !props.name) {
        return null;
    }
    let classWrap = 'Icon pl-1 pr-1 text-' + props.variant + ' shape-' + props.shape + ' shape-' + (props.size || 'normal') + ' border-' + props.variant;
    let className = 'fa fa-' + props.name + ' fa-' + props.size;
    let iconHtml = react_1.default.createElement("i", { className: className });
    return (react_1.default.createElement("span", { className: classWrap },
        iconHtml,
        props.text));
};
