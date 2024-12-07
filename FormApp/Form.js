import { useState } from 'react';
import Watch from './Watch.js';

export default function AppForm(){
  //Here is the uses of React Hook
  const [set,setTo]=useState({
    title:"Md",
    fisrtName:"",
    lastName:"Molla",
    email:"",
    designation:"Engineer",
})
//Here is the tittle event handler function
function Title(e){
  setTo({
    ...set,
    title:e.target.value
  });
}
//Here is the firstName eventhandler fucntion
function FirstName(e){
  setTo({
    ...set,
    fisrtName:e.target.value
  });
}
//Here is the lastName Handler function
function LastName(e){
  setTo({
    ...set,
    lastName:e.target.value

  });
}
//Here is the email event handler
function Email(e){
  setTo({
    ...set,
    email:e.target.value
  });
}
//Here is the designation event handler
function Category(e){
  setTo({
    ...set,
    designation:e.target.value
  });
}
//Here the part that will be showed on browser
  return(
    <div>
      <label>
        Title:
        <select className="input-field" value={set.title} onChange={Title}>
          <option value="Md">Md</option>
          <option value="Mr">Mr</option>
          <option value="Ms">Ms</option>
        </select>
      </label>

      <lable>
        Name:
        <input
        placeholder="Type your Name.."
        lassName="input-field"
        value={set.firstName}
        onChange={FirstName} />
      </lable>

      <label>
        Lasttitle:
        <select className="input-field" value={set.lastName} onChange={LastName}>
          <option value="Molla">Molla</option>
          <option value="Hossain">Hossain</option>
          <option value="Uddin">Uddin</option>
          <option value="Chowdery">Chowdery</option>
          <option value="Khan">Khan</option>
        </select>
      </label>

      <label>
        Email:
        <input
         placeholder="Type your Email.."
         lassName="input-field"
         value={set.email}
         onChange={Email}
         />
      </label>

      <label>
        Category:
        <select className="input-field" value={set.designation} onChange={Category}>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Chemist">Chemist</option>
          <option value="Mathematician">Mathematician</option>
          <option value="Physist">Physist</option>

          <option value="Politician">Politician</option>
          <option value="NeuroChemist">NeuroChemist</option>
          <option value="Surgeon">Surgeon</option>
          <option value="Philosoper">Philosoper</option>

        </select>
      </label>
      <hr />
      <div>
        <h1>Here is the information about you, Have a look !💁👌🎍😍</h1>
        <h3>{'NAME: '+set.title+' '}{set.fisrtName+' '}{set.lastName}</h3>
        <h3>{'Your email: '+set.email}</h3>
        <h3>{'You are a/an: '+set.designation}</h3>

      </div>
      <Watch />

    </div>
  );

}

