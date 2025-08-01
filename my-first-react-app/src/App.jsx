import React, {useState} from "react"
import './App.css'

export default function App(){
  const COLORES = ['red', 'green', 'blue']

  const [ backgroundColor, setBackgroundColor ] = useState(COLORES[0])  
  const [ borderColor, setBorderColor ] = useState(COLORES[0])

  const changeColor = (color) => {
    setBackgroundColor(color)
  }

  const changeBorderColor = (color) => {
    setBorderColor(color)
  }

  const display = (color) => {
    changeColor(color)
    changeBorderColor(color)
  }

  const currentIndex = COLORES.indexOf(backgroundColor)
  return (
    <div className="App" style={{backgroundColor}}>
      <h1>Colores!</h1>
      {COLORES.map((color) =>{
        return(
          <button onClick={() => display(color)} key={color} className={backgroundColor === color ? 'selected' : ''} style={{outline: `5px solid ${currentIndex+1 === COLORES.length ? COLORES[currentIndex- 1]: COLORES[0]}`,}}>{color}</button>
        )
      })}
    </div>
  )
}
