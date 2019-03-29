import React from 'react'

function Counter({value, add, minus}){
  return (
    <div>
      <p>value is:{value}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  )
}

export default Counter
