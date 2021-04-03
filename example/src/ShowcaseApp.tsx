import React, { useState } from 'react'

import { IconCase } from './showcase/IconCase'
import { FeedbackCase } from './showcase/FeedbackCase'
import { GridCase } from './showcase/GridCase'
import { PanelCase } from './showcase/PanelCase'
import { FormItemCase } from './showcase/FormItemCase'
import { ComplexCase } from './showcase/ComplexCase'
import 'hiska-react-cc/dist/index.css'


const ShowcaseApp = () => {
  const [name, setName] = useState('form-item');
  return (
    <div className="container">
      <select onChange={e => setName(e.currentTarget.value)}>
        <option value='complex'>Complex Example</option>
        <optgroup label="Others">
          <option value='icon'>Icon</option>
          <option value='feedback'>Feedback</option>
        </optgroup>
        <optgroup label="Layouts">
          <option value='panel'>Panel</option>
          <option value='grid'>Grid</option>
        </optgroup>
        <optgroup label="Forms">
          <option value='form-item'>FormItem</option>
        </optgroup>
      </select>
      <h1>{name}</h1>
      {name === 'complex' && <ComplexCase />}
      {name === 'icon' && <IconCase />}
      {name === 'feedback' && <FeedbackCase />}
      {name === 'grid' && <GridCase />}
      {name === 'panel' && <PanelCase />}
      {name === 'form-item' && <FormItemCase />}
    </div>
  )
}

export default ShowcaseApp
