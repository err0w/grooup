import React from 'react';
import Paper from '@material-ui/core/Paper'
import { Grid } from '@material-ui/core';
import useStyles from './../../global-modules/useStyles'
const WrapperDiv = () => {
    const classes = useStyles();
        const FormColumn = () => {
            return(
                <React.Fragment>
                    <Grid item xs = {12} >
                        <Paper className = {classes.timeButtons}>8.30PM - 9.30PM</Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className = {classes.timeButtons}>8.30PM - 9.30PM</Paper>
                    </Grid>
                    <Grid item xs = {12}>
                        <Paper className = {classes.timeButtons}>8.30PM - 9.30PM</Paper>
                    </Grid>
                </React.Fragment>
            );
        }
        return(
            <Grid container spacing = {1} xs={12} sm={8} spacing = {2} justify='center' alignItems='center' direction='row'>
                <Grid container item xs = {12} sm={3}>
                    <FormColumn/>
                </Grid>
                <Grid container item xs = {12} sm={3}>
                    <FormColumn/>
                </Grid>
                <Grid container item xs = {12} sm={3}>
                    <FormColumn/>
                </Grid>
                <Grid container item xs = {12} sm={3}>
                    <FormColumn/>
                </Grid>
            </Grid> 
        )
            
        
}

export default WrapperDiv;