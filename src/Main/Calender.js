import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import SideNavBar from '../CommonComp/SideNavBar'

import '../Styles/home.css'

const useStyles = makeStyles((theme) => ({
    grid: {
        width: '100%',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: theme.palette.success.light,
    }
}))

function Calender() {
    const classes = useStyles();

    return(
        <>
        <SideNavBar />
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={12}>
                <Paper className={classes.paper}>1</Paper>
            </Grid>
        </Grid>
        </>
    )
}
export default Calender