import React from 'react';
import { Icon } from './Icon';
import './Input.scss';

//-------------DATE-----------------
import * as dayjs from 'dayjs';
import { DatePicker } from '@evneandrey/react-datepicker';
import '@evneandrey/react-datepicker/assets/styles/calendar.scss';

//-------------SELECT---------------
import Select, { GroupedOptionsType, OptionsType, ValueType, ActionMeta, OptionTypeBase } from 'react-select';

export interface InputTextFeedback {
    state: 'valid' | 'invalid' | 'ignore',
    icon?: string,
    message?: string
}

interface InputTextOption extends OptionTypeBase {
    value?: string,
    label?: string
}

export interface InputTextValue {
    name: string,
    value?: any,
    object?: InputTextOption | Date,
    state: 'valid' | 'invalid' | 'ignore',
    icon?: string,
    message?: string
}
export type TypeInputTextValidate = undefined | FnInputTextValidate[];
export type ObjectInputTextValidate = { [attr: string]: TypeInputTextValidate };
export type ObjectInputTextFeedback = { [attr: string]: InputTextFeedback };

export type FnInputTextChange = (inputValue: InputTextValue) => void;

export type FnInputTextValidate = (inputValue: InputTextValue) => InputTextValue;

export interface InputTextProps {
    name: string,
    value?: any,
    onChange?: FnInputTextChange,
    onValidate?: FnInputTextValidate[];
    onConvert?: (value?: string) => any,
    onFormat?: (value?: any) => string,
    type?: "text" | "number" | "date" | "password" | "option",
    feedback?: string | InputTextFeedback,
    title?: string,
    placeholder?: string,
    addonPrefix?: string,
    addonPosfix?: string,
    dateFormat?: string,
    options?: GroupedOptionsType<InputTextOption> | OptionsType<InputTextOption>,
    hide?: boolean,
    disabled?: boolean
}

export const InputText: React.FC<InputTextProps> = (props) => {
    if (props.hide === true) {
        return null;
    }
    let inputChangeDate = function (value: dayjs.Dayjs, rawValue: string) {
        let date = value ? value.toDate() : undefined;
        onChangeInvoke(rawValue, date);
    }
    let inputChangeOption = function (option: ValueType<any>, action: ActionMeta) {
        let rawValue = option ? option.value : undefined;
        onChangeInvoke(rawValue, option);
    }
    let inputChange = function (event: React.FormEvent<HTMLInputElement | HTMLSelectElement>) {
        let { value } = event.currentTarget;
        onChangeInvoke(value);
    }
    let onChangeInvoke = function (rawValue: any, object?: any) {
        let inputValue: InputTextValue = { name: props.name, state: 'ignore', value: rawValue, object: object };
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
    const type = props.type || 'string';
    if (type === "date") {
        addonPosfixHtml = <div className="input-group-prepend">
            <Icon name="calendar" size="lg" />
        </div>;
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
    let feedbackState = InputTextFactory.createFeedbackState(props.feedback);
    let className = "form-control is-" + feedbackState;
    let inputHtml = props.disabled === true ?
        <span className={className + ' is-disabled'}
            title={props.title || props.placeholder}
            placeholder={props.placeholder} >
            {valueString}
        </span>
        :
        type === "option" ?
            <Select
                name={props.name}
                classNamePrefix="select"
                className={className}
                value={valueString}
                onChange={inputChangeOption}
                title={props.title || props.placeholder}
                placeholder={props.placeholder}
                options={props.options} />
            :
            type === "date" ?
                <div className={className}>
                    <DatePicker value={valueString}
                        onChange={inputChangeDate}
                        dateFormat={props.dateFormat || 'DD/MM/YYYY'}
                        placeholder={props.placeholder}
                    />
                </div>
                :
                <input
                    name={props.name}
                    value={valueString}
                    onChange={inputChange}
                    type={type}
                    className={className}
                    title={props.title || props.placeholder}
                    placeholder={props.placeholder} />;
    return (
        <div className={'input-group Input-' + type}>
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
    createValidateValue: (inputValue: InputTextValue, validate: TypeInputTextValidate) => {
        let value: InputTextValue = inputValue;
        if (validate) {
            validate.every(it => {
                value = it(value)
                return value.state !== 'invalid';
            });
        }
        return value;
    },
    createFeedbackObjectFromObject: (valueObject: any, validateObject: ObjectInputTextValidate, filter?: (it: InputTextValue) => boolean): ObjectInputTextFeedback => {
        let attrs = Object.keys(validateObject);
        let valueArray: InputTextValue[] = attrs.map(attr => { return { name: attr, state: "ignore", value: valueObject[attr] } });
        return InputTextFactory.createFeedbackObjectFromArray(valueArray, validateObject, filter);
    },
    createFeedbackObjectFromArray: (valueArray: InputTextValue[], validateObject: ObjectInputTextValidate, filter?: (it: InputTextValue) => boolean): ObjectInputTextFeedback => {
        valueArray = valueArray.map(it => InputTextFactory.createValidateValue(it, validateObject[it.name]));
        let feedbackObject: ObjectInputTextFeedback = {};
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