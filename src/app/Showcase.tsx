import React from 'react';
import './Showcase.scss';
import { InputText } from '../components/Input';


import { DatePicker } from '@evneandrey/react-datepicker';
import '@evneandrey/react-datepicker/assets/styles/calendar.scss';

import Select, { GroupedOptionsType, OptionsType, ValueType, ActionMeta, OptionTypeBase } from 'react-select';

export default class Showcase extends React.Component {
  //  constructor(props: any, context: any) {
  //    super(props, context);
  //
  //    this.state = {
  //      selectedDate: '2017-08-13'
  //    };
  //
  //    this.onChange = this.onChange.bind(this);
  //  }
  //
  //  onChange(date: Date) {
  //    this.setState({
  //      selectedDate: date
  //    });
  //  }

  onChange(event: any, raw: any) {
    // Day.js object
    console.log(raw, '-----------', event);
  }
  render() {
    let value = '20/11/2019';
    let format = 'DD/MM/YYYY';
    let value1 = {};
    let options = [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
    let options2 = [
      'chocolate',
      'strawberry',
      'vanilla',
    ]
    let onChange1 = (o: any) => {
      console.log('--->', o);

    }
    return (
      <div>

        <InputText name="s" type="option" options={options}
          onChange={onChange1} />

        <Select
          value={value1}
          options={options}
          onChange={onChange1}
        />
      </div>
    );
  }
}
