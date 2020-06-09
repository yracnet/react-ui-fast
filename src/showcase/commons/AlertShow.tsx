import React from 'react';
import { Alert } from '../../module';

const AlertShow: React.SFC = () => {
  return (
    <div>
        <Alert key="1" message="Hola Mundo" variant="danger"/>
    </div>
  )
}
export default AlertShow;