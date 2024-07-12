const express = require('express');
const {
    getGroups,
    createGroup,
    getGroupById,
    updateGroup,
    deleteGroup
} = require('../controllers/group.controller');

const groupRouter = express.Router();

groupRouter.get('/groups', getGroups);
groupRouter.post('/groups', createGroup);
groupRouter.get('/groups/:id', getGroupById);
groupRouter.put('/groups/:id', updateGroup);
groupRouter.delete('/groups/:id', deleteGroup);

module.exports = groupRouter;