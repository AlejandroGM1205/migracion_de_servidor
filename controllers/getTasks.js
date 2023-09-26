const tasks = require("../src/tasks");


const getTasks = (req, res) => {
    const {Completed} = req.params
    console.log(Completed);
    console.log(Completed == 'Completed')

    if (Completed == 'Completed') {
        const completedTasks = tasks.filter(task => task.isCompleted);

        res.json(completedTasks)
    } else if (Completed =='InCompleted') {
        const inCompletedTasks = tasks.filter(task => !task.isCompleted)
        res.json(inCompletedTasks)
    } else {
        res.status(400).send('ERROR')
    }

};

module.exports = getTasks;