import React, { CSSProperties } from 'react'

type Props = {
    hide?: boolean,
    name: string,
    size?: string,
    color?: string,
    family?: string,
    className?: string,
    append?: boolean,
    style?: CSSProperties
}
export const Icon: React.FC<Props> = (
    {
        hide = false,
        append = false,
        name = 'check',
        size = '',
        color = '',
        family = 'fa',
        className = '',
        ...others
    }
) => {
    if (hide) {
        return null;
    }
    const _size = size ? `${family}-${size}` : '';
    const _color = color ? `text-${color}` : '';
    const _append = append? 'input-group-text' : '';
    const _icon = <i className={`${_append} ${family} ${family}-${name} ${_size} ${_color} ${className}`} {...others} />

    return append ? <span className="input-group-prepend">{_icon}</span> : _icon
}
