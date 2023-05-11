import React from 'react'
import { useState } from 'react'

const Trow = ({item}) => {
    console.log(item)

    let [name,setName]=useState(item.name)
    let [email,setEmail]=useState(item.email)
    let [gender,setGender]=useState(item.gender)

function changeName(e){
    console.log(e.target)
}


  return (

    <tr>
        <td>  {name} </td>

        <td>{email}</td>
 
  
    <td>{gender}</td>
    </tr>
  )
}

export default Trow