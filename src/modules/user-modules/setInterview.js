import React from 'react';
import Header from '../Header';
import AvailabilityDiv from './../../global-modules/components/WrapperDiv';
import { Grid, Button } from '@material-ui/core';


var array = [['8AM - 9AM', '9AM - 10AM', '10AM - 11AM'],
['8AM - 9AM', '9AM - 10AM', '10AM - 11AM'],
['8AM - 9AM', '9AM - 10AM', '10AM - 11AM'],
['1AM - 2AM', '1AM - 2AM', '1AM - 2AM'],
['2AM - 3AM', '2AM - 3AM', '1AM - 2AM'],
['3AM - 2AM', '1AM - 2AM', '1AM - 2AM']
]

export default function SetInterview(){
    return(
        <div> 
            <Header/>
            <Grid container justify ='center' alignItems='center' direction='column'>
            <AvailabilityDiv array ={array}/>
            </ Grid>
        </div>
    )
}