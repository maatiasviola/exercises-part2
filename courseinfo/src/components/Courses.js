import React from 'react'

const Courses=({courses})=>{
    return(
      <div>
        {courses.map(course=><Course key={course.id} name={course.name} parts={course.parts}/>)}
      </div>
    )
}

const Course=({name,parts})=>{
    return(
      <div>
        <Header name={name}/>
        <Content parts={parts}/>
        </div>  
      )
}

const Header=({name})=>{
    return(
        <h2>{name}</h2>
    )
}

const Content = ({parts}) =>{
    const total_exercises=parts.reduce((sum,part)=>sum+part.exercises,0)
    return(
      <div>
         <div>
              {parts.map((part)=>(<Part key={part.id} name={part.name} exercises={part.exercises}/>))}
              <p>Total of {total_exercises} exercises</p>
          </div> 
      </div>
    )
}

const Part = ({name,exercises}) => <p>{name} {exercises}</p>



export default Courses

