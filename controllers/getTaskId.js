const tasks =require('../src/tasks');

const getTaskId = (req, res) => {
    const taskId = req.params.id;
    const task = tasks.find(task => task.id === taskId);

    if (!task){
        res.status(404).send('Tarea no encontrada');
    } else {
        res.send(task);
    }
}
module.exports = getTaskId;