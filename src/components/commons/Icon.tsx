import React from 'react';
import './Icon.scss';
export type IconVariant = 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
export type IconSize = 'normal' | 'lg' | '2x' | '3x' | '4x' | '5x';
export type IconShape = 'none' | 'circle' | 'square';
export interface IconProps {
  name?: string,
  hide?: boolean,
  variant?: IconVariant,
  size?: IconSize,
  shape?: IconShape,
  text?: string
}
//white-space: nowrap;


export const Icon: React.SFC<IconProps> = (props) => {
  if (props.hide === true || !props.name) {
    return null;
  }
  let classWrap = 'Icon pl-1 pr-1 text-' + props.variant + ' shape-' + props.shape + ' shape-' + (props.size || 'normal') + ' border-' + props.variant;
  let className = 'fa fa-' + props.name + ' fa-' + props.size;
  let iconHtml = <i className={className} ></i>;
  return (
    <span className={classWrap}>
      {iconHtml}
      {props.text}
    </span>
  );
}