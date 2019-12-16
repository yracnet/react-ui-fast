"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Help_1 = __importDefault(require("./Help"));
require("./Panel.scss");
const Icon_1 = require("./Icon");
let appendCol = function (col, type, className) {
    return col ? className + " col-" + type + "-" + col : className;
};
exports.Panel = (props) => {
    if (props.hide === true) {
        return null;
    }
    let mode = props.mode || 'card';
    let variant = props.variant || 'default';
    let children = Help_1.default.parseArray(props.children);
    let header = children.find(it => it.type === 'header');
    let title = props.title ? react_1.default.createElement("div", null, props.title) : children.find(it => it.type === 'title');
    let footer = children.find(it => it.type === 'footer');
    let body = children.filter(it => it !== header && it !== footer && it !== title);
    let headerHtml = header ? react_1.default.createElement("header", { className: mode + '-header bg-' + variant + ' text-white h6' },
        react_1.default.createElement(Icon_1.Icon, { name: props.icon, size: "lg" }),
        header.props.children) : null;
    let titleHtml = title ? react_1.default.createElement("strong", { className: mode + '-title Title' }, title.props.children) : null;
    let bodyHtml = body ? react_1.default.createElement("div", { className: mode + '-body' },
        titleHtml,
        body) : null;
    let footerHtml = footer ? react_1.default.createElement("footer", { className: mode + '-footer' }, footer.props.children) : null;
    let classWidth = props.col ? 'col-' + props.col : '';
    classWidth = appendCol(props.colLg, 'lg', classWidth);
    classWidth = appendCol(props.colMd, 'md', classWidth);
    classWidth = appendCol(props.colSm, 'sm', classWidth);
    classWidth = appendCol(props.colXl, 'xl', classWidth);
    classWidth = props.align ? classWidth + ' col-' + props.align : classWidth;
    classWidth = classWidth + ' ' + props.className;
    return mode === "modal" ?
        react_1.default.createElement("div", { className: "Modal modal fade show modal-open" },
            react_1.default.createElement("div", { className: "modal-dialog modal-lg " + classWidth },
                react_1.default.createElement("div", { className: "modal-content" },
                    headerHtml,
                    bodyHtml,
                    footerHtml)),
            react_1.default.createElement("div", { className: "modal-background" }))
        :
            react_1.default.createElement("div", { className: 'Panel ' + mode + " mb-1 border-" + variant + " " + classWidth },
                headerHtml,
                bodyHtml,
                footerHtml);
};
