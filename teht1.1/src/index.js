import React from 'react'
import ReactDOM from 'react-dom'
import sum from 'lodash/sum'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return props.parts.map(p => [
    <Part name = {p.name} exercises={p.exercises} />  
  ])
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Total = (props) => {
  return (
    <p>yhteensä {sum(props.parts.map(p => p.exercises))} tehtävää</p>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
    name: 'Reactin perusteet',
    exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila',
    exercises: 14
  }
  const parts = [part1, part2, part3]

  return (
    <div>
      <Header course = {course} />
      <Content 
        parts = {parts}
      />
      <Total parts = {parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))