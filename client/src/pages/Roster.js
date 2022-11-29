import '../App.css';
import {useState} from 'react';

function Roster() {
  const [rosterData, setrosterdata] = useState([]);
  async function getRoster() {
    const serverData = await (await fetch("http://localhost:3001/api/groupmekey/roster")).json();
    setrosterdata(serverData.members.map(gru => 
      <p>{gru.name}</p>
    ))
  }
  getRoster();



  return (
    <div className="App">
      {rosterData}
    </div>
  );
}

export default Roster;