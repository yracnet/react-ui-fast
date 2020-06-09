import React from 'react';
import { Increase } from '../../module';

const IncreaseShow: React.SFC = () => {
  let values = [];
  let onAppend = function(){
    values.push(1);
  };
  let onContent = function(it:any, i:number){
    return <h1>
      Elemento #{i} - #{it}
    </h1>;
  };
  return (
    <div>
      <Increase  minimum={0} 
      maximum={2} 
       appendMode="row"
        onAppend={onAppend}
        onContent={onContent}/>
    </div>
  )
}
export default IncreaseShow;