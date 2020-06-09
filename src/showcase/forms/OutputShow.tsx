import React from 'react';
import { OutputText } from '../../module';

const OutputShow: React.SFC = () => {
    return (
        <div>
            <OutputText name="Text 1" value="Hola...." />
            <OutputText name="Text 2" value="Hola...." />
            <OutputText name="Text 3" value="Hola...." />
        </div>
    )
}

export default OutputShow;