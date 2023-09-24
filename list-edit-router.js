const express = require('express');
const router = express.Router();

const handleInvalidRequest = require('./middlewares/handleInvalidRequest');
const createTask = require('./controllers/createTask')
const deleteTask = require('./controllers/deleteTask')
const updateTask = require('./controllers/updateTask')

router.post('/createTask', handleInvalidRequest, createTask);

router.delete('/deleteTask/:id', deleteTask);

router.put('/updateTask/:id', handleInvalidRequest, updateTask);

module.exports = router;