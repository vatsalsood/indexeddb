import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

export const ViewNotes = (props) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        setNotes(props.notes);
    }, []);

    const removeNote = (title) => {
        setNotes(notes.filter((note) => note.title !== title))
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Body</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notes.length ?
                        notes.map((note) => (
                            <TableRow key={note.title}>
                                <TableCell>{note.title}</TableCell>
                                <TableCell>{note.body}</TableCell>
                                <TableCell>
                                    <IconButton size="small" aria-label="close" color="inherit" onClick={() => removeNote(note.title)}>
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                        : <TableRow>
                            <TableCell>No Notes to show</TableCell>
                        </TableRow>}
                </TableBody>
            </Table>
        </TableContainer>
    )

}; 
