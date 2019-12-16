"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Label.scss");
exports.LabelText = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, align, mode, children, title, help } = props;
    mode = mode || "bottom";
    align = align || "left";
    let helpHtml = help ? (react_1.default.createElement("span", { className: "Help" },
        react_1.default.createElement("i", { className: "fa fa-info-circle" }),
        react_1.default.createElement("div", { className: "popover fade bs-popover-top" },
            react_1.default.createElement("div", { className: "arrow" }),
            react_1.default.createElement("div", { className: "popover-body" }, help)))) : null;
    let valueHtml = value ? react_1.default.createElement("label", { className: "Text label-text-" + align, title: title }, value) : null;
    let childrenHtml = children ? react_1.default.createElement("span", { className: "Reference" }, children) : null;
    return mode === "bottom" ?
        react_1.default.createElement("span", { className: "Label-Bottom" },
            childrenHtml,
            valueHtml,
            helpHtml)
        :
            mode === "top" ?
                react_1.default.createElement("span", { className: "Label-Top" },
                    valueHtml,
                    helpHtml,
                    childrenHtml)
                :
                    react_1.default.createElement("span", { className: "Label-Start" },
                        valueHtml,
                        helpHtml,
                        childrenHtml);
};
