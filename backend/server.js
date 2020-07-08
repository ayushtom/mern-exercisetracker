const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const uri= process.env.URI;
mongoose.connect(uri,{useNewUrlParser: true,useCreateIndex: true});

const connection=mongoose.connection;
connection.once('open',() =>{
    console.log("mongodb connection established successfully");
})


const exerciseRouter=require('./routes/exercises.js');
const userRouter=require('./routes/users.js');

app.use('/exercises',exerciseRouter);
app.use('/users',userRouter);


app.listen(5000 , ()=> {
    console.log("server is running on port 5000")
})