import { useState } from "react";
let nextId=0;

export default function App(){
  const [name,setName]=useState('');
  const [elements,setEleement]=useState([]);

  const coloring={
    div1:{
      backgroundColor:'purple',
      width:'700px'
    },
    div2:{
      backgroundColor:'yellow',
      width:'250px',
      //padding:'20px',
      margin:'2px',
      color:'black',
      border:'2px solid red'
    }
  }

  return(
    <div>
      <input
      placeholder="Type please......."
      value={name}
      onChange={e=>setName(e.target.value)}
      />

      <button
      onClick={()=>{
        setEleement([
          ...elements,
          {
            id:nextId++,
            name:name,
          }
        ]);
      }}
      >Add</button>
    <button onClick={()=>{
      setEleement([]);
    }}
    >
      FullDelete
    </button>


      <div style={coloring.div1}>

      <ol>

        {elements.map(ele=>(
          <div style={coloring.div2}>
          <li key={ele.id}>{ele.name}
          <button
          onClick={()=>{
            setEleement((
              elements.filter(a=>
                a.id!==ele.id
              )
        ));

          }}
          >Delete</button>
          </li>
          </div>
        ))}

      </ol>
      </div>
    </div>
  );

}
