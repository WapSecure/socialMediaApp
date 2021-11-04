import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import SideNavBar from '../CommonComp/SideNavBar'
import Navbar from '../CommonComp/Navbar2/index'
import TodoCards from './TodoCards'

import '../Styles/home.css'

function createData(Tasks, Status, Assigned, Deadline) {
    return { Tasks, Status, Assigned, Deadline};
  }
  
  const rows = [
    createData('Approve all new accounts and send verification email', 159, 6.0, '12th, October 2021'),
    createData('Approve all new accounts and send verification email', 237, 9.0, '12th, October 2021'),
    createData('Approve all new accounts and send verification email', 262, 16.0, '12th, October 2021'),
    createData('Approve all new accounts and send verification email', 305, 3.7, '12th, October 2021'),
    createData('Approve all new accounts and send verification email', 356, 16.0, '12th, October 2021'),
  ];
  

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        margin: '10px 50px',
        color: theme.palette.text.secondary,
    }
}))

function Task() {
    const classes = useStyles();

    return(
        <>
        <SideNavBar />
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={12}>
            <Navbar />
           
                <Paper className={classes.paper}>
                <h4 style={{textAlign:'left'}}>Top three tasks</h4>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <TodoCards text='Approve all new accounts and send verification email' />
                <TodoCards text='Approve all new accounts and send verification email' />
                <TodoCards text='Approve all new accounts and send verification email' />
                </div>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Tasks</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Assigned To</TableCell>
                            <TableCell align="right">Deadline</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                        <TableRow
                        key={row.Tasks}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.Tasks}
                        </TableCell>
                        <TableCell align="right">{row.Status}</TableCell>
                        <TableCell align="right">{row.Assigned}</TableCell>
                        <TableCell align="right">{row.Deadline}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}
export default Task