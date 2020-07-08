import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link,BrowserRouter as Router,Route} from "react-router-dom";

import usersList from './userslist';
import Addexercise from './addexercise';
import exerciseList from './exerciseList';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(3),
    },
    title: {
      flexGrow: 1,
    },
  }));


export default  function Navbar() {
  
    const classes = useStyles();
  
    
    return (

    <Router>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>Exercise Tracker</Typography>
          <Button className={classes.menuButton} color="inherit" component={Link} to="/exercises/add">Add Exercises</Button>
          <Button className={classes.menuButton} color="inherit" component={Link} to="/users">Users</Button>

        </Toolbar>
      </AppBar>

      <Route path="/" exact component={exerciseList} />
      <Route path="/users" component={usersList} />
      <Route path="/exercises/add" component={Addexercise} />


    </Router>
    )}



    