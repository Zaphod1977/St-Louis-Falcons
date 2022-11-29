import '../App.css';
// import * as dotenv from 'dotenv';
// dotenv.config();

function Calendar() {
    console.log("is this working");
    let calendarData;
    async function getCalendar() {
    calendarData = await fetch("http://localhost:3001/api/groupmekey/calendar")}
    getCalendar();

  return (
    <div className="App">
    {calendarData}
    </div>
  );
}

export default Calendar;