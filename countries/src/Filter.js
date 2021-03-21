const Filter=({filter,setFilter})=>{
    const handleFilter=(event)=>{
        setFilter(event.target.value)
      }

    return(
        <div>
            <p>filter countries</p> 
            <input onChange={handleFilter}></input>
        </div>
      )}

export default Filter