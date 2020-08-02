import React, { useEffect, useState } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ViewNotes } from './ViewNotes'

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
    console.log("add note called");
    setNotes([
      ...notes,
      { title, body }
    ]);

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
        <form>
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

          <Button variant="contained" color="primary" onClick={addNote}>Add note</Button>
        </form>

        <br />

        <Button variant="contained" color="primary"
          onClick={(e) => {
            e.preventDefault();
            addNotes(notes)
          }}>
          Save Note
        </Button>

      </div>

      <ViewNotes notes={notes} />
    </div>
  );
}

export default App;
