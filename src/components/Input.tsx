import React from 'react';
import { Icon } from './Icon';

export interface InputTextFeedback {
    state: 'valid' | 'invalid' | 'ignore',
    icon?: string,
    message?: string
}

export interface InputTextValue {
    name: string,
    value?: any,
    state: 'valid' | 'invalid' | 'ignore',
    icon?: string,
    message?: string
}

export type InputTextValidateObject = { [attr: string]: InputTextValidate[] };
export type InputTextFeedbackObject = { [attr: string]: InputTextFeedback };
export const InputTextFactory = {
    createFeedback: (inputValue: InputTextValue): InputTextFeedback => {
        return {
            state: inputValue.state,
            message: inputValue.message,
            icon: inputValue.icon || (inputValue.state === "valid" ? "check" : inputValue.state === "invalid" ? "warning" : undefined)
        };
    },
    createFeedbackState: (feedback: undefined | string | InputTextFeedback): any | null => {
        return typeof feedback === "string" ? "valid" : feedback ? feedback.state : "ignore";
    },
    createValidateValue: (inputValue: InputTextValue, validate?: InputTextValidate[]) => {
        let value: InputTextValue = inputValue;
        if (validate) {
            validate.every(it => {
                value = it(value)
                return value.state !== 'invalid';
            });
        }
        return value;
    },
    createFeedbackObjectFromObject: (valueObject: any, validateObject: InputTextValidateObject, filter?: (it: InputTextValue) => boolean): InputTextFeedbackObject => {
        let attrs = Object.keys(validateObject);
        let valueArray: InputTextValue[] = attrs.map(attr => { return { name: attr, state: "ignore", value: valueObject[attr] } });
        return InputTextFactory.createFeedbackObjectFromArray(valueArray, validateObject, filter);
    },
    createFeedbackObjectFromArray: (valueArray: InputTextValue[], validateObject: InputTextValidateObject, filter?: (it: InputTextValue) => boolean): InputTextFeedbackObject => {
        valueArray = valueArray.map(it => InputTextFactory.createValidateValue(it, validateObject[it.name]));
        let feedbackObject: InputTextFeedbackObject = {};
        //feedbackObject = valueArray.filter(it => it && it.state === "invalid")
        //    .reduce((result, it) => {
        //        result[it.name] = InputTextFactory.createFeedback(it);
        //        return result;
        //    }, feedbackObject)
        valueArray = valueArray.filter(it => it).filter(filter ? filter : it => it.state === "invalid");
        valueArray.forEach(it => { feedbackObject[it.name] = InputTextFactory.createFeedback(it) });
        console.log('valueArray:', valueArray);
        console.log('feedback:', feedbackObject);
        return feedbackObject;
    }

}

export type InputTextChange = (inputValue: InputTextValue) => void;

export type InputTextValidate = (inputValue: InputTextValue) => InputTextValue;

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
        let inputValue: InputTextValue = { name: props.name, state: 'ignore', value: newValue };
        if (props.onConvert && inputValue.value) {
            inputValue.value = props.onConvert(inputValue.value);
        }
        if (props.onValidate) {
            inputValue = InputTextFactory.createValidateValue(inputValue, props.onValidate);
        }
        if (props.onChange) {
            props.onChange(inputValue);
        }
    }
    let addonPrefixHtml = internal.createAddonHtml(props.addonPrefix);
    let addonPosfixHtml = internal.createAddonHtml(props.addonPosfix);
    if (props.type === "date") {
        addonPosfixHtml = <div className="input-group-prepend">
            <Icon name="calendar" size="lg" />
        </div>;
    }
    let feedbackHtml = internal.createFeedbackHtml(props.feedback);
    let valueString = props.value ? props.value.toString() : '';
    if (props.onFormat && props.value) {
        valueString = props.onFormat(props.value);
    }
    let feedbackState = InputTextFactory.createFeedbackState(props.feedback);
    let className = "form-control is-" + feedbackState;
    let inputHtml = props.disabled === true ?
        <span className={className}
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
            className={className}
            title={props.title || props.placeholder}
            placeholder={props.placeholder} />;
    return (
        <div className="input-group">
            {addonPrefixHtml}
            {inputHtml}
            {addonPosfixHtml}
            {feedbackHtml}
        </div>
    );
}
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