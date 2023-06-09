import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');
  
  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleAdd() {
    if (item.trim() == "") return
    const newList = [item.trim(), ...list];
    setList(newList);
    setItem("");
  }
  
  function handleDelete(unwantedItem) {
    const newList = list.filter((item) => item !== unwantedItem);
    setList(newList);
    setItem("");
  }

  return (
    <>
      <h1>To Do List</h1>
      <div className="add">
        <input type="text" value={item} onChange={handleChange}/>
        <button onClick={handleAdd}>Add Item</button>
      </div>
      <div className="todo">
        <ul>
          {list.map((item) => (
            <li>
              <span>{item}</span>
              <button onClick={() => handleDelete(item)}>Delete</button>
            </li>
          ))}
        </ul>
        <button onClick={() => setList([])}>Delete All</button>
      </div>
    </>
  )
}

export default App
