const express = require('express');
const router = express.Router();
const tasks = require('./src/tasks')

router.post('/createTask', (req, res) => {
    const { id, isCompleted, description} = req.body;

    const newTask = {
        id,
        isCompleted,
        description
    }

    tasks.push(newTask)

    res.json(newTask)
});

router.delete('/deleteTask/:id', (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex,1);
        res.send(`Tarea con ID ${taskId} eliminada.`)
    } else {
        res.status(404).send('Tarea no encontrada.')
    }
});

router.put('/updateTask/:id', (req, res) => {
    const taskId = req.params.id;
    const {isCompleted, description} = req.body;
    const taskToUpdate = tasks.find(task => task.id === taskId);

    if (taskToUpdate) {
        taskToUpdate.isCompleted = isCompleted;
        taskToUpdate.description = description;

        res.send(`Tarea con ID ${taskId} actualizada.`)
    } else {
        res.status(404).send('Tarea no encontrada.')
    }
});

module.exports = router;