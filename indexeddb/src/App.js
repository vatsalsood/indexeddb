import React, { useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { viewNotes } from './viewNotes'

import { createDB, addNotes } from './processSave.js';

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const useStyles = makeStyles({
    table: {
      maxWidth: 650,
    },
  });

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      { title, body }
    ])
    console.log(notes);
    setTitle('')
    setBody('')
  }

  const removeNote = (title) => {
    setNotes(notes.filter((note) => note.title !== title))
  }

  useEffect(() => {
    createDB("test", 1);
  }, [])

  return (
    <div className="App">
      <div>
        <h1>Notes</h1>

        <p>Add note</p>
        <form onSubmit={addNote}>
          <TextField
            id="standard-full-width"
            label="Add Title"
            style={{ margin: 8 }}
            margin="normal"
            value={title} onChange={(e) => setTitle(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }} />
          <br />

          <TextField
            id="standard-full-width"
            label="Add Body"
            style={{ margin: 8 }}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <br />
          <Button variant="contained" color="primary">Add note</Button>
        </form>
        <button onClick={(e) => { e.preventDefault(); addNotes(notes) }}>Save Note</button>
      </div>

      <viewNotes notes={notes} />
    </div>
  );
}

export default App;
