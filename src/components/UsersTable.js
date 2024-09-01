import { Table } from '@mui/material'
import Sheet from '@mui/joy/Sheet';
import React from 'react'


function UsersTable(props) {

    return (
    <div>
         <Table  
            borderAxis="both" 
         >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Mail</th>
          <th>Phone Number</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        {props.usersList.map((row,index) => (
          <tr className='rows' key={index}>
            <td>{row.fstName}</td>
            <td>{row.lstName}</td>
            <td>{row.mail}</td>
            <td>{row.phoneNum}</td>
            <td>{row.gender}</td>
          </tr>
        ))}
      </tbody>
     </Table>
    </div>
  )
}

export default UsersTable