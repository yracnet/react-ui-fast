import React from 'react';
//import { Stepper, StepItem } from '../../module';
import { Stepper, StepItem } from '../../components/customs/Stepper';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class StepperShow extends React.Component {


  onChange(event: any, raw: any) {
    console.log(raw, '-----------', event);
  }
  render() {
    let Xxx = <h1>Paso....</h1>

    let steps: StepItem[] = [
      {
        title: "Link 1",
        path: "/a/1",
        icon: "check",
        component: Xxx
      },
      {
        title: "Link 2",
        path: "/a/2",
        icon: "check",
        component: Xxx
      },
      {
        title: "Link 3",
        path: "/a/3",
        icon: "check",
        component: Xxx
      }
    ]

    return (
      <div>
        <BrowserRouter>
          <Route path="/">
            <Stepper orientation="vertical" className="x" steps={steps}>
              <Switch>
                <Route exact path='/a/1'>
                  <h1>Paso 1</h1>
                </Route>
                <Route path='/a/2'>
                  <h1>Paso 2</h1>
                </Route>
                <Route path='/a/3'>
                  <h1>Paso 3</h1>
                </Route>
                <Route path='/a/4'>
                  <h1>Paso 4</h1>
                </Route>
                <Route path='/a/5'>
                  <h1>Paso 5</h1>
                </Route>
                <Route path='/a/6'>
                  <h1>Paso 6</h1>
                </Route>
              </Switch>
            </Stepper>
            <Stepper orientation="horizontal" className="x" steps={steps}>
              <Switch>
                <Route exact path='/a/1'>
                  <h1>Paso 1</h1>
                </Route>
                <Route path='/a/2'>
                  <h1>Paso 2</h1>
                </Route>
                <Route path='/a/3'>
                  <h1>Paso 3</h1>
                </Route>
                <Route path='/a/4'>
                  <h1>Paso 4</h1>
                </Route>
                <Route path='/a/5'>
                  <h1>Paso 5</h1>
                </Route>
                <Route path='/a/6'>
                  <h1>Paso 6</h1>
                </Route>
              </Switch>
            </Stepper>
          </Route>
        </BrowserRouter>
      </div >
    );
  }
}


