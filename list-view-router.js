const express = require('express');
const router = express.Router();

const verifyParams = require('./middlewares/verifyParams');
// const getCompletedTasks = require('./controllers/getCompleteTasks');
// const getInCompletedTasks = require('./controllers/getInCompleteTasks');
const getTasks = require('./controllers/getTasks');

router.get('/tasks/:Completed',verifyParams, getTasks);

module.exports = router;
