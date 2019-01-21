import React from 'react'
import ReactDOM from 'react-dom'
import zip from 'lodash/zip'
import sum from 'lodash/sum'

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return zip(props.part_names, props.part_exercises).map((e) => [
    <Part name = {e[0]} amount={e[1]} />  
  ])
}

const Part = (props) => {
  return (
    <p>{props.name} {props.amount}</p>
  )
}

const Total = (props) => {
  return (
    <p>yhteensä {sum(props.part_exercises)} tehtävää</p>
  )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14
  const part_exercises = [exercises1, exercises2, exercises3]

  return (
    <div>
      <Header course = {course} />
      <Content 
        part_names = {[part1, part2, part3]} 
        part_exercises = {part_exercises} 
      />
      <Total part_exercises = {part_exercises}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))