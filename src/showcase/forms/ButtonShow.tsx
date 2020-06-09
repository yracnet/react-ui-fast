import React from 'react';
import { Button } from '../../module';

const ButtonShow: React.SFC = () => {
  return (
    <div>
      <Button name="b1" text="btn 1" />
      <Button name="b1" text="btn 2" icon="check"/>
      <Button name="b1" text="btn 3" refuse="Refuce action"/>
      <Button name="b1" text="btn 4" confirm="Confirm action"/>
      <Button name="b1" text="btn 5" size="lg"/>
      <Button name="b1" text="btn 6" variant="danger"/>
    </div>
  )
}
export default ButtonShow;