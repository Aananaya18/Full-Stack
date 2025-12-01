import { useState } from 'react'
//UseState is a Hook that allows you to have state variables in functional components.
//State generally refers to data or properties that need to be tracked in an application.
//When the state of a component changes, the component re-renders to reflect those changes in the UI.

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <span className='counter-label'>Count:</span>
      <span className='counter-value'>{count}</span>
      <button onClick = { () => setCount(prev => prev +1)}> Increase till infinity and beyond </button>
      <button onClick = { ()=> setCount(prev => Math.max(prev -1,-10))}>Decreasing speed, gravity's pulling me down(till -10)</button>
      <button onClick = { () => setCount(0)}>Reset</button>
      <button onClick = { () => setCount(prev => prev +5)}>I'll give you a hands-up of 5</button>
      <button onClick = { () => setCount(prev => Math.abs(prev))}>Uh-Oh!, You should always be Positive</button>
    </div>
  )
}

export default App;

