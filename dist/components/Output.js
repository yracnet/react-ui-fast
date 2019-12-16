"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Output.scss");
exports.OutputText = (props) => {
    if (props.hide === true) {
        return null;
    }
    let { value, onFormat, align } = props;
    let valueText = value || "";
    if (onFormat) {
        valueText = onFormat(value);
    }
    let className = "Output label-text-" + (align || "left");
    return react_1.default.createElement("label", { className: className }, valueText);
};
