import React from 'react'
import { useState, useEffect } from "react";
import axios from 'axios'
import Filter from './Filter'

const App=()=> {
  const [countries,setCountries]=useState([])
  const [filter,setFilter]=useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
  }, [])

  

  const Filtered=()=>{
    const filteredCountries = countries.filter(country=>country.name.toLowerCase().includes(filter))

    if (filteredCountries.length>10 ||filteredCountries.length===0){
      return(<p>Too many matches, specify another filter</p>)
    }else if (filteredCountries.length<10 && filteredCountries.length>1){
      return(
        <div>
          {filteredCountries.map(country=>{
          return(
          <div key={country.name}>
            <p>{country.name}</p>
            <button onClick={()=>setFilter(country.name.toLowerCase())}>show</button>
          </div>
          )}
    )}
        </div>
      )    
    }else if (filteredCountries.length===1){
      return(
        <div>
          {filteredCountries.map(country=>{
          return(
            <div key={country.name}>
              <h1>{country.name}</h1>
              <h4>Capital: {country.capital}</h4>
              <h4>Population: {country.population}</h4>
              <h2>Languages</h2>
              {country.languages.map(language=><p key={language.name}>{language.name}</p>)}
              <img src={country.flag} alt={country.name}></img>
            </div>
            )
          }
        )}
        </div>
      )
  }
  }
  

  return(
    <div>
      <Filter filter={filter} setFilter={setFilter}/>
      <Filtered/>
    </div>
  )
}

export default App;
