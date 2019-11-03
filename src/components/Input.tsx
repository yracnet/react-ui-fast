import React from 'react';
import { Icon } from './Icon';

export interface InputTextFeedback {
    state: 'valid' | 'invalid',
    icon?: string,
    message: string
}

export interface InputTextValue {
    name: string,
    value?: any,
    state: 'valid' | 'invalid',
    icon?: string,
    message?: string
}
export type InputTextChange = (state: InputTextValue) => void;
export type InputTextValidate = (state: InputTextValue) => InputTextValue;
export interface InputTextProps {
    name: string,
    value?: any,
    onChange?: InputTextChange,
    onValidate?: InputTextValidate[];
    onConvert?: (value?: string) => any,
    onFormat?: (value?: any) => string,
    type?: "string" | "number" | "date",
    feedback?: string | InputTextFeedback,
    title?: string,
    placeholder?: string,
    addonPrefix?: string,
    addonPosfix?: string,
    hide?: boolean,
    disabled?: boolean
}

export const InputText: React.FC<InputTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let inputChange = function (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
        let { value } = event.currentTarget;
        onChangeInvoke(value);
    }
    let onChangeInvoke = function (newValue: any) {
        //let { name, onChange, onValidate, onConvert } = props;
        let inputValue: InputTextValue = { name: props.name, state: 'valid', value: newValue };
        if (props.onConvert && inputValue.value) {
            inputValue.value = props.onConvert(inputValue.value);
        }
        if (props.onValidate) {
            props.onValidate.every(it => {
                inputValue = it(inputValue)
                return inputValue.state === 'valid';
            });
        }
        if (props.onChange) {
            props.onChange(inputValue);
        }
    }

    let addonPrefixHtml = internal.createAddonHtml(props.addonPrefix);
    let addonPosfixHtml = internal.createAddonHtml(props.addonPosfix);
    let feedbackHtml = internal.createFeedbackHtml(props.feedback);
    let valueString = props.value ? props.value.toString() : '';
    if (props.onFormat && props.value) {
        valueString = props.onFormat(props.value);
    }
    let inputHtml = props.disabled === true ?
        <span className="form-control"
            title={props.title || props.placeholder}
            placeholder={props.placeholder} >
            {valueString}
        </span>
        :
        <input
            name={props.name}
            value={valueString}
            onChange={inputChange}
            type={props.type}
            className="form-control"
            title={props.title || props.placeholder}
            placeholder={props.placeholder} />;
    //has-warning
    console.log(props.feedback, '--->', feedbackHtml);
    let className = "input-group " + (feedbackHtml ? "was-validated" : "");
    return (
        <div className={className}>
            {addonPrefixHtml}
            {inputHtml}
            {addonPosfixHtml}
            {feedbackHtml}
        </div>
    );
}
//valid-feedback note-input 
const internal = {
    createAddonHtml: (text: string | undefined): any | null => {
        return text ?
            <div className="input-group-prepend">
                <span className="input-group-text">
                    {text}
                </span>
            </div>
            :
            null;
    },
    createFeedbackHtml: (feedback: undefined | string | InputTextFeedback): any | null => {
        if (!feedback) {
            return null;
        }
        let it: InputTextFeedback = typeof feedback === "string" ?
            { state: "valid", message: feedback, icon: "ok" }
            :
            feedback;
        return (
            <div className={it.state + '-feedback '}>
                <Icon name={it.icon} />
                {it.message}
            </div>
        );
    }
}