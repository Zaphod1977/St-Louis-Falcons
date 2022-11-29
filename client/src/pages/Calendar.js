import '../App.css';
import {useState} from 'react';

function Calendar() {
  const [calendarData, setcalendardata] = useState([]);
  async function getCalendar() {
    const serverData = await (await fetch("http://localhost:3001/api/groupmekey/calendar")).json();
    setcalendardata(serverData.events.map(ev => 
      <p>{ev.name}</p>
    ))
  }
  getCalendar();



  return (
    <div className="App">
      {calendarData}
    </div>
  );
}

export default Calendar;