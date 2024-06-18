import React, { useState } from 'react'
import ContactRow from './ContactRow';
import { useEffect } from 'react';
import axios from 'axios';


const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];
export default function ContactList({setSelectedContactId}) {
  const [contacts, setContacts] = useState(dummyContacts)
  console.log("Contacts: ", contacts)

  useEffect(()=>{
    fetchContacts();
  }, [])

  const fetchContacts = async()=>{
    try {
      const response = await axios.get(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users`)
      console.log(response.data)

      setContacts(response.data) 
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <table>
        <thead>
            <tr className='head'>
                <th colSpan="3">Contact List</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Name</strong></td>
                <td><strong>Email</strong></td>
                <td><strong>Phone</strong></td>
            </tr>
        { contacts &&
          contacts.map((contact)=>{
            return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>
          })

        }
        </tbody>
    </table>
  )
}
