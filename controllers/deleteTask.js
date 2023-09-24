const tasks = require("../src/tasks");

const deleteTask = (req, res) => {
    const taskId = req.params.id;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex,1);
        res.send(`Tarea con ID ${taskId} eliminada.`)
    } else {
        res.status(404).send('Tarea no encontrada.')
    }
}

module.exports = deleteTask;