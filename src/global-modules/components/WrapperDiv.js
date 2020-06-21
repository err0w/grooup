import React from 'react';
import Paper from '@material-ui/core/Paper'
import { Grid, Button } from '@material-ui/core';
import useStyles from './../../global-modules/useStyles';


const AvailabilityDiv = (props) => {
    const classes = useStyles();
    var startIndex = 0;
    var endIndex = 3;
    var timeArray = props.array.slice(startIndex,endIndex)
    const handleNext = () => {
        startIndex = startIndex + 1;
        endIndex = endIndex + 1;
        console.log(endIndex)
        timeArray = props.array.slice(startIndex,endIndex)
    }
    const handlePrev = () => {
        startIndex = startIndex - 1;
        endIndex = endIndex - 1;
        
    }
    const PaperTime = (props) => {
        return(
                props.timeSlots.map((time) => {
                    return( <Grid item xs = {10} justify='center' alignItems='center' direction='row' style={{}}>
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
            {timeArray.map((arr)=> {
                return(
                    <Grid container item xs = {12} sm={4} justify='center' alignItems = 'center'>
                    <FormColumn items = {arr}/>
                    </Grid>
                )
            })}
            <Button variant='contained' color = 'primary' onClick = {handlePrev}>Prev</Button>
            <Button variant='contained' color = 'primary' onClick = {handleNext}>Next</Button>
        </Grid> 
    )
            
        
}

export default AvailabilityDiv;