"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Help_1 = __importDefault(require("./Help"));
const Button_1 = require("./Button");
const Icon_1 = require("./Icon");
require("./Increase.scss");
exports.Increase = (props) => {
    if (props.hide === true) {
        return null;
    }
    let onAppendInvoke = function (i) {
        props.onAppend(i);
    };
    let onRemoveInvoke = function (it, i) {
        if (props.onRemove) {
            props.onRemove(it, i);
        }
    };
    let valuesLength = props.values ? props.values.length : 0;
    let refuseMaximum = valuesLength >= props.maximum ? props.refuseMaximum || 'No puede adjuntar mas de ' + props.maximum + ' elementos' : undefined;
    let refuseMinimum = valuesLength <= props.minimum ? props.refuseMinimum || 'No puede haber menos de ' + props.minimum + ' elementos' : undefined;
    let contentHtml = Help_1.default.parseArray(props.values)
        .map((it, i) => react_1.default.createElement("li", { key: i, className: "list-group-item Increase-Item" },
        react_1.default.createElement("div", { className: "Increase-Action Animate" },
            props.onAction ? props.onAction(it, i) : null,
            react_1.default.createElement(Button_1.Button, { name: "append", icon: "plus", onClick: e => onAppendInvoke(i), hide: props.appendMode === 'one', variant: "success", confirm: props.confirmAppend, refuse: refuseMaximum }),
            react_1.default.createElement(Button_1.Button, { name: "remove", icon: "trash", onClick: e => onRemoveInvoke(it, i), hide: !props.onRemove, variant: "danger", confirm: props.confirmRemove, refuse: refuseMinimum })),
        react_1.default.createElement("div", { className: "Increase-Content" }, props.onContent(it, i))));
    let appendDefaultHtml = contentHtml.length === 0 || props.appendMode === 'one' ?
        react_1.default.createElement("div", { className: "Increase-Action" },
            react_1.default.createElement(Button_1.Button, { name: "append", icon: "plus", onClick: e => onAppendInvoke(0), variant: "success", refuse: refuseMaximum }))
        : null;
    let variant = props.variant || 'default';
    let children = Help_1.default.parseArray(props.children);
    let header = children.find(it => it.type === 'header');
    let title = props.title ? react_1.default.createElement("div", null, props.title) : children.find(it => it.type === 'title');
    let body = children.filter(it => it !== header && it !== title);
    let headerHtml = header ? react_1.default.createElement("header", { className: 'card-header bg-' + variant + ' text-white h6' },
        react_1.default.createElement(Icon_1.Icon, { name: props.icon, size: "lg" }),
        header.props.children) : null;
    let titleHtml = title ? react_1.default.createElement("strong", { className: 'card-title' },
        react_1.default.createElement(Icon_1.Icon, { name: props.icon, size: "lg", hide: !!headerHtml }),
        "   ",
        title.props.children,
        " ") : null;
    let bodyHtml = titleHtml || appendDefaultHtml || body.length ?
        react_1.default.createElement("div", { className: 'card-body' },
            titleHtml,
            appendDefaultHtml,
            body)
        :
            null;
    return react_1.default.createElement("div", { className: "card Increase" },
        headerHtml,
        bodyHtml,
        react_1.default.createElement("ul", { className: "list-group list-group-flush" }, contentHtml));
};
