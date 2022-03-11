import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist'

function App() {
  let date:Date = new Date();
  
  return (
    <div>
      {date}
    </div>    
  );
}

export default App;
