import personServices from './services/personServices'

const PersonForm=({persons,setPersons,newName,setNewName,newNumber,setNewNumber,setErrorMessage,setMessageType})=>{
    const handleSubmit=(event)=>{
        event.preventDefault()
        
        if (persons.find(person=>person.name===newName)!==undefined){
          if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
            const person = persons.find(person => person.name === newName)
            const changedPerson = { ...person, number:newNumber }
            
            personServices
            .update(person.id,changedPerson)
            .then(returnedPerson => {
              setPersons(persons.map(person => person.name !== newName ? person : returnedPerson))
              setErrorMessage(`Updated ${person.name}`)
              setMessageType(true)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
            })
            .catch(error => {
              setErrorMessage(
                `Person '${person.name}' was already removed from server`
              )
              setMessageType(false)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
              setPersons(persons.filter(person => person.name !== newName))
            })
          }
        }  
        else{
          const newPerson={
            name:newName,
            number:newNumber
          }
          
          personServices
          .create(newPerson)
            .then(response => {
              setPersons(persons.concat(response))
              setErrorMessage(`Added ${response.name}`)
              setMessageType(true)
              setTimeout(() => {
                setErrorMessage(null)
              }, 5000)
              })
        }
        setNewName("")
        setNewNumber("")
    }

    const addPerson=(event)=>setNewName(event.target.value)
    const addNumber=(event)=>setNewNumber(event.target.value)
    
    return(
        <form onSubmit={handleSubmit}>
        <div>    
          name: <input onChange={addPerson} value={newName}/>
          number: <input onChange={addNumber} value={newNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm