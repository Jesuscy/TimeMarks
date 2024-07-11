const mongoose = require('mongoose');
const { groupSchema } = require('./group.model');

const activitySchema = new mongoose.Schema({
    activityName: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    activityUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    activityGroup: groupSchema
});

const Activity = mongoose.model('Activity', activitySchema, 'activities');

module.exports = { activitySchema, Activity };