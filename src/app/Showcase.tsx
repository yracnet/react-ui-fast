import React from 'react';
import './Showcase.scss';
import { Grid, Action, Button, Icon, OutputText } from '../module';
import { InputText } from '../components/Input';
import { Alert } from '../components/Alert';
import { Note } from '../components/Note';
const Showcase: React.FC = () => {
  let form: any = {
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd'
  };
  return (
    <div className="container">

      <h1>Show Case of Action</h1>
      <Action>
        <Button name="a1" text="A1" />
        <Button name="a2" text="A2" />
        <Button name="a3" text="A3" />
      </Action>
      <h1>Show Case of Alert</h1>
      <Alert variant="danger" icon="warning" message={['Mensaje 1', 'Mensaje 2']} cause={['Causa.....1', 'Causa.....2', 'Causa.....3']} ></Alert>
      


    </div>
  );
}

export default Showcase;
