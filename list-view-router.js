const express = require('express');
const router = express.Router();

const verifyParams = require('./middlewares/verifyParams');
// const getCompletedTasks = require('./controllers/getCompleteTasks');
// const getInCompletedTasks = require('./controllers/getInCompleteTasks');
const getTasks = require('./controllers/getTasks');
const getTaskId = require('./controllers/getTaskId');


router.get('/tasks/:Completed',verifyParams, getTasks);
router.get('/tasksforid/:id', getTaskId);

module.exports = router;
