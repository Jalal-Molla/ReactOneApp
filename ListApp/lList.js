import { useState } from 'react';
let nextIn=0;
export default function App(){
  const [name,setName]=useState('');
  const [elements,setElement]=useState([]);

  const coloring={
    div1:{
      backgroundColor:'purple',
      width:'700px'

    },
    div2:{
      backgroundColor:'yellow',
      width:'150px',
      height:"20px",
      color:'red',
      padding:'20px',
      margin:'20px',
      border:'2px solid green',
    }

  }

  return(
    <div>
      <h1>Here is the list of you!</h1>
      <input
      placeholder="Type please"
      value={name}
      onChange={e=>setName(e.target.value)}
      />

      <button
      onClick={()=>{
        setElement([
          ...elements,
          {
            id:nextIn++,
            name:name,
          }
        ]);
      }}
      >AddMe</button>
      <div style={coloring.div1}>

      <ol>

        {elements.map(ele=>(
          <div style={coloring.div2}>
          <li key={ele.id}>{ele.name}</li>
          </div>
        ))}

      </ol>
      </div>
    </div>
  );
}
