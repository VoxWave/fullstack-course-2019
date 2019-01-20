import React from 'react'
import ReactDOM from 'react-dom'

const Hello = (props) => {  
  return (    
    <div>      
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>    
    </div>  
  )
}
const App = () => {
  const nimi = "Voggo"
  const ika = "100"
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="VoxWave" age={new Date().getFullYear() - 1994}/>
      <Hello name={nimi} age={ika}/>
    </>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))