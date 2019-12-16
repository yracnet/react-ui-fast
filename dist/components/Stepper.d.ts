import React from 'react';
import './Stepper.scss';
import { IconVariant, IconShape, IconSize } from '../components/Icon';
import { RouteComponentProps } from 'react-router';
export interface StepItem {
    title: string;
    path: string;
    icon?: string;
    disabled?: boolean;
    component?: any;
}
export interface StepperProps extends RouteComponentProps {
    className?: string;
    orientation: "vertical" | "horizontal";
    size?: IconSize;
    variant?: IconVariant;
    shape?: IconShape;
    steps: StepItem[];
    children?: any | any[];
}
export declare const Stepper: React.ComponentClass<Pick<StepperProps, "size" | "children" | "variant" | "className" | "orientation" | "shape" | "steps">, any> & import("react-router").WithRouterStatics<React.FunctionComponent<StepperProps>>;
