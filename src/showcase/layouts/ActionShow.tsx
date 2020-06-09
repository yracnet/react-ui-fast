import React from 'react';
import { Action, Button } from '../../module';

const ActionShow: React.FC = () => {
  return <Action>
    <Button name="A1" variant="danger">A1</Button>
    <Button name="A2" variant="dark">A2</Button>
    <Button name="A3" variant="info">A3</Button>
    <Button name="A4" variant="primary">A4</Button>
  </Action>;
}


export default ActionShow;