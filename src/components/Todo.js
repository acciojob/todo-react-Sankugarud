import React, {useState} from 'react'

const Todo = () => {
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

        <div className="todolists">
            {
                data.map( (item, index) => (
                    <div key={index} className="row">
                        <p>{item}</p>
                        <button onClick={ () =>handleDelte(index)}> delete</button>
                    </div>
                    
                ))
            }
        </div>
    </div>
  )
}

export default Todo