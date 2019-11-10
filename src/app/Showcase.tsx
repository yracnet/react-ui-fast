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

        <InputText name="a">
          <select className="custom-select input-group-text">
            <option>NO*</option>
            <option>SI</option>
          </select>
          <select className="custom-select input-group-text">
            <option>NO*</option>
            <option>SI</option>
          </select>
        </InputText>
        <InputText name="a" disabled={true}>
          <select className="custom-select input-group-text">
            <option>NO*</option>
            <option>SI</option>
          </select>
          <select className="custom-select input-group-text">
            <option>NO*</option>
            <option>SI</option>
          </select>
        </InputText>

        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <input type="checkbox" />
            </div>
          </div>
          <input type="text" className="form-control" aria-label="Text input with checkbox" />
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <select className="form-control input-group-text">
              <option>SI</option>
              <option>NO</option>
            </select>
          </div>
          <input type="text" className="form-control" aria-label="Text input with checkbox" />
          <input type="text" className="form-control" aria-label="Text input with checkbox" />
        </div>


        <div className="input-group mb-3">
          <div className="input-group-append">
            <select className="custom-select input-group-text">
              <option value="SI">SI</option>
              <option value="NO">NO</option>
            </select>
          </div>
          <input type="text" className="form-control" aria-label="Text input with checkbox" />
        </div>
      </div>
    );
  }
}
