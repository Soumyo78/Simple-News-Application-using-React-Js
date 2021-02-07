import './App.css';
import React from 'react';
import ApiCalls from './ApiCall';


class App extends React.Component {

  reload = ()=>{
    window.location.reload(true);
  }

  exit = ()=>{
    window.close()
  }

  componentDidMount(){
    setInterval(() => {
      const today = new Date();
      document.getElementById('time-string').innerHTML = `: ${today.toLocaleTimeString('en-US')} |`;
      document.getElementById('date-string').innerHTML = `: ${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`;
    }, 10)
  }

  render(){

    return (
      <div className="app-container">
        <h1>Live Headlines</h1>
        <div className="btn-time-container">
          <button id="reload-btn" className="btn" onClick={this.reload}>Update</button>
          <h3 className="time-date-container">
            Time<span id="time-string"></span>| Date<span id="date-string">Feb 6 2021</span>
          </h3>
          <button id="exit-btn" className="btn" onClick={this.exit}>Exit</button>
        </div>
        <ApiCalls/>
      </div>
    );
  }
  
 }

export default App;
