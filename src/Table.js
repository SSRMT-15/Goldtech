import React from 'react'
import Trow from './Trow'

const Table = (props) => {
    let x=props.data
  return (
    <table border='1'>
        <tr>
        <td>name</td>
            <td>email</td>
        <td>gender</td>
      
     
        
        
        
        </tr>
        {x.map((item,index)=>{
            return <Trow  item={item}  />
        })}
    </table>
  )
}

export default Table