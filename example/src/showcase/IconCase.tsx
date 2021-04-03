import React from 'react'
import { Icon } from 'hiska-react-cc'

export const IconCase = () => {
    return (
        <div>
            <Icon name="user" size="1x" />
            <Icon name="times" size="2x" color="danger" />

            <Icon name="edit" size="4x" />
            <Icon name="plus-circle" size="5x" className="m-2" />
            <Icon name="plus-circle" size="5x" family="la" />

            <Icon name="trash" size="3x" />
            <Icon name="trash" size="4x" family="la" />
        </div>
    )
}
