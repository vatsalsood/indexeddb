import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';

import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const ViewNotes = (props) => {
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
                    {props.notes.length ?
                        props.notes.map((note) => (
                            <TableRow key={note.title}>
                                <TableCell>{note.title}</TableCell>
                                <TableCell>{note.body}</TableCell>
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
