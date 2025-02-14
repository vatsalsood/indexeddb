import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { ViewNotes } from './ViewNotes'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { createDB, addNotes } from './processSave.js';

function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [mode, setMode] = useState('default');
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    createDB("test");
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const addNote = (e) => {
    e.preventDefault()
    setNotes([
      ...notes,
      { title, body }
    ]);

    setTitle('')
    setBody('')
  }

  const renderComponent = () => {
    if (mode === 'add') {
      return (
        <div>
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
            Save Notes
          </Button>
        </div>
      )
    }
    else if (mode === 'view') {
      return (<ViewNotes notes={notes} />)
    }
  }

  /**
   TODO: Error handling
   TODO: Add ability to add multiple columns
 */
  return (
    <div className="App">
      <h1>Notes</h1>

      <Button variant="contained" style={{ margin: 8 }}
        color="primary" onClick={() => { handleClick(); setMode('add'); }}>Create test db notes</Button>
      <br />

      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Test DB created!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />

      <Button variant="contained" color="primary" style={{ margin: 8 }}
        onClick={() => { setMode('view'); }}>View/remove notes</Button>
      <br />

      <Button variant="contained" color="primary" style={{ margin: 8 }}
        onClick={() => { setMode('add'); }}>Add notes</Button>

      {renderComponent()}
    </div>
  );
}

export default App;
