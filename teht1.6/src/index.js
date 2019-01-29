import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>anna palautetta</h1>
      <div>
      {good}
      <button onClick={() => setGood(left + 1)}>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)