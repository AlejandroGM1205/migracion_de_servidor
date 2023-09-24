const tasks = require("../src/tasks");


const createTask = (req, res) => {
    const { id, isCompleted, description} = req.body;

    const newTask = {
        id,
        isCompleted,
        description
    }

    tasks.push(newTask)

    res.json(newTask)
}

module.exports = createTask;