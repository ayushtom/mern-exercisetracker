import React , { useState,useEffect } from 'react';
import axios from 'axios';





function ExerciseList()
{
    const [exercises,setExercise]=useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:5000/exercises/')
        .then(res=>setExercise(res.data))
        .catch((error)=> {
            console.log(error)
            })

        })
        
        return(
        <div>
             ye hai list

        </div>
        )
    

}

export default ExerciseList;