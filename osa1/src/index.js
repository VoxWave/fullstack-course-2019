import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Hello = ({name, age}) => { 
  // const name = props.name
  // const age = props.age 
  const bornYear = () => new Date().getFullYear() - age
  return (    
    <div>      
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born {bornYear()}</p> 
    </div>  
  )
}
const App = (props) => {
  const nimi = "Voggo"
  const ika = "100"
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <>
      <h1>Greetings</h1>
      <Hello name="VoxWave" age={24}/>
      <Hello name={nimi} age={ika}/>
      <div>{counter}</div>
    </>

  )
}

const refresh = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

refresh()