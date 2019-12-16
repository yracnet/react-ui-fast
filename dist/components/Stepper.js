"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./Stepper.scss");
const Icon_1 = require("../components/Icon");
const react_router_dom_1 = require("react-router-dom");
const react_router_1 = require("react-router");
const react_router_2 = require("react-router");
let StepperLocal = (props) => {
    let liCN = props.orientation === "horizontal" ? "nav-item" : "list-group-item";
    let ulCN = props.orientation === "horizontal" ? "nav nav-tabs card-header-tabs" : "list-group";
    let linkCN = props.orientation === "horizontal" ? "card-header" : "col-2";
    let bodyCN = props.orientation === "horizontal" ? "card-body" : "col-10";
    let links = react_1.default.createElement("ul", { className: ulCN }, props.steps.map((it, i) => react_1.default.createElement("li", { className: liCN, key: i },
        react_1.default.createElement(react_router_dom_1.NavLink, { to: it.path, className: 'nav-link step-' + i, activeClassName: 'active' },
            react_1.default.createElement(Icon_1.Icon, { name: it.icon, size: props.size, shape: props.shape, variant: props.variant }),
            react_1.default.createElement("span", { className: "pl-2" }, it.title)))));
    let pathname = props.location.pathname;
    const size = props.steps.length;
    let index = props.steps.findIndex(it => react_router_1.matchPath(pathname, { path: it.path }));
    index = Math.round(100 * (index + 1) / size);
    let step = props.steps.find(it => react_router_1.matchPath(pathname, { path: it.path }));
    return (react_1.default.createElement("div", { className: 'Stepper card mode-' + props.orientation + ' ' + props.className },
        react_1.default.createElement("div", { className: "stepper-process card-header" },
            react_1.default.createElement("div", { className: "progress" },
                react_1.default.createElement("div", { className: "progress-bar progress-bar-striped", style: { width: index + '%' } },
                    index,
                    "%"))),
        react_1.default.createElement("div", { className: linkCN }, links),
        react_1.default.createElement("div", { className: bodyCN },
            step ? step.component : null,
            props.children)));
};
exports.Stepper = react_router_2.withRouter(StepperLocal);
