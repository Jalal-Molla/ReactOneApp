import { useState } from 'react';
let nextId=0;

export default function App(){
  const [name,setName]=useState('');
  const [elements,setElement]=useState([]);

  const coloring={
    div1:{
      backgroundColor:'purple',
      width:'500px',
    },

    div2:{
      backgroundColor:'black',

      // padding:'10px',
      margin:'2px',
      color:'white',
      border:'2px solid yellow',


    }
  }

  return(
    <div>
      <h1>Here is the list of you!</h1>
      <input
      placeholder="Type message"
      value={name}
      onChange={e=>setName(e.target.value)}
      />

      <button
      onClick={()=>{
        setElement([
          ...elements,
          {
            id:nextId++,
            name:name,

          }
        ]);
      }}
      >AddMe</button>
      <div style={coloring.div1}>

        <ol>
          {elements.map(ele=>(
              <div style={coloring.div2}>
            <li key={ele.id}>{ele.name}
              <button
              onClick={()=>{
                setElement(
                  elements.filter(a=>
                    a.id !==ele.id
                  )
                );

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
