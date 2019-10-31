import React from 'react';
import { Note } from './Note';

export interface InputTextMessage {
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    icon?: string,
    message: string
}

export interface InputTextState {
    name: string,
    state: 'error' | 'success' | 'info' | 'none',
    value?: any,
    message?: string | InputTextMessage
}
export type InputTextChange = (state: InputTextState) => void;
export type InputTextValidate = (state: InputTextState) => InputTextState;
export interface InputTextProps {
    name: string,
    value?: any,
    onChange?: InputTextChange,
    onValidate?: InputTextValidate[];
    onConvert?: (value?: string) => any,
    onFormat?: (value?: any) => string,
    type?: "string" | "number" | "date",
    message?: string | InputTextMessage,
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
        let inputValue: InputTextState = { name: props.name, state: 'none', value: newValue };
        if (props.onConvert && inputValue.value) {
            inputValue.value = props.onConvert(inputValue.value);
        }
        if (props.onValidate) {
            props.onValidate.every(it => {
                inputValue = it(inputValue)
                return inputValue.state === 'none';
            });
        }
        if (props.onChange) {
            props.onChange(inputValue);
        }
    }
    //let { name, disabled, value, message, type, addonPrefix, addonPosfix, placeholder, title, onFormat } = props;
    let addonPrefixHtml = props.addonPrefix ? <div className="input-group-prepend"><span className="input-group-text">{props.addonPrefix}</span></div> : null;
    let addonPosfixHtml = props.addonPosfix ? <div className="input-group-prepend"><span className="input-group-text">{props.addonPosfix}</span></div> : null;
    let valueString = props.value ? props.value.toString() : '';
    if (props.onFormat && props.value) {
        valueString = props.onFormat(props.value);
    }
    let messageHtml = <Note message={props.message} type="note-input" />;
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
    return (
        <div className="input-group">
            {addonPrefixHtml}
            {inputHtml}
            {addonPosfixHtml}
            {messageHtml}
        </div>
    );
}