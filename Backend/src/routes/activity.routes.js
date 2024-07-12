const express = require('express');
const {
    getActivities,
    createActivity,
    getActivityById,
    updateActivity,
    deleteActivity
} = require('../controllers/activity.controller');

const activityRouter = express.Router();

activityRouter.get('/activities', getActivities);
activityRouter.post('/activities', createActivity);
activityRouter.get('/activities/:id', getActivityById);
activityRouter.put('/activities/:id', updateActivity);
activityRouter.delete('/activities/:id', deleteActivity);

module.exports = activityRouter;