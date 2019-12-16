"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Help_1 = __importDefault(require("./Help"));
exports.Popover = (props) => {
    if (props.hide === true) {
        return null;
    }
    let arrow = props.arrow || 'top';
    let variant = props.variant || 'default';
    let inlineStyle = props.style;
    let children = Help_1.default.parseArray(props.children);
    let header = children.find(it => it.type === 'header');
    let title = props.title ? react_1.default.createElement("div", null, props.title) : children.find(it => it.type === 'title');
    let footer = children.find(it => it.type === 'footer');
    let body = children.filter(it => it !== header && it !== footer && it !== title);
    let headerHtml = header ? react_1.default.createElement("header", { className: 'popover-header bg-' + variant + ' text-white' }, header.props.children) : null;
    let titleHtml = title ? react_1.default.createElement("strong", { className: 'popover-title' }, title.props.children) : null;
    let bodyHtml = body ? react_1.default.createElement("div", { className: 'popover-body' },
        titleHtml,
        body) : null;
    let footerHtml = footer ? react_1.default.createElement("footer", { className: 'popover-footer bg-' + variant }, footer.props.children) : null;
    let id = Help_1.default.generateId('popover_');
    let onPositionRelative = function () {
        let popover = document.getElementById(id);
        if (!popover) {
            console.warn('Popover element ' + id + ' not detect reference');
            return false;
        }
        let type = typeof props.for;
        let element = type === 'string' ? document.getElementById(props.for) : type === 'object' ? props.for : popover.parentElement;
        if (!element) {
            console.log('Popover element ' + id + ' not detect reference');
            return false;
        }
        arrow = Help_1.default.popoverAling(arrow, element, popover);
        popover.className = 'popover fade show bs-popover-' + arrow;
    };
    setTimeout(onPositionRelative, 25);
    return (react_1.default.createElement("div", { className: "popover fade hide bs-popover-top", style: inlineStyle, id: id },
        react_1.default.createElement("div", { className: "arrow" }),
        headerHtml,
        bodyHtml,
        footerHtml));
};
