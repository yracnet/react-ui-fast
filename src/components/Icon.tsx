import React from 'react';

export interface IconProps {
  name?: string,
  hide?: boolean,
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  size?: 'lg' | '2x' | '3x' | '4x' | '5x',
  text?: string
}
//white-space: nowrap;


export const Icon: React.SFC<IconProps> = (props) => {
  if (props.hide === true || !props.name) {
    return null;
  }
  let className = ' fa fa-' + props.name + ' fa-' + props.size;
  let iconHtml = <i className={className} ></i>;
  return (
    <span className={'pl-1 pr-1 text-' + props.variant}>
      {iconHtml}
      {props.text}
    </span>
  );
}