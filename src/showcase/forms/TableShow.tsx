import React from 'react';
import { Table, Column } from '../../module';

const TableShow: React.SFC = () => {
    let values = [];
    for(let i=0;i<10;i++){
        values.push({
            id:i,
            name:"Hola...."+i
        });
    }    
    return (
        <div>
            <Table pk="1"  values={values}>
                <Column title="Id"  attr="id" width="5"/>
                <Column title="Name"  attr="name"/>
                <Column title="Description"  attr="name"/>
                <Column title="Other"  attr="name"/>
            </Table>
        </div>
    )
}

export default TableShow;