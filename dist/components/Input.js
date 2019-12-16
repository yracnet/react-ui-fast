"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = require("./Icon");
require("./Input.scss");
const react_select_1 = __importDefault(require("react-select"));
exports.InputText = (props) => {
    if (props.hide === true) {
        return null;
    }
    let inputChangeOption = function (option, action) {
        let rawValue = option ? option.value : undefined;
        onChangeInvoke(rawValue, option);
    };
    let inputChange = function (event) {
        let { value } = event.currentTarget;
        onChangeInvoke(value);
    };
    let onChangeInvoke = function (rawValue, object) {
        let inputValue = { name: props.name, state: 'ignore', value: rawValue, object: object };
        if (props.onConvert && inputValue.value) {
            inputValue.value = props.onConvert(inputValue.value);
        }
        if (props.onValidate) {
            inputValue = exports.InputTextFactory.createValidateValue(inputValue, props.onValidate);
        }
        if (props.onChange) {
            props.onChange(inputValue);
        }
    };
    let addonPrefixHtml = internal.searchAddonHtml(props.children) || internal.createAddonHtml(props.addonPrefix);
    let addonPosfixHtml = internal.createAddonHtml(props.addonPosfix);
    const type = props.type || 'string';
    if (type === "date") {
        addonPosfixHtml = react_1.default.createElement("div", { className: "input-group-prepend" },
            react_1.default.createElement(Icon_1.Icon, { name: "calendar", size: "lg" }));
    }
    let feedbackHtml = internal.createFeedbackHtml(props.feedback);
    let valueString = props.value ? props.value.toString() : '';
    if (props.onFormat && props.value) {
        valueString = props.onFormat(props.value);
    }
    if (type === "option" && props.options) {
        let options = [...props.options];
        valueString = options.find(it => it.value === valueString);
    }
    let feedbackState = exports.InputTextFactory.createFeedbackState(props.feedback);
    let className = "form-control is-" + feedbackState;
    let inputHtml = props.disabled === true ?
        react_1.default.createElement("span", { className: className + ' is-disabled', title: props.title || props.placeholder, placeholder: props.placeholder }, valueString)
        :
            type === "option" ?
                react_1.default.createElement(react_select_1.default, { name: props.name, classNamePrefix: "select", className: className, value: valueString, onChange: inputChangeOption, title: props.title || props.placeholder, placeholder: props.placeholder, options: props.options })
                :
                    react_1.default.createElement("input", { name: props.name, value: valueString, onChange: inputChange, type: type, className: className, title: props.title || props.placeholder, placeholder: props.placeholder });
    return (react_1.default.createElement("div", { className: 'input-group Input-' + type },
        addonPrefixHtml,
        inputHtml,
        addonPosfixHtml,
        feedbackHtml));
};
const internal = {
    searchAddonHtml: (children) => {
        if (Array.isArray(children)) {
            return children.map(it => react_1.default.createElement("div", { className: "input-group-prepend" }, it));
        }
        return children ?
            react_1.default.createElement("div", { className: "input-group-prepend" }, children)
            :
                null;
    },
    createAddonHtml: (text) => {
        return text ?
            react_1.default.createElement("div", { className: "input-group-prepend" },
                react_1.default.createElement("span", { className: "input-group-text" }, text))
            :
                null;
    },
    createFeedbackHtml: (feedback) => {
        if (!feedback) {
            return null;
        }
        let it = typeof feedback === "string" ?
            { state: "valid", message: feedback, icon: "ok" }
            :
                feedback;
        return (react_1.default.createElement("div", { className: it.state + '-feedback ' },
            react_1.default.createElement(Icon_1.Icon, { name: it.icon }),
            it.message));
    }
};
exports.InputTextFactory = {
    createFeedback: (inputValue) => {
        return {
            state: inputValue.state,
            message: inputValue.message,
            icon: inputValue.icon || (inputValue.state === "valid" ? "check" : inputValue.state === "invalid" ? "warning" : undefined)
        };
    },
    createFeedbackState: (feedback) => {
        return typeof feedback === "string" ? "valid" : feedback ? feedback.state : "ignore";
    },
    createValidateValue: (inputValue, validate) => {
        let value = inputValue;
        if (validate) {
            validate.every(it => {
                value = it(value);
                return value.state !== 'invalid';
            });
        }
        return value;
    },
    createFeedbackObjectFromObject: (valueObject, validateObject, filter) => {
        let attrs = Object.keys(validateObject);
        let valueArray = attrs.map(attr => { return { name: attr, state: "ignore", value: valueObject[attr] }; });
        return exports.InputTextFactory.createFeedbackObjectFromArray(valueArray, validateObject, filter);
    },
    createFeedbackObjectFromArray: (valueArray, validateObject, filter) => {
        valueArray = valueArray.map(it => exports.InputTextFactory.createValidateValue(it, validateObject[it.name]));
        let feedbackObject = {};
        valueArray = valueArray.filter(it => it).filter(filter ? filter : it => it.state === "invalid");
        valueArray.forEach(it => { feedbackObject[it.name] = exports.InputTextFactory.createFeedback(it); });
        console.log('valueArray:', valueArray);
        console.log('feedback:', feedbackObject);
        return feedbackObject;
    }
};
