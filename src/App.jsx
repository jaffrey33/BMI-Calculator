import { useEffect, useState } from "react"
import './style.css'

export default function App(){
  const [weight,setWeight] = useState(60)
  const [height,setHeight] = useState(180)
  const [bmi,setBmi] = useState(0)
  const [result,setResult] = useState('')


  const calcBMI = (event) =>{

    event.preventDefault()
    let bmi = (weight / height/height)* 10000
    setBmi(bmi.toFixed(1))

    if (bmi <= 18.5){
      setResult('Under Weight')
    }
    else if(bmi > 18.5 || bmi <=24.9){
      setResult('Normal Weight')
    }
    else if(bmi > 25 || bmi <=29.9){
      setResult('Overweight')
    }
    else if(bmi >= 30){
      setResult('Obese')
    }
    
  }

 
 
  return(
   
    <>
      <div className="center">
        
        <div className="card">
          <div className="tools">
            <div className="circle">
              <span className="red box"></span>
            </div>
            <div className="circle">
              <span className="yellow box"></span>
            </div>
            <div className="circle">
              <span className="green box"></span>
            </div>
          </div>
            
          <div className="card-content">
          <h2>BMI Calculator</h2>
            <form action="" onSubmit={calcBMI}>

              <label htmlFor="">Weight(kg)</label>
              <input  value ={weight} onChange = {(event) => setWeight(event.target.value)}/>

              <label htmlFor="">Height(cm)</label>
              <input  value = {height}  onChange = {(event) => setHeight(event.target.value)}/>

              <button type="submit" className="btn">Calculate</button>
            </form>
            
            <div className="result">
              <p></p><strong>{bmi}</strong>
            </div>
            <h2>{result}</h2>
    
          </div>
        </div>

      </div>
    </>
  )
}