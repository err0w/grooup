import React from 'react';
import Header from '../Header';
import WrapperDiv from './../../global-modules/components/WrapperDiv';
import { Grid, Button } from '@material-ui/core';
import ResponsiveButton from './../../global-modules/components/ResponsiveButton'

var array = [['8PM-9PM', '10PM-11PM', '12AM-1AM'],
             ['9AM-10AM', '12PM-1PM', '2PM-3PM'],
             ['3PM-4PM', '6PM-7PM', '8PM-9PM']]
export default function ViewSlots(){
    return(
        <div> 
            <Header/>
            <Grid container justify ='center' alignItems='center' direction='column'>
            <WrapperDiv array={array} />
            <ResponsiveButton text={'Add Availability'} margin={'5%'}/>
            <ResponsiveButton text={'View Available Slots'} margin={'10px'}/>
            <ResponsiveButton text={'Connect with Recruiters'} margin={'10px'} />
            </ Grid>
        </div>
    )
}