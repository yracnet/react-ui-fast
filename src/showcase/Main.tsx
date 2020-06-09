import React from 'react';
import './Main.scss';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import AlertShow from "./commons/AlertShow";
import NoteShow from "./commons/NoteShow";
import IconShow from "./commons/IconShow";
import PopoverShow from "./commons/PopoverShow";
import FilterShow from "./customs/FilterShow";
import PagerShow from "./customs/PagerShow";
import StepperShow from "./customs/StepperShow";
import ButtonShow from "./forms/ButtonShow";
import IncreaseShow from "./forms/IncreaseShow";
import InputShow from "./forms/InputShow";
import LabelShow from "./forms/LabelShow";
import OutputShow from "./forms/OutputShow";
import TableShow from "./forms/TableShow";
import ActionShow from "./layouts/ActionShow";
import GridShow from "./layouts/GridShow";
import PanelShow from "./layouts/PanelShow";

export default class Main extends React.Component {

  render() {
    return (
      <div className="Main">
        <BrowserRouter>
          <div className="Links">
            <NavLink to="/AlertShow">AlertShow</NavLink>
            <NavLink to="/NoteShow">NoteShow</NavLink>
            <NavLink to="/IconShow">IconShow</NavLink>
            <NavLink to="/PopoverShow">PopoverShow</NavLink>
            <NavLink to="/FilterShow">FilterShow</NavLink>
            <NavLink to="/PagerShow">PagerShow</NavLink>
            <NavLink to="/StepperShow">StepperShow</NavLink>
            <NavLink to="/ButtonShow">ButtonShow</NavLink>
            <NavLink to="/IncreaseShow">IncreaseShow</NavLink>
            <NavLink to="/InputShow">InputShow</NavLink>
            <NavLink to="/LabelShow">LabelShow</NavLink>
            <NavLink to="/OutputShow">OutputShow</NavLink>
            <NavLink to="/TableShow">TableShow</NavLink>
            <NavLink to="/ActionShow">ActionShow</NavLink>
            <NavLink to="/GridShow">GridShow</NavLink>
            <NavLink to="/PanelShow">PanelShow</NavLink>
          </div>
          <div className="Content">
            <Route path="/AlertShow"><AlertShow /></Route>
            <Route path="/IconShow"><IconShow /></Route>
            <Route path="/PopoverShow"><PopoverShow /></Route>
            <Route path="/FilterShow"><FilterShow /></Route>
            <Route path="/PagerShow"><PagerShow /></Route>
            <Route path="/StepperShow"><StepperShow /></Route>
            <Route path="/ButtonShow"><ButtonShow /></Route>
            <Route path="/IncreaseShow"><IncreaseShow /></Route>
            <Route path="/InputShow"><InputShow /></Route>
            <Route path="/LabelShow"><LabelShow /></Route>
            <Route path="/OutputShow"><OutputShow /></Route>
            <Route path="/TableShow"><TableShow /></Route>
            <Route path="/ActionShow"><ActionShow /></Route>
            <Route path="/GridShow"><GridShow /></Route>
            <Route path="/NoteShow"><NoteShow /></Route>
            <Route path="/PanelShow"><PanelShow /></Route>
          </div>
        </BrowserRouter>
      </div >
    );
  }
}


