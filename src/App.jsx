import React from "react";
import Demo from "./components/demo-customizedWeek";
import './App.css'
import SideBar from "./teammates/SideBar";

// render(<Demo />, document.getElementById("root"));

const App =()=>{
  return (
  <div>
    <div className='style'>
      <h2>InterCalendar</h2>
    </ div>
    <div className='calendar'>
    <Demo/>
    </ div>
  </ div>
  );
}

export default App;