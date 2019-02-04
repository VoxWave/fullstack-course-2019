import React from 'react'
// import sum from 'lodash/sum'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return props.parts.map(p => [
    <div key = {p.id}>
      <Part name = {p.name} exercises={p.exercises} />  
    </div>
  ])
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

// const Total = (props) => {
//   return (
//     <p>yhteensä {sum(props.parts.map(p => p.exercises))} tehtävää</p>
//   )
// }

const Total = (props) => {
  return (
    <p>yhteensä {
      props.parts
        .map(p => p.exercises).
        reduce((s, p) => s + p)
    } tehtävää</p>
  )
}

const Course = ({course}) => {
  return (
      <div>
        <Header course = {course.name} />
        <Content 
          parts = {course.parts}
        />
        <Total parts = {course.parts}/>
      </div>
    )
}
export default Course