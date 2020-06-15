import React from 'react';
import Header from '../Header';
import WrapperDiv from './../../global-modules/components/WrapperDiv';
import { Grid } from '@material-ui/core';

export default function ViewSlots(){
    return(
        <div> 
            <Header/>
            <Grid container justify ='center' alignItems='center'>
            <WrapperDiv />
            </ Grid>
        </div>
    )
}