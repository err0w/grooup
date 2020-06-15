import React from 'react';
import { Grid } from '@material-ui/core';

const WrapperDiv = () => {
        const wrapper = <Grid
                        container
                        direction='row'
                        justify='center'
                        alignItems='center'
                        >
                        <Grid item sm = {12} style={{backgroundColor:'black'}} ></Grid>
                        </Grid>
    
    return(wrapper)
}

export default WrapperDiv;