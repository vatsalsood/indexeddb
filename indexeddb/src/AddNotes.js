import React, { useEffect, useState } from 'react';

export const AddNotes = () => {
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
        Save Note
</Button></div>
}