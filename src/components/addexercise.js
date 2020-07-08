

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DatePicker from 'react-date-picker';
import Button from '@material-ui/core/Button';
import axios from 'axios';

   
const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '100ch',
          },
        },
        margin: {
          margin: theme.spacing(1),
        },
        extendedIcon: {
          marginRight: theme.spacing(1),
        },
      }));


function Addexercise() {
    const classes = useStyles();

    const [dateinfo, onChange] = useState(new Date());
    const [exercise,setExercise]=useState({
        username:"",
        description:"",
        duration:"",
        date:new Date()
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setExercise(prevInfo => {
          return {
            ...prevInfo,
            [name]: value,
          };
        });
        window.location='/';
      }

      function onSubmit(event)
      {
        event.preventDefault();
        console.log(exercise);
        axios.post('http://localhost:5000/exercises/add',exercise)
        .then(res =>console.log(res.data));


        setExercise({
          username:'',
          duration:'',
          description:'',
          date: new Date()

        });


        
      }
  return (
      <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>Create new exercise</Typography>
            <form className={classes.root} noValidate autoComplete="off">
           
           
            <Typography variant="subtitle1" className={classes.title}>Enter Username</Typography><br/>
            <TextField 
            name="username" 
            value={exercise.username}
            onChange={handleChange} 
            id="outlined-basic" 
            variant="outlined"/>
            <br/>
           
            <Typography variant="subtitle1" className={classes.title}>Enter Description</Typography><br/>
            <TextField 
            name="description" 
            value={exercise.description}
            onChange={handleChange} 
            id="outlined-basic"
            variant="outlined"/><br/>
           
            <Typography variant="subtitle1" className={classes.title}>Enter Duration</Typography><br/>
            <TextField 
            name="duration" 
            value={exercise.duration}
            onChange={handleChange} 
            id="outlined-basic" 
            variant="outlined"/><br/>
           
            <Typography variant="subtitle1" className={classes.title}>Enter Date</Typography><br/>
            <div>
            <DatePicker
                onChange={onChange}
                value={dateinfo}
            />
            </div>

            <Button className={classes.margin} size="small" onClick={onSubmit}  variant="contained" color="primary">Submit</Button>

            </form>

    </div>
    
  );
}
export default Addexercise;
