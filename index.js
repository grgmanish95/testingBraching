const express = require("express");
const app = express();
const mongoose = require('mongoose');



app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/category', categoryRouter);
app.use('/job',auth.verifyUser ,jobRouter);
app.use('/user',userRouter);

mongoose.connect('mongodb:127.0.0.1:27017/branchingTesting', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true}) 
    .then (() => {
        console.log('Connected to database server');
    });

    app.get('/', (req, res) => {
   res.send("welcome to my app");
});



app.listen(3000, ()=> {
    console.log('Server is running at localhost:3000');
});
