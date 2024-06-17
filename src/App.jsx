import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import ContactList from './components/ContactList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContactList />
    </>
  )
}

export default App
