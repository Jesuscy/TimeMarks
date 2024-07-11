const mongoose = require('mongoose')
const {userSchema} = require('./user.model')

const groupSchema = mongoose.Schema({
  
    groupName:{
        type: String,
        required: true,
    },
    groupUsers: [userSchema]

})

const Group = mongoose.model('Group', userSchema, 'groups');
module.exports = {Group, groupSchema}