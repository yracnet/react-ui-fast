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
      <h1>Show Case of Button</h1>
      <Button name="x1" text="X1" variant="danger" icon="save" confirm="Mensaje de Confimacion" />
      <Button name="x2" text="X2" variant="success" icon="save" refuse="Mensaje de Rechazo" />
      <h1>Show Case of FilterText</h1>
      <h1>Show Case of Grid</h1>
      <Grid cols={[2, 4]}>
        <InputText name="a" value={form.a} />
        <InputText name="b" value={form.b} />
        <InputText name="c" value={form.c} />
        <InputText name="d" value={form.d} />
      </Grid>
      <h1>Show Case of Icon</h1>
      <Icon variant="secondary" text="Hola...." name="check" />
      <h1>Show Case of Increase</h1>
      <h1>Show Case of InputText</h1>
      <InputText name="a" value={form.a} message="Error 1" />
      <InputText name="a" value={form.a} message="Error 1" addonPosfix="@google.com" />
      <InputText name="a" value={form.a} message="Error 1" addonPrefix="Nombre:" />
      <InputText name="a" value={form.x} title="X" placeholder="Ingrese Valor: " />
      <h1>Show Case of Note</h1>
      <Note type="note-input" message={['Mensaje 1', 'Mensaje 2']} />
      <h1>Show Case of OutputText</h1>
      <OutputText name="a" value={form.a} />
      <h1>Show Case of Pager</h1>
      <h1>Show Case of Panel</h1>
      <h1>Show Case of Popover</h1>
      <h1>Show Case of Tabl</h1>


    </div>
  );
}

export default Showcase;
