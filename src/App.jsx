import { useState } from 'react'
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);


  function addCount(){
    setCount(step + count);
  }
  function decreaseCount(){
    setCount(count - step);
  }

  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + count); 
  
  const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthOfYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
   <div className='main'>
        <div className="flex flex-col justify-center items-center space-y-2 mb-5">
          <h1 className="text-5xl font-bold">Step: {step}</h1>
          <input
            type="range"
            min="1" 
            max="30" 
            value={step} 
            onChange={(e) => setStep(parseInt(e.target.value, 10))} 
            className="slider w-3/4 "
          />
        </div>
      <Step 
      title = 'Count'
      initial = {count}
      increase = {addCount}
      decrease = {decreaseCount}
      />
      <div>
        <h3> {count} day from today is: 
         {dayOfWeek[futureDate.getDay()]} {monthOfYear[futureDate.getMonth()]} {futureDate.getDate()}, {futureDate.getFullYear()}
        </h3>
      </div>
   </div>
  )
}

export default App

function Step({title, increase, decrease, initial})
{
  return(
    <div className='step-count'>
    <button onClick={decrease} className='red'>
      -
    </button>
    <h1>{title}: {initial}</h1>
    <button onClick={increase} className='green'>
      +
    </button>
  </div>
  )
}