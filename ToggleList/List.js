import { useState } from 'react';
const Buses=[
    {id:0,title:'HANIF😍',seen:false},
    {id:1,title:'SAKURA🥰',seen:false},
    {id:2,title:'ENA😘',seen:false},
    {id:3,title:'NABIL😻',seen:false},
    {id:4,title:'VOLVO🤩',seen:false},
    {id:5,title:'LABIBA🥳',seen:false},
];

export default function App(){
    const [mylist,setMylist]=useState(Buses);// Here i am using raect hook
    const [youlist,setYoulist]=useState(Buses);
    //Now I am creating handle function
    function HandleMyListToogle(busid,NextSeen){
        const myNext=[...mylist];
        const bsid=myNext.find(a=>
            a.id===busid
        );
        bsid.seen=NextSeen;
        setMylist(myNext);
    }

    function HandleYouLisToogle(busid,NextSeen){
        const youNext=[...youlist];
        const bsid=youNext.find(a=>
            a.id===busid
        );
        bsid.id=NextSeen;
        setYoulist(youNext);
    }

//Here I am creatign CSS
const coloring={
    div1:{
        backgroundColor:'purple',

        margin:'10px',
        color:'magenta',
        border:'3px solid red'
    },
    div2:{
        backgroundColor:'magenta',
        margin:'10px',

        color:'purple',
        border:'3px solid white'
    }
}
// First UI rendering
    return(
        <div>
            <h1>Here is the branded buses of bangladesh!</h1>
            <hr />
            <div style={coloring.div1}>
                <h3>Here is the list for you!</h3>
                <hr />
              <Items
              buslist={mylist}
              onToggle={HandleMyListToogle}
              />
            </div>
            <div style={coloring.div2}>
                <h3>Here is the of me!</h3>
                <hr />
                <Items
                buslist={youlist}
                onToggle={HandleYouLisToogle}
                />
                </div>


        </div>
    );
}
//Seond UiI rendering
function Items({buslist,onToggle}){ // Items i a user defined componenet
    return(
        <ol>
            {buslist.map(bsid=>(
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
            ))}
        </ol>
    );
}
