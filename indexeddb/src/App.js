import React from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

function App() {
  const testFunction = () => { console.log("test function called"); }
  return (
    <div className="App">
      <Button variant="contained" color="primary" onClick={testFunction}>
        Primary
      </Button>
    </div>
  );
}

export default App;
