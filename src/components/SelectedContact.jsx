import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


export default function SelectedContact({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null) 

    useEffect(()=>{
      getApiWithAxios();
    }, [])

    const getApiWithAxios = async () => {
      try {
        const response = await axios.get(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        setContact(response.data)
        console.log("Contact data: ", response.data)
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
      {contact ? (// if contact is not null 
      <div>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Selected Contact Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='col'>Name</th>
              <td>{contact.name}</td>
            </tr>
            <tr>
              <th scope='col'>Email</th>
              <td>{contact.email}</td>
            </tr>
            <tr>
              <th scope='col'>Phone</th>
              <td>{contact.phone}</td>
            </tr>  
            <tr>
              <th scope='col'>Company</th>
              <td>{contact.company.name}</td>
            </tr>
            <tr>
              <th scope='col'>Our Website</th>
              <td>{contact.website}</td>
            </tr>
            <tr>
              <th scope='col'>Street Address</th>
              <td>{contact.address.street}</td>
            </tr>
          </tbody>
        </table>
        
        
      
      <button type='button' className='btn btn-primary' onClick={()=>{setSelectedContactId(null)}}>Return to List</button>
      </div>
    ): (
      <div> loading ...</div>
    )}
   
  
  </div>
  )
}
