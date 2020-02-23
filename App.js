import React from 'react';
import logo from './logo.svg';
import './App.css';
import TableForm from './TableForm';
import Menu from './Menu';

function App() {
  return (
    <div className="App">
     <div id="Cosa">
       <Menu className="Menu"/>
     </div>
      <div className="contenedor">
       <TableForm />
      </div>
    </div>
    
  );
}

export default App;
