import React, { useState } from 'react'
import Calulator from './Calculator';
import SMath from 'string-math';

export default function App() {
  const [Value, setValue] = useState("0")
  const operator = ["+", "-", "*", "/"];

  const hanldeClick = (e) => {
    const button = e.target.value
    const lastchar = Value.charAt(Value.length - 1);
    console.log(button)
    try {
      switch (button) {
        case 'clear':
          setValue("0")
          break;
        case '=':
          if (!operator.includes(lastchar)) setValue(`${SMath(Value)}`)
          break;
        case 'delete':
          if (Value.length > 1) setValue(`${Value.slice(0, -1)}`)
          break;
        default:
          if (button !== lastchar) setValue(Value[0] === "0" || Value[0] === "E" ? button : Value.concat(button))
          break;
      }
    } catch (error) {
      setValue("Error");
    }

  }
  return (
    <div>
      <h1 style={{ fontSize: 50, color: "white", textAlign: "center" }}>เครื่องคิดเลข</h1>
      <Calulator buttonHandler={hanldeClick} data={Value} />
      <div className='footer'>
        <p>ณัชพล มะลิ เลขที่ 04</p>
        <p>ศักดินนท์ คำมาสุข เลขที่ 14</p>
        <p>สมชาย บริบูรณ์ เลขที่ 16</p>
      </div>
    </div>
  )
}
