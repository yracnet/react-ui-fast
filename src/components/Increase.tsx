import React from 'react';
import help from './Help';
import { Button } from './Button';
import { Icon } from './Icon';
import './Increase.scss';

export interface IncreaseProps {
  hide?: boolean,
  title?: string,
  className?: string,
  icon?: string,
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  values?: Array<any>
  minimum: number,
  maximum: number,
  refuseMinimum?: string,
  refuseMaximum?: string,
  appendMode: 'one' | 'row',
  onAppend: (index: number) => void,
  onRemove?: (index: number) => void,
  onContent: (it: any, index: number) => any,
  children?: any | Array<any>
}
//white-space: nowrap;

export const Increase: React.FC<IncreaseProps> = (props) => {
  if (props.hide === true) {
    return null;
  }
  let onAppendInvoke = function (e: any, i: number) {
    props.onAppend(i);
  }
  let onRemoveInvoke = function (e: any, i: number) {
    if (props.onRemove) {
      props.onRemove(i);
    }
  }
  let valuesLength = props.values ? props.values.length : 0;
  let refuseMaximum = valuesLength >= props.maximum ? props.refuseMaximum || 'No puede adjuntar mas de ' + props.maximum + ' elementos' : undefined;
  let refuseMinimum = valuesLength <= props.minimum ? props.refuseMinimum || 'No puede haber menos de ' + props.minimum + ' elementos' : undefined;
  let contentHtml = help.parseArray(props.values)
    .map((it, i) => props.onContent(it, i))
    .map((it, i) => <li key={'increase-item-' + i} className="list-group-item Increase-Item">
      <div className="Increase-Action Animate">
        <Button name="append" icon="plus" onClick={e => onAppendInvoke(e, i)} hide={props.appendMode === 'one'} variant="success" refuse={refuseMaximum} />
        <Button name="append" icon="trash" onClick={e => onRemoveInvoke(e, i)} hide={!props.onRemove} variant="danger" refuse={refuseMinimum} />
      </div>
      <div className="Increase-Content">
        {it}
      </div>
    </li>);

  let appendDefaultHtml = contentHtml.length === 0 || props.appendMode === 'one' ?
    <div className="Increase-Action">
      <Button name="append" icon="plus" onClick={e => onAppendInvoke(e, 0)} variant="success" refuse={refuseMaximum} />
    </div>
    : null;
  let variant = props.variant || 'default';
  let children = help.parseArray(props.children);
  let header = children.find(it => it.type === 'header');
  let title = props.title ? <div>{props.title}</div> : children.find(it => it.type === 'title');
  let body = children.filter(it => it !== header && it !== title);
  let headerHtml = header ? <header className={'card-header bg-' + variant + ' text-white h6'}><Icon name={props.icon} size="lg" />{header.props.children}</header> : null;
  let titleHtml = title ? <strong className='card-title'><Icon name={props.icon} size="lg" hide={!!headerHtml} />   {title.props.children} </strong> : null;

  return <div className="card Increase">
    {headerHtml}
    <div className='card-body'>
      {titleHtml}
      {appendDefaultHtml}
      {body}
    </div>
    <ul className="list-group list-group-flush">
      {contentHtml}
    </ul>
  </div>;
}