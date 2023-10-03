
 import React, {useState} from 'react'
import './../styles/App.css';
import Todo from "./Todo";

const App = () => {
  
       
const [value, setvalue] = useState('');
const [data, setdata] = useState([]);


const handleClick = () => {
    setdata([...data, value]);
    setvalue('');
}
const handleDelte = (id) => {
    const newData = data.filter( (item, idx) => idx !== id)
    setdata(newData);
}
  return (
   <div>
        <p>To-Do List</p>
        <input type="text" onChange={(e)=>setvalue(e.target.value)}/>
        <button onClick={handleClick}>Add Todo</button>

        <ul className="todolists">
            {
                data.map( (item, index) => (
                    <li key={index} className="row">
                        {item}
                        <button onClick={ () =>handleDelte(index)}> delete</button>
                    </li>
                    
                ))
            }
        </ul>
    </div>

  )
}

export default App
