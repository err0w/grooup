import { AppBar, makeStyles, Toolbar, Typography, Menu, SwipeableDrawer } from '@material-ui/core';
import React from 'react';
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import useStyles from './../global-modules/useStyles';
import MenuItem from '@material-ui/core/MenuItem'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText'
const Header = () => {
    const classes = useStyles();
    const user = localStorage.getItem('user'); 
    const [anchorEl, setAnchorEl] = React.useState(null);
    const auth = !(user === null && user === 'null' && user === undefined)?true:false;
    const open = Boolean(anchorEl)
    const [state, setState] = React.useState({
        left: false
    })
    //handles menu that appears on click of user Icon
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = (event) => {
        setAnchorEl(null)
    }

    //functions to handle drawer
    const toggleDrawer = (anchor, open) => (event) => {
        if(event.type === 'keydown' && (event.key == 'Tab' || event.key === 'Shift')){
            return
        } 
        setState({...state, [anchor]: open})
    }

    const list = (anchor) => (
        <div
        className = {classes.list}
        role='presentation'
        onClick = {toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor,false)}>
            <List>
                {['Home', 'Dashboard', 'Set Availablity', 'Schedule Interview', 'Recruiter Connect'].map((text, index)=>(
                    <ListItem button key = {text}>
                        <ListItemIcon><InboxIcon /></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List> 
            
        </div>
    )

    //returns the header
    return(
        <AppBar position='static'>
            <Toolbar>
                <IconButton 
                edge='start' 
                color = 'inherit' 
                aria-label='menu'
                onClick={toggleDrawer('left', true)}>
                    <MenuIcon/>
                </IconButton>
                <SwipeableDrawer
                anchor= 'left'
                open = {state['left']}
                onClose = {toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}
                >
                    {list('left')}
                </SwipeableDrawer>
                <Typography className={classes.logoStyle}>
                    grooup
                </Typography>
                {auth && (
                <div>
                    <IconButton
                    color = 'inherit'
                    aria-aria-haspopup="true"
                    onClick={handleMenu}>
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id='menu-header'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical:'top',
                            horizontal: 'right'
                        }}
                        keepMounted
                        transformOrigin ={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open ={open}
                        onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Help</MenuItem>
                            <MenuItem onClick={handleClose}>Log Out</MenuItem>
                        </Menu>
                </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Header;