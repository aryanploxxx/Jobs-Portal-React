const express = require('express');
const mongoose = require('mongoose')
const router = express.Router()

const app = express();
const port = 5000;
require('dotenv').config();
var cors = require('cors')
 
const corsOptions = {
    origin: ['http://localhost:3000', 'https://aryan-jobs-portal-frontend.vercel.app/'],
    optionsSuccessStatus: 200
  };
  
app.use(cors(corsOptions));
  
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose.connect(process.env.MONGODBURI)
    .then(()=>{ console.log("Database Connected.") })
    .catch((err)=>{ console.log(`Error Message: ${err}`)})

const Job = require('./models/job')
const jobRouter = require('./routers/jobRouter')
app.use("/jobs", jobRouter)

app.get('/', (req, res) => {
    try {
        res.status(200).json({"Message": "API is working fine!"})
    } catch (err) {
        console.log(`Error: ${err}`);
        return res.status(500).json({ "Error in fetching API": err });
    }
})

app.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`);
})