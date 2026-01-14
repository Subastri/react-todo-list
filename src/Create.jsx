import React, { useState } from 'react'


const Create = () => {
    const[items,setItems]=useState([]);
    const [input, setInput] = useState(""); 
    // using named function
    const handledAdd=()=>{
      setItems([...items,input]) 
      setInput("");  /* e = the message about “something happened”

                                    e.target = the element where it happened

                                    e.target.value = the current content/value of that element  
      
      
                                        */
      
    }
    console.log(items);
    

    function add(e){
      setInput(e.target.value)
    }


/*

Initial state:

input = ""
items = []


User types “Apple”

onChange triggers → setInput("Apple")

React re-renders → input box shows "Apple"

User clicks “Add” button

handleAdd() runs → setItems([...items, input]) → items = ["Apple"]

setInput("") → input box cleared

User types “Banana” and clicks Add

items = ["Apple", "Banana"]

input = ""


*/

    
   // Named function with a parameter
const handledDelete = (indexToDelete) => {
  setItems(items.filter((_, index) => index !== indexToDelete));
};

return (
  <div className="create-container">
    <input 
      value={input} 
      onChange={add}
      placeholder="Type something"
    />
    <button onClick={handledAdd}>Add</button>
    
    <h3>Items List:</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {item}
          <button onClick={() => handledDelete(index)}>delete</button>
        </li>
      ))}
    </ul>
  </div>
)



}

export default Create
