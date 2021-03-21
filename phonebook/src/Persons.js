import personServices from './services/personServices'

const Persons=({persons,filter})=>{
    const personsToShow=filter==='' 
    ? persons 
    : persons.filter(person=>person.name.toLowerCase().includes(filter))
    
    const eliminatePerson=(id,name)=>{
        personServices
        .eliminate(id,name)
    }
    
    return(
        <div>
            {personsToShow.map(person=>{ 
            return(
            <div key={person.name}>
                <p>{person.name} {person.number}</p> 
                <button onClick={()=>eliminatePerson(person.id,person.name)}>delete</button>
            </div>
            )})}
        </div>
)}

export default Persons