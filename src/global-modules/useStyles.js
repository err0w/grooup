import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
    logoStyle : {
        flex: 1
    },
    list: {
        width: 250
    },
    wrapperDiv:{
       background: '#FFDFD',
       border: '1px solid rgba(0, 149, 189, 0.3)',
       boxSizing: 'border-box',
       borderRadius: '20px',
       marginTop: '1%'
    },
    interviewDivWithActions:{
        background: '#FFDFD',
        border: '1px solid rgba(0, 0, 0)',
        boxSizing: 'border-box',
        marginTop: '1%'
     },
    interviewDivWithActionButtons: {
        border: '1px solid black', 
        width:'100%', 
        position: 'relative'
    },
    timeButtons: {
        display: 'flex',
        color: '#13BD20',
        fontSize: '18px',
        fontStyle:'normal',
        fontWeight: 'normal',
        lineHeight: '27px',
        backgroundColor: 'rgba(38, 188, 0, 0.1)',
        borderRadius: '4px',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius:0,
        padding: '4px',
        marginBottom: '10px',
        alignItems: 'center',
    }
}));

export default useStyles;