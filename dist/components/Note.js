"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Note.scss");
const Icon_1 = require("./Icon");
const Help_1 = __importDefault(require("./Help"));
exports.Note = (props) => {
    if (props.hide === true) {
        return null;
    }
    let messages = Help_1.default.parseArray(props.message).map(it => typeof it === 'string' ? { type: 'info', message: it, icon: 'info' } : it);
    if (!messages.length) {
        return null;
    }
    let { className, type } = props;
    let notesHtml = messages.map((it, i) => react_1.default.createElement("p", { key: i, className: 'alert alert-' + it.type },
        react_1.default.createElement(Icon_1.Icon, { name: it.icon }),
        it.message));
    className = type + ' ' + (className || '');
    return react_1.default.createElement("span", { className: className }, notesHtml);
};
