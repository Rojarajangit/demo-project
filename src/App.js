import { useState } from 'react'
import './App.css'
import Second from './Second';
import StateAndProp from './StateAndProp';



function App() {
  const [first, setfirst] = useState('roja')
  const [email, setemail] = useState("roja@gmail.com")
  const [Exp, setExp] = useState(10)
  const [last, setlast] = useState('rajan')
  return (
    <div className="App">
      {first}
    
    <StateAndProp first={first}Exp={Exp}last={last}/>
    
    <Second first={first} email={email}/>
      
    </div>
  );
}

export default App;
