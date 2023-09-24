const express = require('express');
const router = express.Router();

const verifyParams = require('./middlewares/verifyParams');
const getCompletedTasks = require('./controllers/getCompleteTasks');

router.get('/tasksCompleted/:param1/:param2', verifyParams, getCompletedTasks);

router.get('/tasksInCompleted/:param1/:param2',verifyParams, );

module.exports = router;
