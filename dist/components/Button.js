"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
require("./Button.scss");
const Popover_1 = require("./Popover");
const Block_1 = require("./Block");
const Icon_1 = require("./Icon");
const Help_1 = __importDefault(require("./Help"));
exports.Button = (props) => {
    if (props.hide === true) {
        return null;
    }
    let onClickInvoke = function () {
        let { onClick, name, params, to, history } = props;
        if (to) {
            if (history) {
                history.push(to);
            }
            else {
                console.warn('Button TO=URL requiere a history propertie for redirect to:', to);
            }
        }
        else if (onClick) {
            onClick(name, params);
        }
    };
    let onClickClose = function (element) {
        react_dom_1.default.unmountComponentAtNode(element);
        document.body.removeChild(element);
        Block_1.hideBlock();
    };
    let onClickCloseInvoke = function (element) {
        onClickClose(element);
        onClickInvoke();
    };
    let onClickConfirm = function (event, confirmMessage) {
        let element = event.currentTarget;
        let spanBefore = document.createElement('span');
        let confirmHtml = react_1.default.createElement(Popover_1.Popover, { variant: "warning", arrow: "auto", for: element },
            react_1.default.createElement("header", null, "Confirmaci\u00F3n"),
            react_1.default.createElement("p", { className: "mb-1" }, confirmMessage),
            react_1.default.createElement("div", { className: "text-center mt-1" },
                react_1.default.createElement("div", { className: "Button-Confirm btn-group w-100" },
                    react_1.default.createElement("button", { className: "btn btn-sm btn-warning", onClick: o => onClickClose(spanBefore) },
                        react_1.default.createElement("span", { className: "fa pr-1 fa-lg fa-times-circle" }),
                        "No"),
                    react_1.default.createElement("button", { className: "btn btn-sm btn-success", onClick: o => onClickCloseInvoke(spanBefore) },
                        react_1.default.createElement("span", { className: "fa pr-1 fa-lg fa-check-circle" }),
                        "SI"))));
        spanBefore.className = 'Button-Popover';
        document.body.appendChild(spanBefore);
        react_dom_1.default.render(confirmHtml, spanBefore, Block_1.showBlock);
    };
    let onClickRefuse = function (event, refuseMessage) {
        let element = event.currentTarget;
        let spanBefore = document.createElement('span');
        let refuseHtml = react_1.default.createElement(Popover_1.Popover, { variant: "danger", arrow: "auto", for: element },
            react_1.default.createElement("header", null, "Rechazo"),
            refuseMessage.map((it, i) => react_1.default.createElement("p", { key: i, className: "mb-1" }, it)),
            react_1.default.createElement("div", { className: "text-center mt-1" },
                react_1.default.createElement("div", { className: "Button-Confirm btn-group w-100" },
                    react_1.default.createElement("button", { className: "btn btn-sm btn-success", onClick: o => onClickClose(spanBefore) },
                        react_1.default.createElement("span", { className: "fa pr-1 fa-lg fa-check-circle" }),
                        "Aceptar"))));
        spanBefore.className = 'Button-Popover';
        document.body.appendChild(spanBefore);
        react_dom_1.default.render(refuseHtml, spanBefore, Block_1.showBlock);
    };
    let disabled = props.disabled || false;
    let size = props.size || 'sm';
    let variant = props.variant || 'default';
    let text = props.children ? props.children : props.text;
    let textHtml = text ? react_1.default.createElement("span", null, text) : null;
    let onClickButton = function (event) {
        if (disabled) {
            return false;
        }
        let refuseMessage = Help_1.default.parseArray(typeof props.refuse === 'function' ? props.refuse() : props.refuse);
        if (refuseMessage && refuseMessage.length) {
            onClickRefuse(event, refuseMessage);
        }
        else {
            let confirmMessage = typeof props.confirm === 'function' ? props.confirm() : props.confirm;
            if (confirmMessage) {
                onClickConfirm(event, confirmMessage);
            }
            else {
                onClickInvoke();
            }
        }
    };
    return (props.mode === 'link' ?
        react_1.default.createElement("a", { className: 'Button-Link text-' + variant + ' disabled-' + disabled, onClick: onClickButton, href: "#0" },
            react_1.default.createElement(Icon_1.Icon, { name: props.icon, size: "lg" }),
            textHtml)
        :
            react_1.default.createElement("button", { className: 'Button-Normal btn btn-' + size + ' btn-' + variant, onClick: onClickButton, disabled: disabled },
                react_1.default.createElement(Icon_1.Icon, { name: props.icon, size: "lg" }),
                textHtml));
};
