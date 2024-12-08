import { useState } from 'react';

let nextId=0;

export default function App(){
  const [name,setName]=useState('')// Primary state is null That means no value
  const [elements,setElelment]=useState([]);

  const coloring={
    div1:{
      backgroundColor:'purple',
      width:'850px'
    },
    div2:{
      backgroundColor:'white',
      padding:'10px',
      margin:'10px',
      width:'250px',
      border:'2px solid red'

    }
  }

  return(
    <div>
      <h1>Here is the list</h1>
      <input
      placeholder="Type here please"
      value={name}
      onChange={e=>setName(e.target.value)}
      />

    <button

    onClick={()=>{
      elements.push({
        id:nextId++,
        name:name,

      });
    }}>
      AddMe
    </button>

    <div style={coloring.div1}>

      <ol>

        {elements.map(el=>(
          <div style={coloring.div2}>
          <li key={el.id}>{el.name}</li>
          </div>

        ))}
      </ol>
      </div>

      </div>

  );
}
