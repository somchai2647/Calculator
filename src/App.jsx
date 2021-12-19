import React, { useState } from 'react'
import Calulator from './Calculator';
import SMath from 'string-math';

export default function App() {
  const [Value, setValue] = useState("0")

  const hanldeClick = (e) => {
    try {
      const button = e.target.value
      console.log(button)
      switch (button) {
        case 'clear':
          setValue("0")
          break;
        case '=':
          setValue(`${SMath(Value)}`)
          break;
        case 'delete':
          setValue(`${Value.slice(0, -1)}`)
          break;
        default:
          setValue(Value[0] === "0" || Value[0] === "E" ? button : Value.concat(button))
          break;
      }
    } catch (error) {
      setValue("Error");
    }

  }
  return (
    <div>
      <h1 style={{ fontSize: 50, color: "wheat", textAlign: "center" }}>เครื่องคิดเลข</h1>
      <Calulator buttonHandler={hanldeClick} data={Value} />
    </div>
  )
}
