const mongoose = require('mongoose')
const {groupSchema} = require('./group.model')
const activitySchema = mongoose.Schema({

    activityName:{
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
    activityUsers:[{type: mongoose.Schema.Types.ObjectId, ref:'User'}],
    
    activityGroup: groupSchema 
    
})

const Activity = mongoose.model('Activity', activitySchema, 'activitys')
module.exports = {Activity, activitySchema}