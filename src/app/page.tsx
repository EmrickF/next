"use client"
import Image from "next/image";
import { useState} from 'react';
let randomNumber =  Math. floor(Math. random() * 100)

export default function Home() {
  let [tries, setTries] = useState(0)
  let [message, setMessage] = useState("Börja gissa cuhhzo")
  let [input, setInput] = useState(0)

  function guessHandler(){
    
     {
    
      if(input > 100){
      setMessage("Gissa ett tal under 100")
      tries = tries + 1
     }
     if(input < 1){
      setMessage("Gissa ett tal större  än 0")
      tries = tries + 1
     }
      if(input > randomNumber){
        
        setMessage("Gissa lägre")
        tries = tries + 1
      }
      if(input < randomNumber){
        
        setMessage("Gissa högre")
  
        tries = tries + 1
      }
      if(input == randomNumber){
      
        setMessage("DU GISSADE RÄTT!")
    
      }
    
    }
    }
    
    
 
  

  return (
    <div className="Home">
     <h1>Tries:{tries}</h1>
     <h2>{message}</h2>
     <input type="number" onChange={(e)=>setInput(parseInt(e.target.value))} />
     <button onClick={guessHandler}>submit</button>
    </div>

  
  );
}
