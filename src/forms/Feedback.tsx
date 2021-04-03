import React, { CSSProperties } from 'react'
import { Icon } from './Icon';
import styles from './Feedback.css'

type Value = {
    type: 'info' | 'error' | 'warning' | 'success' | '',
    message: string
}
const ICON = {
    'info': 'info-circle',
    'error': 'times-circle',
    'warning': 'exclamation-circle',
    'success': 'check-circle',
    '': 'circle'
}
const COLOR = {
    'info': 'info',
    'error': 'danger',
    'warning': 'warning',
    'success': 'success',
    '': 'default'
}

interface Props {
    hide?: boolean,
    value?: Value,
    type?: 'info' | 'error' | 'warning' | 'success' | '',
    message?: string,
    icon?: string,
    color?: string,
    children?: any,
    size?: 'sm' | 'md' | 'lg',
    className?: string
    style?: CSSProperties
}

export const Feedback: React.FC<Props> = (
    {
        hide = false,
        value,
        icon,
        type = '',
        size = 'sm',
        color,
        message = '',
        className = '',
        children,
        ...others
    }
) => {
    if (hide) {
        return null;
    }
    if (value) {
        type = value.type;
        message = value.message;
    }
    if (!message) {
        return null;
    }
    icon = icon ? icon : ICON[type];
    color = color ? color : COLOR[type];
    console.log('styles',styles);
    
    return (
        <div className={`${styles.feedback} feedback-${type} feedback-${size} text-${color} ${className}`} {...others}>
            <Icon name={icon} family="fa" className="mr-1" size="1x" />
            <span>{message}</span>
            {children}
        </div>
    )
}
