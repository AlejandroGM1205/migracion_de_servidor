const express = require('express');
const app = express();
const tasks = require('./tasks');

const viewRouter = require('../list-view-router.js');
const editRouter = require('../list-edit-router.js');
app.use(express.json());


//Responder con mi array [tasks] en formato JSON en mi servidor
app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.use('/editTasks', editRouter);
app.use('/viewTasks', viewRouter);


app.listen(3000, () => {
    console.log(`http://localhost:${3000}`)
})