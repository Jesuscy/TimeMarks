const express = require('express');
const {
    getActivities,
    createActivity,
    getActivityById,
    updateActivity,
    deleteActivity
} = require('../controllers/activity.controller');

const router = express.Router();

router.get('/activities', getActivities);
router.post('/activities', createActivity);
router.get('/activities/:id', getActivityById);
router.put('/activities/:id', updateActivity);
router.delete('/activities/:id', deleteActivity);

module.exports = router;