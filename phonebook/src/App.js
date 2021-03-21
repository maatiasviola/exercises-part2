import React, { useState, useEffect } from 'react'
import Filter from './Filter.js'
import PersonForm from './PersonForm'
import Persons from './Persons'
import personServices from './services/personServices'
import Notification from './Notification'

const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [filter,setFilter]=useState('')
  const [errorMessage,setErrorMessage]=useState(null)
  const [messageType,setMessageType]=useState(true)

  useEffect(() => {
    personServices
    .getAll()
    .then(response => {
        setPersons(response)
      })
  }, [])

  
  return (
    <div>
      <Notification message={errorMessage} messageType={messageType}/>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h2>Add a new</h2>
      <PersonForm persons={persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} setErrorMessage={setErrorMessage} setMessageType={setMessageType}/>
      <h2>Numbers</h2>
      <Persons persons={persons} filter={filter}/>
    </div>
  )
}

export default App
