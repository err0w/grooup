import React from 'react';
import Header from '../Header';
import AvailabilityDiv from './../../global-modules/components/WrapperDiv';
import { Grid, Button } from '@material-ui/core';
import ResponsiveButton from './../../global-modules/components/ResponsiveButton'
import WrapperDivWithActions from './../../global-modules/components/WrapperDivWithActions';

var array = ['Mon, June 22, 2020, 8PM', 'Mon, June 22, 2020, 10PM', 'Mon, June 22, 2020, 12AM']
export default function ViewSlots(){
    return(
        <div> 
            <Header/>
            <Grid container justify ='center' alignItems='center' direction='column'>
            <WrapperDivWithActions timeArray ={array} title={'Your Scheduled Interview:'} buttonText = {'Book Interview'} 
            dialogTitle={'Cancel Interview'}/>
            <WrapperDivWithActions timeArray ={array} title={'Your Availability:'} buttonText = {'Add Availability'}
            dialogTitle={'Cancel Availability'}/>
            </ Grid>
        </div>
    )
}