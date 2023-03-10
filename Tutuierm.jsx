
import './style.css'
import { useState } from 'react';
function Tutuiernm({imag,names,greats,saths}){
     const[count,setcount]=useState(3)

     function Increse(){
        setcount(count+1)
     }
     function Decrement(){
        setcount(count-1)
     }

    return(
      
    <div className='back'>
       
        <div className="saa" > 
        
            <div><img src={imag} className="saas"/></div>
            <div>
          <h1>name: <span>{saths}</span></h1>
          <h1>avarege: <span>{greats}</span></h1>
          
          <h1>your count: {count}</h1>
          <button onClick={Increse} className="kumar">Incre</button>
          <button onClick={Decrement} className="vani">Decrese</button>
            </div>
        </div>
        </div>
    )
}

export default Tutuiernm;