import React from 'react';
import Paper from '@material-ui/core/Paper'
import { Grid, Typography, Button, TextField, Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import useStyles from './../../global-modules/useStyles';

const CancelDialog = (props) => {
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return(
        <div>
            <Button variant = 'contained' color='primary' style ={{float: 'right'}} onClick = {handleOpen}>
                Cancel
            </Button>
            <Dialog fullWidth sm={10} open ={open} onClose={handleClose} aria-labelledby='form-dialog-title' sm = {12}>
            <DialogTitle>
                {props.title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To Cancel, please let us know the reason
                </DialogContentText>
                <TextField
                    id="outlined-multiline-static"
                    label="Cancellation Reason"
                    multiline
                    rows={12}
                    defaultValue="I don't know what to do"
                    variant="outlined"
                    style={{width: '-webkit-fill-available'}}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color='primary'>Go Back</Button>
                <Button onClick={handleClose} color='primary'>Cancel</Button>
            </DialogActions>
            </Dialog>
        </div>
    )
}

const WrapperDivWithActions = (props) => {
    const classes = useStyles();
    const ScheduleDivWithCancelButton = (props) => {
        return(
            <Box component='span' display='inline' p={1} m = {1} className = {classes.interviewDivWithActionButtons}>
                <div style = {{display: 'inline', top: '30%', position: 'absolute'}}>
                    {props.time}
                </div>
                <CancelDialog title={props.dialogTitle} />
            </Box> 
        )
    }

    const ActionDiv = (props) => {
        return(
            <Box component = 'span' display= 'inline' p={1} style={{width: '100%'}}>
                <Button variant = 'contained' color = 'primary' style={{float:'right'}}> 
                    {props.buttonText}
                </Button>
            </Box>
        )
    }
    return(
        <React.Fragment>
            <Grid container spacing = {1} xs={12} sm={8} spacing = {2} direction='row' style={{marginTop:'2%'}}>
    <Typography variant='h6'>{props.title}</Typography>
            </Grid>
            <Grid container spacing = {1} xs={12} sm={8} spacing = {2} direction='row' className={classes.interviewDivWithActions}>
                {props.timeArray.map((arr) => {
                    return(<ScheduleDivWithCancelButton time={arr} dialogTitle={props.dialogTitle} />)
                })}
                <ActionDiv buttonText = {props.buttonText}/>
            </Grid>
        </React.Fragment>
    )
}

export default WrapperDivWithActions;