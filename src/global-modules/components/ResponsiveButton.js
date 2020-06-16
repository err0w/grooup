import React from 'react';
import { Grid, Button } from '@material-ui/core';

const ResponsiveButton = (props) => {
    return(
        <Grid container justify='center' alignItems='center' direction='row' md={4} sm={8} xs={10} style={{marginTop:props.margin}}>
            <Button variant='contained' color='primary' style={{ width:'100%'}} width={0.5}>
                 {props.text}
            </Button>
        </Grid> 
    )
}

export default ResponsiveButton;