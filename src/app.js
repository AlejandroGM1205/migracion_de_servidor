const express = require('express');
const app = express();

const tasks =[{
    "id": "123456",
    "isCompleted": false,
    "description": "walk the dog"
}];

//Responder con mi array [tasks] en formato JSON en mi servidor
app.get('/tasks', (req, res) => {
    res.json(tasks);
})

app.listen(3000, () => {
    console.log("Server running on port ",3000)
})