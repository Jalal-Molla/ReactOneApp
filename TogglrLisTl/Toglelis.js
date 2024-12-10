import { useState } from 'react';
 const Buses=[
  {id:0,title:'HANIF',seen:false},
  {id:1,title:'SAKURA',seen:false},
  {id:2,title:'ENA',seen:false},
  {id:3,title:'UNIQUE',seen:false},
  {id:4,title:'VOLVO',seen:false},
 ];
 const coloring={
    div1:{
        backgroundColor:'purple',
        width:'200px',
        color:'black',
        padding:'10px',
        margin:'10px',
        border:'2px solid black'
        //backgroundImage: "url('easmile.png')",


    },
    div2:{
        backgroundColor:'darkgreen',
        width:'200px',
        color:'red',
        padding:'10px',
        margin:'10px'
        //backgroundImage: "url('jalal.jpeg')",
    }
 }

 export default function App(){
  const [mylist,setMyList]=useState(Buses);
  const [yourlist,setYouList]=useState(Buses);

  function MylistToggle(busid,Bseen){
    const myNext=[...mylist];// Here I am creating the copy of mylist
    const bsid=myNext.find(a=>
        a.id===busid
    );
    bsid.seen=Bseen;
    setMyList(myNext); //Updated the list by id number
  }
  function YourListToogle(busid,Bseen){
    const yournext=[...yourlist];
    const bsid=yournext.find(a=>
        a.id===busid
    );
    bsid.seen=Bseen;
    setYouList(yournext);

  }
  return(
    <div>
        <h1>Here are the Branded Buses of Bangladesh!</h1>
        <hr />
        <div style={coloring.div1}>
        <h3>Here is the bust list for me!</h3>
        <hr />
        <Items
        buslist={mylist}
        onToggle={MylistToggle}
        />
    </div>
    <div style={coloring.div2}>
        <h3>Here is the bus list for your</h3>
        <hr />
        <Items
        buslist={yourlist}
        onToggle={YourListToogle}
        />
        </div>

    </div>
  );
 }


 function Items({buslist,onToggle}){
    return(
        <ol>
            {buslist.map(bsid=>
                <li key={bsid.id}>
                    <label>
                        <input
                        type="checkbox"
                        checked={bsid.seen}
                        onChange={e=>{
                            onToggle(
                                bsid.id,
                                e.target.checked

                            );
                        }}
                        />
                        {bsid.title}
                    </label>
                </li>
            )}

        </ol>
    );
 }
