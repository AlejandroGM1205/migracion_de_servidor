const tasks = require("../src/tasks");

const getInCompletedTasks = (req,res) => {
    const inCompletedTasks = tasks.filter(task => !task.isCompleted)

    res.json(inCompletedTasks)
}

module.exports = getInCompletedTasks;