import React from 'react'
import { Feedback } from 'hiska-react-cc'

export const FeedbackCase = () => {
    return (
        <div>
            <Feedback type="error" message="Error Message" />
            <Feedback type="warning" message="Warning Message" />
            <Feedback type="success" message="Success Message" />
            <Feedback type="info" message="Info Message" />
            <Feedback message="Default Message" />
        </div>
    )
}
