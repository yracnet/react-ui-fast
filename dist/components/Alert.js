"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Help_1 = __importDefault(require("./Help"));
require("./Alert.scss");
const Icon_1 = require("./Icon");
exports.Alert = (props) => {
    let messagesHtml = react_1.default.createElement("span", { className: "Alert-Messages" }, Help_1.default.parseArray(props.message).map((it, i) => react_1.default.createElement("p", { key: i }, it)));
    let causesHtml = props.cause ? react_1.default.createElement("ul", { className: "Alert-Causes" }, Help_1.default.parseArray(props.cause).map((it, i) => react_1.default.createElement("li", { key: i }, it))) : null;
    let childrenHtml = props.children ? react_1.default.createElement("span", { className: "Alert-Children" }, props.children) : null;
    return (react_1.default.createElement("div", { className: 'Alert alert alert-' + (props.variant || 'default') },
        react_1.default.createElement(Icon_1.Icon, { name: props.icon, size: "2x" }),
        messagesHtml,
        causesHtml,
        childrenHtml));
};
