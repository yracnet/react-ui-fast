import React from 'react';
import help from './Help';
import { Button } from './Button';

export interface ActionProps {
  className?: string,
  hide?: boolean,
  children: any | Array<any>
}
//white-space: nowrap;

export const Action: React.FC<ActionProps> = (props) => {
  if (props.hide === true) {
    return null;
  }
  let children = help.parseArray(props.children);
  let actionsHtml = children.map((it, i) => {
    //console.log('--->', it);
    return it.type === Button ? it : <button key={i} className='btn btn-primary' {...it.props}>{it.props.children}</button>;
  });
  return <span className='btn-group mt-1 mb-1'>{actionsHtml}</span>;
}