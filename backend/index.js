const express = require("express");
const cors=require("cors");
const app=express()

app.use(cors());
app.use(express.json());


const jwt=require("jsonwebtoken");
const JWT_TOKEN=require("./config");

const cors=require('cors')
app.use(cors());

const {userRoute} = require('./routes/user');
const { accountRouter } = require("./routes/account");
app.use('/api/v1/user',userRoute);
app.use('/api/v1/account',accountRouter);

app.listen(3000);

