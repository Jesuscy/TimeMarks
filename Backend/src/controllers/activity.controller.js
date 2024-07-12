const { Activity } = require('../models/activity.model');
const HTTPSTATUSCODE = require('../utils/httpStatusCode');

// Obtener todas las actividades
const getActivities = async (req, res) => {
    try {
        const activities = await Activity.find();
        if (!activities || activities.length === 0) {
            return res.status(200).json({ message: 'No activities found.' });
        }
        return res.status(200).json(activities);
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

// Crear una nueva actividad
const createActivity = async (req, res) => {
    try {
        const { activityName, startDate, endDate, activityUsers, activityGroup } = req.body;
        const newActivity = new Activity({
            activityName,
            startDate,
            endDate,
            activityUsers,
            activityGroup
        });
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener una actividad por ID
const getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id).populate('activityUsers').populate('activityGroup');
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

// Actualizar una actividad por ID
const updateActivity = async (req, res) => {
    try {
        const { activityName, startDate, endDate, activityUsers, activityGroup } = req.body;
        const activity = await Activity.findByIdAndUpdate(
            req.params.id,
            {
                activityName,
                startDate,
                endDate,
                activityUsers,
                activityGroup
            },
            { new: true }
        );
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json(activity);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una actividad por ID
const deleteActivity = async (req, res) => {
    try {
        const activity = await Activity.findByIdAndDelete(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: HTTPSTATUSCODE[500] });
    }
};

module.exports = {
    getActivities,
    createActivity,
    getActivityById,
    updateActivity,
    deleteActivity
};