const {Task} = require('../models/tasks');
const {asyncWrapper} = require('../middleware/async_wrapper');

const getAllTasks = asyncWrapper(async (req, res, errorHandler) => {
    const query = await Task.find({});
    return res.status(200).json({query});
});

const postTask = async (req, res, errorHandler) => {
    const query = await Task.create(req.body);
    return res.status(201).json({query});
};

const getTask = asyncWrapper(async (req, res, errorHandler) => {
    const {taskID} = req.params;
    const query = await Task.findById(taskID);
    if(!query) return res.status(404).json({messg : `no task with id ${taskID}`});
    return res.status(200).json({query});
});

const updateTask = asyncWrapper(async (req, res, errorHandler) => {
    const {taskID} = req.params;
    const query = await Task.findByIdAndUpdate(taskID, req.body, {
        new : true,
        runValidators : true
    });
    if(!query) return res.status(404).json({messg : `no task with id ${taskID}`});
    return res.status(200).json({query});
});

const removeTask = asyncWrapper(async (req, res, errorHandler) => {
    const {taskID} = req.params;
    const query = await Task.findByIdAndDelete(taskID);
    if(!query) return res.status(404).json({messg : `no task with id ${taskID}`})
    return res.status(200).json({messg : `removed task with id ${taskID}`});
});

module.exports = {
    getAllTasks,
    postTask,
    getTask,
    updateTask,
    removeTask
};