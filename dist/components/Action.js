"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Help_1 = __importDefault(require("./Help"));
const Button_1 = require("./Button");
exports.Action = (props) => {
    if (props.hide === true) {
        return null;
    }
    let children = Help_1.default.parseArray(props.children);
    let actionsHtml = children.map((it, i) => {
        return it.type === Button_1.Button ? it : react_1.default.createElement("button", Object.assign({ key: i, className: 'btn btn-primary' }, it.props), it.props.children);
    });
    return react_1.default.createElement("span", { className: 'btn-group mt-1 mb-1' }, actionsHtml);
};
