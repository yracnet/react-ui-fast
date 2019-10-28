import React from 'react';
import { Note } from './Note';

export interface InputTextMessage {
    type: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
    icon?: string,
    message: string
}

export interface InputTextValue {
    value?: any,
    state: 'error' | 'success' | 'info' | 'none',
    message?: string | InputTextMessage
}

export interface InputTextProps {
    name: string,
    value?: any,
    onChange?: (name: string, e: InputTextValue) => void,
    onValidate?: Array<(name: string, event: InputTextValue) => InputTextValue>;
    //onConvert?: (value: any) => any,
    //onFormat?: (value: any) => string,
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
        let { name, onChange, onValidate } = props;
        let inputValue: InputTextValue = { state: 'none', value: newValue };
        if (onValidate) {
            onValidate.every(it => {
                inputValue = it(name, inputValue)
                return inputValue.state === 'none';
            });
        }
        if (onChange) {
            onChange(name, inputValue);
        }
    }
    let { name, value, message, type, addonPrefix, addonPosfix, placeholder, title } = props;
    title = title || placeholder;
    // let outputMessage = messages || this.state.messages || [];
    let addonPrefixHtml = addonPrefix ? <div className="input-group-prepend"><span className="input-group-text">{addonPrefix}</span></div> : null;
    let addonPosfixHtml = addonPosfix ? <div className="input-group-prepend"><span className="input-group-text">{addonPosfix}</span></div> : null;
    let valueString = value ? value.toString() : '';

    let messageHtml = <Note message={message} type="note-input" ></Note>;
    //has-warning
    return (
        <div className="input-group">
            {addonPrefixHtml}
            <input
                name={name}
                value={valueString}
                onChange={inputChange}
                type={type}
                className="form-control"
                title={title}
                placeholder={placeholder} />
            {addonPosfixHtml}
            {messageHtml}
        </div>
    );
}
/*
export class InputText2 extends React.PureComponent<InputProps, InputValue> {
    constructor(props: InputProps) {
        super(props);
        this.state = { invalid: false, messages: [] };
        this.inputChange = this.inputChange.bind(this);
        this.onChangeInvoke = this.onChangeInvoke.bind(this);
    }

    inputChange(event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
        let { value } = event.currentTarget;
        this.onChangeInvoke(value);
    }

    onChangeInvoke(newValue: any) {
        let { name, onChange, onValidate } = this.props;
        let state = { ...this.state };
        let event: InputValue = { invalid: false, value: newValue, messages: [] };
        if (onValidate) {
            onValidate.every(it => {
                event = it(name, event)
                return !event.invalid;
            });
            state.invalid = event.invalid;
            state.messages = event.messages;
        }
        this.setState(state, () => {
            if (onChange) {
                onChange(name, event);
            }
        });
    }

    render(): React.ReactNode {
        if (this.props.hide === true) {
            return null;
        }
        let { name, defaultValue, messages, type, addonPrefix, addonPosfix, placeholder, title } = this.props;
        title = title || placeholder;
        let outputMessage = messages || this.state.messages || [];
        let addonPrefixHtml = addonPrefix ? <div className="input-group-prepend"><span className="input-group-text">{addonPrefix}</span></div> : null;
        let addonPosfixHtml = addonPosfix ? <div className="input-group-prepend"><span className="input-group-text">{addonPosfix}</span></div> : null;
        let messageHtml = <Note messages={outputMessage} type="note-input" ></Note>;
        //has-warning
        return (
            <div className="input-group">
                {addonPrefixHtml}
                <input
                    name={name}
                    defaultValue={defaultValue}
                    onChange={this.inputChange}
                    type={type}
                    className="form-control"
                    title={title}
                    placeholder={placeholder} />
                {addonPosfixHtml}
                {messageHtml}
            </div>
        );
    };
};
/**/