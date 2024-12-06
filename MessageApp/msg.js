import { useState} from 'react';

export default function MessageApp(){
  const [to,seTo]=useState('Jalal');
  const [message,Setmessage]=useState('') // null message will be set

  return(
    <form onSubmit={(e)=>{
      e.preventDefault();
      setTimeout(()=>{
        alert("Your message is sent "+to+" the message is  : "+message);
      });
    }}>
      To:{' '}
     <select
     value={to}
     onChange={e=>seTo(e.target.value)}
     >
      <option value="Easmile">Jalal</option>
      <option value="Jalal">Easmile</option>
      <option value="Easmile">Jalal</option>
      <option value="Jalal">Easmile</option>
      <option value="Easmile">Jalal</option>
      <option value="Jalal">Easmile</option>
      <option value="Easmile">Jalal</option>
      <option value="Jalal">Easmile</option>

     </select>
     <textarea
     placeholder="Type your message Here"
     value={message}
     onChange={e=>Setmessage(e.target.value)}
     />
     <button type='submit'>Send</button>


    </form>
  );
}
