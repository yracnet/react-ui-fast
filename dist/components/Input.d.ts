import React from 'react';
import './Input.scss';
import { GroupedOptionsType, OptionsType, OptionTypeBase } from 'react-select';
export interface InputTextFeedback {
    state: 'valid' | 'invalid' | 'ignore';
    icon?: string;
    message?: string;
}
interface InputTextOption extends OptionTypeBase {
    value?: string;
    label?: string;
}
export interface InputTextValue {
    name: string;
    value?: any;
    object?: InputTextOption | Date;
    state: 'valid' | 'invalid' | 'ignore';
    icon?: string;
    message?: string;
}
export declare type TypeInputTextValidate = undefined | FnInputTextValidate[];
export declare type ObjectInputTextValidate = {
    [attr: string]: TypeInputTextValidate;
};
export declare type ObjectInputTextFeedback = {
    [attr: string]: InputTextFeedback;
};
export declare type FnInputTextChange = (inputValue: InputTextValue) => void;
export declare type FnInputTextValidate = (inputValue: InputTextValue) => InputTextValue;
export interface InputTextProps {
    name: string;
    value?: any;
    onChange?: FnInputTextChange;
    onValidate?: FnInputTextValidate[];
    onConvert?: (value?: string) => any;
    onFormat?: (value?: any) => string;
    type?: "text" | "number" | "date" | "password" | "option";
    feedback?: string | InputTextFeedback;
    title?: string;
    placeholder?: string;
    addonPrefix?: string;
    addonPosfix?: string;
    dateFormat?: string;
    options?: GroupedOptionsType<InputTextOption> | OptionsType<InputTextOption>;
    hide?: boolean;
    disabled?: boolean;
}
export declare const InputText: React.FC<InputTextProps>;
export declare const InputTextFactory: {
    createFeedback: (inputValue: InputTextValue) => InputTextFeedback;
    createFeedbackState: (feedback: string | InputTextFeedback | undefined) => any;
    createValidateValue: (inputValue: InputTextValue, validate: TypeInputTextValidate) => InputTextValue;
    createFeedbackObjectFromObject: (valueObject: any, validateObject: ObjectInputTextValidate, filter?: ((it: InputTextValue) => boolean) | undefined) => ObjectInputTextFeedback;
    createFeedbackObjectFromArray: (valueArray: InputTextValue[], validateObject: ObjectInputTextValidate, filter?: ((it: InputTextValue) => boolean) | undefined) => ObjectInputTextFeedback;
};
export {};
