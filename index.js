const PORT = 5000;
require('dotenv').config();
//console.log(process.env);

const express = require('express');
const app = express();

const {connectDB} = require('./database/connect');
const {router} = require('./routes/route');
const {not_found} = require('./middleware/not-found');
const {errorHandler} = require('./middleware/error_handler');

app.use(express.json());
app.use('/api/v1/tasks', router);

app.get('/welcome', (req, res) => {
    res.status(200).send("Task Manager");
});

app.use(not_found);
app.use(errorHandler);

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI);
        console.log("connected to database");
        app.listen(PORT, () => {
            console.log(`server listening to port ${PORT}`);
        });
    }catch(err){
        console.log(err);
    }
}
start();