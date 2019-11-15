import React from 'react';
import './Stepper.scss';
import { Icon, IconVariant, IconShape, IconSize } from '../components/Icon';
import { NavLink } from 'react-router-dom';
import { matchPath } from 'react-router';
import { withRouter, RouteComponentProps } from 'react-router'


//export interface StepProps extends RouteComponentProps {
//    index?: number,
//    icon?: string,
//    href?: string,
//    title?: string,
//    descripcion?: string,
//    size?: IconSize,
//    variant?: IconVariant,
//    shape?: IconShape,
//}
//
//let StepLocal: React.FC<StepProps> = (props) => {
//    let href = props.href ? props.href : '/none';
//    return (
//        <NavLink to={href} className={'Step step-' + (props.index)} activeClassName='step-link-active' >
//            <div className="step-icon">
//                <Icon name={props.icon} size={props.size} shape={props.shape} variant={props.variant} />
//            </div>
//            <strong className="step-text">{props.title}</strong>
//        </NavLink>
//    );
//}
//export const Step = withRouter(StepLocal)

export interface StepItem {
    title: string,
    path: string,
    icon?: string,
    disabled?: boolean,
    component?: any
}
export interface StepperProps extends RouteComponentProps {
    className?: string,
    orientation: "vertical" | "horizontal",
    size?: IconSize,
    variant?: IconVariant,
    shape?: IconShape,
    steps: StepItem[],
    children?: any | any[]
}

let StepperLocal: React.FC<StepperProps> = (props) => {
    let liCN = props.orientation === "horizontal" ? "nav-item" : "list-group-item"
    let ulCN = props.orientation === "horizontal" ? "nav nav-tabs card-header-tabs" : "list-group"
    let linkCN = props.orientation === "horizontal" ? "card-header" : "col-2"
    let bodyCN = props.orientation === "horizontal" ? "card-body" : "col-10"
    let links = <ul className={ulCN}>
        {props.steps.map((it, i) =>
            <li className={liCN} key={i}>
                <NavLink to={it.path} className={'nav-link step-' + i} activeClassName='active' >
                    <Icon name={it.icon} size={props.size} shape={props.shape} variant={props.variant} />
                    <span className="pl-2">{it.title}</span>
                </NavLink>
            </li>
        )}
    </ul>

    let pathname = props.location.pathname
    const size = props.steps.length
    let index = props.steps.findIndex(it => matchPath(pathname, { path: it.path }))
    index = Math.round(100 * (index + 1) / size)
    let step = props.steps.find(it => matchPath(pathname, { path: it.path }))
    return (
        <div className={'Stepper card mode-' + props.orientation + ' ' + props.className}>
            <div className="stepper-process card-header">
                <div className="progress">
                    <div className="progress-bar progress-bar-striped" style={{ width: index + '%' }} >{index}%</div>
                </div>
            </div>
            <div className={linkCN}>
                {links}
            </div>
            <div className={bodyCN}>
                {step ? step.component : null}
                {props.children}
            </div>
        </div>
    );
}
export const Stepper = withRouter(StepperLocal)