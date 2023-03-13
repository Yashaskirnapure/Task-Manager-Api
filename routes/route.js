const express = require('express');
const router = express.Router();

const {
    getAllTasks,
    postTask,
    getTask,
    updateTask,
    removeTask
}
= require('../controllers/contollers');

router.route('/').get(getAllTasks).post(postTask);
router.route('/:taskID').get(getTask).patch(updateTask).delete(removeTask);

module.exports = {router};