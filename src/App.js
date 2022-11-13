import './App.css';
import logo from "./images/logo.png"
import Button from './components/buttons';
import "./css/button.css";
import "./css/pantalla.css";
import "./css/clear.css";
import Pantalla from './components/pantalla';
import Clear from './components/clear';
import {useState} from "react"
import {evaluate} from  "mathjs"

function App() {

  const [input, setInput] = useState("");

  const agregarInput = valor => {
    setInput(input + valor)
  }
  const borrarInput = ()=> { 
    setInput('')
  }
  const calcular = ()=> {
    if(input){
      setInput(evaluate(input))
    } else {
      alert("Ingrese valores para calcular resultado")
    }
  
  }

  return (
    <div className="App">
      <div className="container-logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className='conainer-calculator'>
        <Pantalla input={input}/>
        <div className='row'>
          <Button manejarClic={agregarInput}>1</Button>
          <Button manejarClic={agregarInput}>2</Button>
          <Button manejarClic={agregarInput}>3</Button>
          <Button manejarClic={agregarInput}>+</Button>
        </div>
        <div className='row'>
          <Button manejarClic={agregarInput}>4</Button>
          <Button manejarClic={agregarInput}>5</Button>
          <Button manejarClic={agregarInput}>6</Button>
          <Button manejarClic={agregarInput}>-</Button>
        </div>
        <div className='row'>
          <Button manejarClic={agregarInput}>7</Button>
          <Button manejarClic={agregarInput}>8</Button>
          <Button manejarClic={agregarInput}>9</Button>
          <Button manejarClic={agregarInput}>*</Button>
        </div>
        <div className='row'>
          <Button manejarClic={calcular}>=</Button>
          <Button manejarClic={agregarInput}>0</Button>
          <Button manejarClic={agregarInput}>.</Button>
          <Button manejarClic={agregarInput}>/</Button>
        </div>
        <div className='row'>
          <Clear manejarClear={borrarInput}>Clear</Clear>
        </div>
      </div>
    </div>
  );
}

export default App;
