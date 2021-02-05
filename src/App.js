import './App.css';
import React from 'react';
import NewsCard from './Components/NewCard/index';

class App extends React.Component{


 render(){
  return (
    <div className="app-container">
      <div>Hello Testing</div>
      <NewsCard/>
    </div>
  );
 }
}

export default App;
