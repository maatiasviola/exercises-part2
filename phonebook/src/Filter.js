const Filter=({filter,setFilter})=>{
    const handleFilter=(event)=>{
        setFilter(event.target.value)
      }

    return(
        <div>
            <p>filter shown with</p> 
            <input onChange={handleFilter}></input>
        </div>
      )}

export default Filter