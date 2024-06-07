const express = require('express');
const mongoose = require('mongoose')
const router = express.Router()

const app = express();
const port = 5000;
require('dotenv').config();
var cors = require('cors')
 
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODBURI)
    .then(()=>{ console.log("Database Connected.") })
    .catch((err)=>{ console.log(`Error Message: ${err}`)})

const Job = require('./models/job')
const jobRouter = require('./routers/jobRouter')
app.use("/jobs", jobRouter)


app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})