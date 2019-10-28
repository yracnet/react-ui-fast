import React from 'react';
import ReactDOM from 'react-dom';
import './Button.scss';
import { Popover } from './Popover';
import { Icon } from './Icon';
import Help from './Help';

//type messageType = () =>(string|)
type confirmType = () => string | undefined;
type refuseType = () => string | Array<string> | undefined;

export interface ButtonProps {
  name: string,
  onClick?: (name: string, params?: Array<any>) => void,
  params?: Array<any>,
  hide?: boolean,
  mode?: 'link' | 'button',
  disabled?: boolean,
  confirm?: string | confirmType,
  refuse?: string | Array<string> | refuseType,
  icon?: string,
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  text?: string,
  children?: string
}


export const Button: React.SFC<ButtonProps> = (props) => {
  //let config = { hide: false, style: { display: 'none' } };
  if (props.hide === true) {
    return null;
  }
  let onClickInvoke = function () {
    let { onClick, name, params } = props;
    if (onClick) {
      onClick(name, params);
    }
  };
  let onClickClose = function (element: any) {
    ReactDOM.unmountComponentAtNode(element);
    element.parentNode.removeChild(element);
  };
  let onClickCloseInvoke = function (element: any) {
    onClickInvoke();
    onClickClose(element);
  };
  let onClickConfirm = function (event: any, confirmMessage: string) {
    let element = event.currentTarget;
    let spanBefore = document.createElement('span');
    let confirmHtml = <Popover variant="warning" arrow="top" for={spanBefore} >
      <header>Confirmacion</header>
      <p className="mb-1">{confirmMessage}</p>
      <div className="text-center mt-1">
        <div className="Button-Confirm btn-group w-100">
          <button className="btn btn-sm btn-warning" onClick={o => onClickClose(spanBefore)}>
            <span className="fa pr-1 fa-lg fa-times-circle"></span>
            No
          </button>
          <button className="btn btn-sm btn-success" onClick={o => onClickCloseInvoke(spanBefore)}>
            <span className="fa pr-1 fa-lg fa-check-circle"></span>
            SI
        </button>
        </div>
      </div>
    </Popover>;
    spanBefore.className = 'Button-Popover';
    element.parentElement.insertBefore(spanBefore, element);
    ReactDOM.render(confirmHtml, spanBefore);
  };
  let onClickRefuse = function (event: any, refuseMessage: Array<string>) {
    let element = event.currentTarget;
    let spanBefore = document.createElement('span');
    let refuseHtml = <Popover variant="danger" arrow="auto" for={spanBefore} >
      <header>Rechazo</header>
      {refuseMessage.map((it, i) => <p key={i} className="mb-1">{it}</p>)}
      <div className="text-center mt-1">
        <div className="Button-Confirm btn-group w-100">
          <button className="btn btn-sm btn-success" onClick={o => onClickClose(spanBefore)}>
            <span className="fa pr-1 fa-lg fa-check-circle"></span>
            Aceptar
          </button>
        </div>
      </div>
    </Popover>;
    spanBefore.className = 'Button-Popover';
    element.parentElement.insertBefore(spanBefore, element);
    ReactDOM.render(refuseHtml, spanBefore);
  };
  let disabled = props.disabled || false;
  let variant = props.variant || 'default';
  let text = props.children ? props.children : props.text;
  let textHtml = text ? <span>{text}</span> : null;
  let onClickButton = function (event: any) {
    if (disabled) {
      return false;
    }
    let refuseMessage: Array<string> = Help.parseArray(typeof props.refuse === 'function' ? props.refuse() : props.refuse);
    if (refuseMessage && refuseMessage.length) {
      onClickRefuse(event, refuseMessage);
    } else {
      let confirmMessage: string | undefined = typeof props.confirm === 'function' ? props.confirm() : props.confirm;
      if (confirmMessage) {
        onClickConfirm(event, confirmMessage);
      } else {
        onClickInvoke();
      }
    }
  };
  return (
    props.mode === 'link' ?
      <a className={'Button-Link text-' + variant + ' disabled-' + disabled} onClick={onClickButton} href="#0">
        <Icon name={props.icon} size="lg" />
        {textHtml}
      </a>
      :
      <button className={'Button-Normal btn btn-sm btn-' + variant} onClick={onClickButton} disabled={disabled}>
        <Icon name={props.icon} size="lg" />
        {textHtml}
      </button>
  )
}

