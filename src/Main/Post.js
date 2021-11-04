import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { Grid, Paper } from '@material-ui/core'
import SideNavBar from '../CommonComp/SideNavBar'
import MenuCards from './MenuCards'
import Navbar from '../CommonComp/Navbar3/index'
import Button from '../CommonComp/button/button'

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
        margin: '10px 50px'
    }
}))

function Post() {
    const classes = useStyles();

    return(
        <>
        <SideNavBar />
        <Navbar />
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12} md={12}>
                <Paper className={classes.paper}>
                <div style={{display: 'flex', flexDirection:'row'}}>
                <MenuCards text='Scheduled Post (2)' />
                <MenuCards text='Published Post (10)' />
                <MenuCards text='Draft (2)' />
                <MenuCards text='Paused Post (5)' />
                </div>
                <h4>You have no scheduled posts</h4>
                <Button>Create Post</Button>
                </Paper>
            </Grid>
        </Grid>
        </>
    )
}
export default Post