const tasks = require("../src/tasks");

const getCompletedTasks = (req, res) => {
    const completedTasks = tasks.filter(task => task.isCompleted);
    res.json(completedTasks)
};

module.exports = getCompletedTasks;
