"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Icon_1 = require("./Icon");
exports.Pager = (props) => {
    if (props.hide === true) {
        return null;
    }
    let goClick = function (indexGo, step) {
        if (props.onPager) {
            props.onPager({
                index: indexGo,
                size: step
            });
        }
    };
    let changeStep = function (event) {
        if (props.onPager) {
            let step = parseInt(event.currentTarget.value || '1');
            props.onPager({
                index: 1,
                size: step
            });
        }
    };
    const margin = props.margin || 2;
    let value = Object.assign({ index: 1, step: 10 }, props.value);
    const limit = props.limit || 100;
    const steps = props.steps ? props.steps : [10, 15, 20, 30, 50];
    const indexMax = Math.ceil(limit / value.size);
    if (value.index > indexMax) {
        value.index = indexMax;
    }
    let indexIni = value.index > margin ? value.index - margin : 1;
    let count = 2 * margin;
    if (indexIni + count > indexMax) {
        indexIni = indexMax - count + 1;
    }
    let pagerLinkHtml = [];
    while (count--) {
        let indexGo = indexIni + count;
        if (indexGo <= 0) {
            continue;
        }
        if (value.index === indexGo) {
            pagerLinkHtml.unshift(react_1.default.createElement("li", { className: "page-item active", key: 'page-link-' + indexGo },
                react_1.default.createElement("span", { className: "page-link" }, indexGo)));
        }
        else {
            pagerLinkHtml.unshift(react_1.default.createElement("li", { className: "page-item", key: 'page-link-' + indexGo },
                react_1.default.createElement("a", { className: "page-link", href: '#page-' + indexGo, onClick: e => goClick(indexGo, value.size) }, indexGo)));
        }
    }
    if (value.index > 1) {
        let indexBack = value.index - 1;
        pagerLinkHtml.unshift(react_1.default.createElement("li", { className: "page-item", key: 'page-link-' + indexBack },
            react_1.default.createElement("a", { className: "page-link", href: '#page-' + indexBack, onClick: e => goClick(indexBack, value.size) },
                react_1.default.createElement(Icon_1.Icon, { name: "angle-left", size: "lg" }))));
        pagerLinkHtml.unshift(react_1.default.createElement("li", { className: "page-item", key: 'page-link-start' },
            react_1.default.createElement("a", { className: "page-link", href: "#page-1", onClick: e => goClick(1, value.size) },
                react_1.default.createElement(Icon_1.Icon, { name: "angle-double-left", size: "lg" }))));
    }
    else {
        pagerLinkHtml.unshift(react_1.default.createElement("li", { className: "page-item disabled", key: 'page-link-back' },
            react_1.default.createElement("span", { className: "page-link" },
                react_1.default.createElement(Icon_1.Icon, { name: "angle-left", size: "lg" }))));
        pagerLinkHtml.unshift(react_1.default.createElement("li", { className: "page-item disabled", key: 'page-link-start' },
            react_1.default.createElement("span", { className: "page-link" },
                react_1.default.createElement(Icon_1.Icon, { name: "angle-double-left", size: "lg" }))));
    }
    if (value.index < indexMax) {
        let indexNext = value.index + 1;
        pagerLinkHtml.push(react_1.default.createElement("li", { className: "page-item", key: 'page-link-next' },
            react_1.default.createElement("a", { className: "page-link", href: '#page-' + indexNext, onClick: e => goClick(indexNext, value.size) },
                react_1.default.createElement(Icon_1.Icon, { name: "angle-right", size: "lg" }))));
    }
    else {
        pagerLinkHtml.push(react_1.default.createElement("li", { className: "page-item disabled", key: 'page-link-next' },
            react_1.default.createElement("span", { className: "page-link" },
                react_1.default.createElement(Icon_1.Icon, { name: "angle-right", size: "lg" }))));
    }
    pagerLinkHtml.unshift(react_1.default.createElement("li", { className: "page-item" },
        react_1.default.createElement("select", { className: "custom-select", value: value.size, onChange: changeStep }, steps.map(it => react_1.default.createElement("option", { key: it }, it)))));
    pagerLinkHtml = pagerLinkHtml.map((it, i) => react_1.default.createElement("li", Object.assign({ key: 'page-' + i }, it.props)));
    return (react_1.default.createElement("ul", { className: 'pagination pagination-' + props.size }, pagerLinkHtml));
};
