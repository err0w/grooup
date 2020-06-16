import React from 'react';
import Paper from '@material-ui/core/Paper'
import { Grid } from '@material-ui/core';
import useStyles from './../../global-modules/useStyles'


{/* <Grid item xs = {12}>
<Paper className = {classes.timeButtons}>8.30PM - 9.30PM</Paper>
</Grid>
<Grid item xs = {12}>
<Paper className = {classes.timeButtons}>8.30PM - 9.30PM</Paper>
</Grid> */}

const WrapperDiv = (props) => {
    const classes = useStyles();

    const PaperTime = (props) => {
        return(
                props.timeSlots.map((time) => {
                    return( <Grid item xs = {12} justify='center' alignItems='center' direction='row'>
                            <Paper className = {classes.timeButtons}>{time}</Paper>
                            </Grid>
                        )
                })
        )
    }
        const FormColumn = (props) => {
            return(
                <React.Fragment>
                   <PaperTime timeSlots={props.items} />
                </React.Fragment>
            );
        }
        return(
            <Grid container spacing = {1} xs={12} sm={8} spacing = {2} justify='center' alignItems='center' direction='row' className={classes.wrapperDiv}>
                {props.array.map((arr)=> {
                    return(
                        <Grid container item xs = {12} sm={3}>
                        <FormColumn items = {arr}/>
                        </Grid>
                    )
                })}
            </Grid> 
        )
            
        
}

export default WrapperDiv;