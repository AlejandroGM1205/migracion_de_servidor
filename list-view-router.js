const express = require('express');
const router = express.Router();
const tasks = require('./src/tasks');

router.get('/tasksCompleted', (req, res) => {
    const completedTasks = tasks.filter(task => task.isCompleted);
    res.json(completedTasks)
    }
);

router.get('/tasksInCompleted', (req,res) => {
    const inCompletedTasks = tasks.filter(task => !task.isCompleted)

    res.json(inCompletedTasks)
});

module.exports = router;
